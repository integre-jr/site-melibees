# Conteúdo a levantar com o Ricardo

Tudo listado aqui está **preenchido com conteúdo provisório** no protótipo, para
a página ficar apresentável. Nada disso é informação confirmada do cliente.

No site, o botão **"Marcar conteúdo pendente"** (rodapé) destaca esses blocos
diretamente na tela.

---

## 1. Preços — todos provisórios

Nenhum preço foi informado na reunião. Os valores do protótipo são plausíveis
para mel de abelha sem ferrão no Brasil, mas são chute.

| Produto | No protótipo |
|---|---|
| Mel Jataí 200 g | R$ 129 |
| Mel Mandaçaia 200 g | R$ 98 |
| Mel Guaraipo 200 g | R$ 145 |
| Mel Bugia 200 g | R$ 112 |
| Mel Canudo 200 g | R$ 92 |
| Extrato de própolis 30 ml | R$ 68 a R$ 78 |
| Extrato de própolis 20 ml | R$ 64 |
| Linha Essencial 30 ml | R$ 89 a R$ 95 |
| Kit Descoberta | R$ 289 |
| Kit Sommelier | R$ 545 |
| Clube Melibees (trimestral) | R$ 179 |

Editar em `site/index.html`, nos objetos `MELES`, `PROPOLIS` e `KITS` dentro do
`<script>` no final do arquivo.

## 2. Notas de degustação — a validar

O perfil sensorial de cada mel (doçura, acidez, corpo, floral, retrogosto),
os descritores de aroma, a textura e as harmonizações foram escritos a partir da
literatura geral de meliponicultura. **São a base certa, mas quem tem de assinar
embaixo é o Ricardo** — ele é o sommelier, e essa seção é a autoridade dele.

Vale sentar com ele e preencher os cinco perfis de fato. É meia hora de conversa
e vira o ativo mais forte do site.

## 3. Espécie do mel de Jataí

Os rótulos em PDF trouxeram o nome científico de quatro meles:

- Canudo — *Scaptotrigona depilis*
- Mandaçaia — *Melipona quadrifasciata*
- Guaraipo — *Melipona bicolor schenki*
- Bugia — *Melipona mondury*

O PDF do Jataí veio com o texto convertido em curvas e não deu para extrair. O
protótipo usa ***Tetragonisca angustula***, que é a espécie padrão para jataí,
mas **confirme com o rótulo impresso**.

## 4. Fotos

| Onde | O que precisa | Situação no protótipo |
|---|---|---|
| Herói | Foto oficial dos potes | Mockups novos (SVG sem fundo, `Imagens_melibees2/`) desde 06/10/2026 |
| Produção | Manejo, colheita por sucção, interior da caixa | Fotos recortadas dos posts do Instagram da marca |
| Produção | Envase e rotulagem | Espaço vazio marcado |
| Produtor | Retrato do Ricardo no meliponário | Espaço vazio marcado |
| Meliponário | Galeria do local onde ele cria | Usa as mesmas fotos da produção |
| Produtos | Foto de cada pote e cada frasco | Mockups novos (`Imagens_melibees2/`) desde 06/10/2026: potes em SVG sem fundo, frascos em JPG com o fundo clareado até o branco do card |

As fotos atuais vieram de `MONITORIA - LILY/`, ou seja, do material de social da
própria marca. Uma delas (`foto-manejo`) mostra apiário de *Apis* com traje
completo — o que contradiz o texto do site, que diz que abelha sem ferrão se
maneja sem fumaça e sem traje. **Trocar essa foto é prioridade.**

**Retorno do cliente (03/10/2026):** os potes e frascos serão trocados pelas fotos
individuais com o rótulo final e o Selo Arte, que o artista dos rótulos vai
fazer. O mockup enviado inclui produtos ainda não lançados; confirmar quais
estão à venda antes de colocar no site.

**Mockups de 06/10/2026 (`Imagens_melibees2/`):** substituíram os de 03/10 com os
mesmos nomes de arquivo em `site/assets/`. Os frascos foram recortados no mesmo
enquadramento dos anteriores. Antes de mostrar ao cliente, vale saber que:

- **Dois frascos "Essencial" vieram sem a palavra ESSENCIAL.** O de Jataí
  (laranja com faixa amarela) está no site como "Jataí Essencial", mas o rótulo
  diz só "Jataí". O de Mandaçaia com faixa amarela (`propolis-mandacaia-essencial.jpg`)
  tem o mesmo problema; ele não está à venda no site, então só ficou na pasta.
- **Há texto embaralhado nos rótulos.** Os frascos vieram de geração por IA
  (arquivos `Gemini_Generated_Image_*`), e os potes têm o mesmo sintoma: o slogan
  sob a logo e as laterais estão ilegíveis. Na frente dos potes aparece "peso kg."
  (Bugia, Canudo, Mandaçaia) e "peso hg." (Guaraipo) em vez de "peso líq.", e
  "Guaraïpo" com trema. Só o pote de Jataí está certo.
- **"do abelha sem ferrão"** aparece nos quatro frascos da linha comum, e "de
  abelha" nos Essenciais. Já estava assim nos mockups de 03/10 — pode ser erro na
  arte do rótulo, vale avisar o artista.
- O frasco de Mandaçaia Azul diz 30 ml; o site vende como 20 ml.

**Selo ANSF (provisório):** o cliente pediu para trocar ASF por ANSF. Como não
havia arquivo com a sigla nova, o site usa o PNG antigo com "ASF" apagado por
máscara e "ANSF" escrito por cima, no topo e no rodapé (`site/index.html`,
`selo__sigla`). Quando o cliente mandar o selo oficial com ANSF, substituir o
SVG pelo arquivo.

## 5. Vídeos — seção removida do site

A seção de vídeos saiu do protótipo a seu pedido. Se voltar, os quatro títulos
sugeridos eram: colheita por sucção; divisão de uma colônia de mandaçaia; dentro
de uma caixa de jataí; e como provar um mel (a técnica do sommelier). O último é
o mais estratégico — é ele que transporta a venda presencial para o online.

## 6. Biografia do Ricardo

Nada foi informado na reunião além de "ele é produtor" e "faz cursos de análise
de mel e sommelier de mel". O protótipo tem um texto plausível, escrito para
segurar o layout.

Levantar:

- Há quantos anos ele cria abelhas, e como começou
- Onde fica o meliponário (cidade/região — o endereço do CNPJ é residencial)
- Quantas colônias, quantas espécies
- Quais formações ele já concluiu e quais estão em andamento, com nome da
  instituição — isso é o que sustenta o discurso de autoridade

A seção de **história da marca** foi removida do site a seu pedido. Se voltar,
faltam: de onde veio o nome Melibees, a decisão de virar marca e datas reais
para a linha do tempo.

## 7. Entrega e frete

Ponto levantado na reunião: existe uma transportadora parceira, mas os valores
estão altos e vai ser preciso trocar.

Definir antes de publicar:

- Qual transportadora
- Prazo por região
- Política de frete grátis (o Kit Sommelier promete frete grátis no protótipo)
- Se há retirada em Joinville e entrega local, e em que condições
- Política de quebra em trânsito (o protótipo promete reposição)

## 8. Meios de pagamento

O protótipo cita Pix, cartão em até 3x sem juros e boleto. Confirmar.

Decidir também se o site vira loja de verdade ou se o fechamento continua pelo
WhatsApp. Hoje o carrinho monta o pedido e joga na conversa — o que funciona bem
para volume baixo e médio, mas não escala para "vender em grande quantidade",
que foi o objetivo declarado na reunião. Vale essa conversa.

## 9. Contatos

- WhatsApp `(47) 98847-8238` — veio dos rótulos, confirmar se é o número de venda
- Instagram — link não informado
- E-mail comercial — não informado
- CNPJ e endereço vieram dos rótulos e estão no rodapé

## 10. Kits

Composição e preço dos três kits foram inventados para mostrar a estrutura de
venda. Definir com o Ricardo o que faz sentido montar, considerando que o
Guaraipo sai em lote pequeno e pode não sustentar um kit fixo.
