# Melibees — protótipo de landing page

Protótipo navegável construído sobre a identidade visual que já estava na pasta
`PROJETO MELIBEES` (logos, selos, padronagens e tipografia).

**Link publicado:** https://claude.ai/code/artifact/7385957e-8572-4098-be33-b3150d6ef6fe

## Arquivos

| Arquivo | O que é |
|---|---|
| `site/index.html` | O site. Arquivo único, com as imagens referenciadas em `site/assets/`. É este que você edita. |
| `site/assets/` | Imagens recortadas e redimensionadas a partir de `PROJETO MELIBEES`. |
| `site/build.js` | Gera o `artifact.html` embutindo as imagens. Rode `node build.js` dentro de `site/`. |
| `site/artifact.html` | Versão de arquivo único (imagens em base64), para publicar ou enviar por e-mail. **Gerado — não edite.** |
| `site/publicar.js` | Monta a pasta `publicar/`. Rode `node publicar.js` dentro de `site/`. |
| `publicar/` | **É esta pasta que vai para o Netlify.** Gerada — não edite. |
| `CONTEUDO-PENDENTE.md` | Lista do que precisa ser levantado com o Ricardo antes de ir ao ar. |

Para ver o site: abra `site/index.html` no navegador.

Depois de editar o `index.html`, rode os dois geradores:

```
cd site
node publicar.js   # atualiza a pasta que vai para o Netlify
node build.js      # atualiza o arquivo único para enviar por link/e-mail
```

## Publicar no Netlify

Suba a pasta **`publicar/`** — só ela. São 10 arquivos, 570 KB:

```
publicar/
  index.html
  assets/   (9 imagens)
```

O jeito mais rápido é arrastar a pasta inteira para **app.netlify.com/drop**. O
Netlify publica na hora e devolve um endereço `.netlify.app`; o domínio próprio
se liga depois, em Domain settings. Para atualizar, arraste de novo por cima em
Deploys.

Não precisa de build command nem publish directory: é HTML estático puro, sem
npm e sem dependência. Se preferir ligar num repositório Git, aponte o publish
directory para `publicar` e deixe o build command vazio.

**O que não sobe:** `build.js`, `publicar.js`, `artifact.html` e as imagens que o
site não usa. São ferramenta e material de trabalho — o `publicar.js` já deixa
tudo isso de fora sozinho, lendo do `index.html` quais imagens são realmente
referenciadas.

**Antes de divulgar o link**, vale pedir as meta tags de compartilhamento
(Open Graph): sem elas, o link colado no WhatsApp aparece sem imagem nem
descrição. Elas dependem do endereço final, por isso ficaram para depois do
primeiro deploy.

## Decisões de design

Tudo saiu da identidade que já existia — nada foi inventado do zero.

**Cores** — amostradas diretamente dos PNGs da marca:
terracota `#D34D1E`, terra queimada `#A0380A`, âmbar `#DD9522`, ouro `#F4C540`,
lima `#A9C84B`, mata `#3A8242`.

**Tipografia** — Josefin Sans (a fonte da marca, que está em `TIPOGRAFIAS/`) para
títulos e rótulos, carregada do Google Fonts. Para textos longos ela cansa a
leitura, então entrou a Alegreya para corpo de texto e a Alegreya Sans para
dados, preços e legendas. As três conversam bem e nenhuma exige licença paga.

**Layout** — faixas de cor de sangria total separadas por ondas orgânicas, com a
padronagem de flores ao fundo. É a mesma linguagem dos posts do Instagram da
marca, e não uma página branca com detalhes coloridos. A página abre em amarelo,
tem a faixa verde no própolis e as terracotas no comparativo e na entrega.

**A padronagem de flores** foi redesenhada em SVG a partir de
`PADRONAGENS-27.png`, para poder mudar de cor e escala sem perder qualidade.

**Os potes e frascos** são desenhados em HTML/CSS reproduzindo o rótulo real
(arcos âmbar, logo branca no arco de cima, nome do mel no centro, volume no arco
de baixo). Cada mel tem a sua cor de mel. Quando as fotos oficiais dos produtos
chegarem, é só trocar por `<img>`.

**Tema claro e escuro** — o site se adapta ao tema do navegador de quem acessa.
Os dois foram desenhados; não é inversão automática.

## O que o site resolve, ponto a ponto da reunião

| Pedido da reunião | Onde está |
|---|---|
| Uso como alimento e como remédio | Seção "Duas formas de usar" — ver ressalva legal abaixo |
| Explicar as abelhas, os meles, como é produzido | "Mesa de degustação", "Como este mel é produzido" |
| Sobre a marca e a história | **removido a seu pedido** |
| Vídeos das técnicas | **removido a seu pedido** |
| Estrutura de venda para vender em quantidade | Carrinho → WhatsApp, kits e clube por assinatura |
| Informações do produtor Ricardo, onde ele cria | Seção "Quem produz" + galeria do meliponário |
| Cursos, workshops, consultoria | Seção "Formação", três cards com captação por WhatsApp |
| Por que o produto é mais caro | Seção "Por que nosso mel é diferente dos demais?", com tabela comparativa |
| Passar para o online o que ele faz na venda presencial | **A mesa de degustação** — é o coração do site |
| Frete e logística | Seção "Entrega" |

### Vidro fosco

O botão secundário do herói e a tabela comparativa usam `backdrop-filter`: o que
está atrás — a cor da faixa e a padronagem — aparece desfocado através deles. A
tabela deixa de competir com o padrão de fundo e passa a flutuar sobre ele.

### A mesa de degustação

É a parte que responde ao pedido mais difícil da reunião: *"o que ele faz nas
vendas em pessoa, ele consiga transmitir no online"*.

O cliente escolhe uma abelha e vê o mel que ela faz — a cor no pote, o perfil
sensorial em barras (doçura, acidez, corpo, floral, retrogosto), os descritores
de aroma, a textura, com o que harmoniza e para quem é indicado. É a conversa
do Ricardo na feira, transformada em interface. É também o que justifica o preço
sem precisar pedir desculpa por ele.

O vocabulário usado é o de análise sensorial — coerente com a formação de
sommelier de mel que ele está fazendo.

### O carrinho

Funciona de verdade: soma itens, controla quantidade e monta uma mensagem
formatada que abre no WhatsApp do Ricardo com o pedido pronto. Para um protótipo,
isso mostra a mecânica de venda completa sem precisar de gateway de pagamento.
Se depois virar loja de verdade, a estrutura de dados dos produtos
(`MELES`, `PROPOLIS`, `KITS`, no `<script>` do final do arquivo) já está pronta
para plugar num e-commerce.

## Ressalva importante: "remédio"

A reunião pedia o produto posicionado como *remédio e alimento*. Mel e própolis
são registrados como **alimentos** e a legislação sanitária brasileira não
permite atribuir a eles indicação terapêutica, promessa de cura ou de tratamento
na comunicação comercial.

O site foi escrito para entregar a intenção sem criar esse risco: fala em **uso
tradicional** e em **cuidado diário**, e traz duas notas explícitas — uma ao pé
da seção "Duas formas de usar" e outra no rodapé. A mesma nota carrega o alerta
de que mel não deve ser dado a crianças com menos de 1 ano (botulismo infantil).

Com a saída do FAQ, essas duas notas passaram a ser o único lugar onde a
ressalva aparece. Vale conferir se o texto delas está do jeito que o cliente
quer.

**Vale confirmar com o cliente** se ele topa esse enquadramento antes de fechar
o texto.

## O que foi removido nas rodadas de ajuste

Cinco seções saíram a seu pedido: **depoimentos**, **dúvidas (FAQ)**, **chamada
final de reserva**, **história da marca** e **vídeos das técnicas**. Saíram
também a faixa de aviso do topo, o subtítulo do herói e vários textos de apoio
de seção. A página passou de ~17.000 para ~12.000 pixels de altura.

Quatro coisas que valem saber, para decidir se quer alguma de volta:

- **Três pedidos da reunião não estão mais no site.** "Vídeos das técnicas",
  "sobre a marca e a história da marca" e a linha do tempo eram itens explícitos
  do briefing do cliente. Se ele perguntar por eles na apresentação, o material
  está no histórico do arquivo e volta rápido.
- **A página não tem mais um fechamento.** Ela termina na entrega e cai direto no
  rodapé. Numa landing page de venda, o último bloco costuma ser o que converte
  quem leu tudo. Hoje o único caminho no fim da página é o botão flutuante do
  WhatsApp.
- **Saíram respostas que evitavam objeção de compra:** cristalização do mel,
  conservação, qual mel escolher primeiro, prazo de entrega e a condição de
  revenda para lojas. Eram as perguntas que o Ricardo responde antes de fechar
  venda — e agora ele vai responder uma a uma no WhatsApp.
- **O herói ficou sem texto de apoio.** Só o título, os botões e o selo. Ficou
  mais direto; em compensação, quem chega não lê mais em nenhum lugar da dobra
  por que cada espécie faz um mel diferente.

## Marcador de conteúdo pendente

No rodapé há o botão **"Marcar conteúdo pendente"**. Ele destaca na própria
página todos os blocos que ainda dependem de informação real do cliente. Use na
reunião de apresentação — é mais rápido que ler uma lista.

## Prazo (rascunho para você ajustar)

O cliente perguntou se 60 dias cobrem design e desenvolvimento, sabendo que os
meles ficam prontos em setembro. Com o protótipo já de pé, uma divisão possível:

| Etapa | Dias | O que acontece |
|---|---|---|
| Aprovação do protótipo e ajuste de direção | 5 | Esta entrega, revisada com o cliente |
| Levantamento de conteúdo com o Ricardo | 10 | Textos, preços, bio, história, dados de frete |
| Produção de fotos e vídeos no meliponário | 10 | Pode correr em paralelo ao anterior |
| Design final das telas restantes | 10 | Páginas internas, se houver, e refino |
| Desenvolvimento e integração de pagamento | 15 | Se virar e-commerce de verdade |
| Testes, ajustes e publicação | 5 | |
| **Total** | **~55 dias** | Sobra folga dentro dos 60 |

O gargalo não é o desenvolvimento — é a produção de conteúdo com o Ricardo,
principalmente as fotos e os vídeos. Vale travar essa data primeiro.
