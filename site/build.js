/* Gera artifact.html: uma versao de arquivo unico do site, com todas as
   imagens de assets/ embutidas como data URI. Use para publicar/enviar o
   protótipo sem depender da pasta de assets.

   uso: node build.js                                                        */

const fs = require('fs');
const path = require('path');

const raiz = __dirname;
const fonte = path.join(raiz, 'index.html');
const destino = path.join(raiz, 'artifact.html');
const pastaAssets = path.join(raiz, 'assets');

const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' };

function recorte(html, inicio, fim) {
  const a = html.indexOf(inicio);
  const b = html.indexOf(fim);
  if (a < 0 || b < 0) throw new Error('marcador ausente: ' + (a < 0 ? inicio : fim));
  return html.slice(a + inicio.length, b);
}

const html = fs.readFileSync(fonte, 'utf8');
const cabeca = recorte(html, '<!--ARTIFACT:START-->', '<!--ARTIFACT:HEAD-END-->');
const corpo = recorte(html, '<!--ARTIFACT:BODY-START-->', '<!--ARTIFACT:END-->');

let saida = cabeca + '\n' + corpo;

let embutidos = 0, bytes = 0;
for (const arquivo of fs.readdirSync(pastaAssets)) {
  const ext = path.extname(arquivo).toLowerCase();
  const mime = MIME[ext];
  if (!mime) continue;
  const ref = 'assets/' + arquivo;
  if (!saida.includes(ref)) continue;
  const b64 = fs.readFileSync(path.join(pastaAssets, arquivo)).toString('base64');
  const dataUri = 'data:' + mime + ';base64,' + b64;
  saida = saida.split(ref).join(dataUri);
  embutidos++;
  bytes += dataUri.length;
}

const restantes = saida.match(/assets\/[^"')\s]+/g);
if (restantes) throw new Error('referencias nao resolvidas: ' + [...new Set(restantes)].join(', '));

fs.writeFileSync(destino, saida);
console.log('embutidos: ' + embutidos + ' arquivos (' + Math.round(bytes / 1024) + ' KB em base64)');
console.log('gravado: ' + destino + ' (' + Math.round(saida.length / 1024) + ' KB)');
