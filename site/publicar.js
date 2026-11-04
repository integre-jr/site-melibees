/* Monta a pasta ../publicar/ com exatamente o que vai para o ar:
   index.html + só as imagens que o site realmente usa.

   Fica de fora tudo que é ferramenta ou material de trabalho:
   build.js, publicar.js, artifact.html e as imagens não utilizadas.

   uso: node publicar.js                                                     */

const fs = require('fs');
const path = require('path');

const raiz = __dirname;
const destino = path.join(raiz, '..', 'publicar');
const pastaAssets = path.join(raiz, 'assets');

const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');

/* descobre no HTML quais arquivos de assets/ são de fato referenciados */
const usados = new Set((html.match(/assets\/[A-Za-z0-9._-]+/g) || []).map(r => r.replace('assets/', '')));

const faltando = [...usados].filter(a => !fs.existsSync(path.join(pastaAssets, a)));
if (faltando.length) {
  console.error('ERRO: o index.html aponta para arquivos que não existem em assets/:');
  faltando.forEach(a => console.error('  - ' + a));
  process.exit(1);
}

/* recria a pasta do zero, para não deixar sobra de uma publicação anterior */
fs.rmSync(destino, { recursive: true, force: true });
fs.mkdirSync(path.join(destino, 'assets'), { recursive: true });

fs.copyFileSync(path.join(raiz, 'index.html'), path.join(destino, 'index.html'));
let bytes = fs.statSync(path.join(destino, 'index.html')).size;

for (const arquivo of [...usados].sort()) {
  fs.copyFileSync(path.join(pastaAssets, arquivo), path.join(destino, 'assets', arquivo));
  bytes += fs.statSync(path.join(pastaAssets, arquivo)).size;
}

const naoUsados = fs.readdirSync(pastaAssets).filter(a => !usados.has(a));

console.log('pasta pronta: ' + path.resolve(destino));
console.log('  index.html + ' + usados.size + ' imagens · ' + Math.round(bytes / 1024) + ' KB no total');
if (naoUsados.length) {
  console.log('  fora (não usadas pelo site): ' + naoUsados.join(', '));
}
console.log('\nArraste essa pasta inteira para app.netlify.com/drop');
