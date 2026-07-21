# Cardápio Digital — Salgateria D'Ana

Protótipo estático, sem instalação. Abra `index.html` no navegador para o cardápio digital, otimizado para celular e acesso por QR Code.

## Atualizar produtos e preços

Abra `data.js` em qualquer editor de texto. Os produtos e preços das três primeiras abas já foram cadastrados. Para alterações futuras, use este modelo:

```js
{name:'Nome do produto', category:'Categoria', price:7, emoji:'🥟', description:'Descrição curta.'},
```

Use `price:null` quando quiser exibir “Consulte”. O menu cria automaticamente filtros para qualquer nova categoria. Troque também o endereço no `href` do botão WhatsApp em `index.html` pelo número da loja, no formato `55DDDNUMERO` (sem espaços ou sinais).

## Publicação gratuita

1. Crie um repositório no GitHub e envie estes arquivos.
2. Em **Settings → Pages**, selecione a ramificação principal e a pasta raiz.
3. Copie o endereço publicado e use-o para gerar o QR Code definitivo.

O QR Code só deve ser gerado após a publicação, pois ele precisa apontar para a URL final do cardápio.
