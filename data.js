/* Produtos e preços do cardápio Salgateria D'Ana. */
const rawMenu={
'Salgados e lanches':`Baguete Folhada|8\nBolinho de carne|7\nCoxinha de frango|7\nCoxinha de frango com Requeijão|7\nEsfiha de carne|7\nEsfiha de calabresa|7\nEsfiha de frango com requeijão|7\nFolhado de bauru|7\nFogazza de queijo|7\nPão de batata|7\nPão de queijo|5\nKibe|7\nLanche natural de frango desfiado|12\nSanduíche de Atum|14\nPão na chapa|5\nPão na chapa com requeijão|5\nPão com queijo mussarela|6\nPão com ovo|7\nMisto quente|12\nX - Burguer|15\nX - Salada|17\nX-Linguiça|17\nPastel Carne|12\nPastel Frango com requeijão|12\nPastel Pizza|12`,
'Pratos e acompanhamentos':`Batata frita (porção 200gr)|6\nSalada (alface tomate cenoura e pepino)|6\nOmelete simples|6\nOmelete completo|8`,
'Pratos Rápidos':`Panqueca avulsa|14\nPanqueca com fritas|20\nPanqueca com salada|20\nBife de Linguiça (avulso)|8\nBife de Linguiça com acompanhamento|14\nFilé Empanado|8\nFilé Empanado com arroz e fritas|20`,
'Bebidas':`REFRI 200|3\nREFRI LATA|5\nREFRI 600|7\nÁgua de Coco Kero Côco 330 ml|4.6\nÁgua de Coco Du Côco 200ml|3.4\nÁgua garrafa|3\nÁgua garrafa com gás|3.5\nSuco Del Valle 450 ml garrafa|5\nDel Valle Lata|5\nMaguary caixinha|3\nAchocolatado Todynho (200 ml)|4\nAchocolatado Todynho levinho (200ml)|5\nNatural one Laranja (180ml)|4.5\nNatural one Uva (180ml)|4.5\nNatural one Laranja (300 ml)|6.5\nNatural one Uva (300 ml)|6.5\nMonster Grande|12.3\nMonster Pequeno|8\nChá ice tea sabores|6\nChá ice tea sabores sem açúcar|6.5\nExpresso|3.5\nExpresso Lungo|4\nCafé com leite|4\nCappuccino|4\nNescau|4.5\nIogurte Fazenda|4.5\nIogurte Itambé|4.7\nWhey Itambé|7.5\nWhey Yopró|8.5\nH2O - limão|6`,
'Doces e sobremesas':`Pudim de chocolate|5\nPudim de leite condensado|5\nGelatina sabores|7\nCocada caseira|4.5\nBolo no pote|9\nBolo Fatia|9\nBolo Bauducco|3\nRoll Bauducco|3.9\nBiscoito Negresco Sabores|5\nBiscoito Bono Sabores|5\nBarra de cereal sabores|3\nBombom sonho de valsa|2\nBombom ouro branco|2\nTRENTO|3.5\nChocolate Surpresa|4.5\nChocolates Lacta|4\nMENTOS|4\nHALLS|2.5\nTRIDENT|2.8\nBala Toffe - Unidade|0.5\nBala 7 Belo - Unidade|0.25\nBala Hortelã - Unidade|0.15\nBalas 5 unidades - Hortelã|0.5\nBalas 5 unidades - Toffe|2\nBalas 5 unidades - 7 Belo|1.5\nPaçoca Tradicional|1.5\nPaçoca zero|2.5\nPé de moça|3\nPé de Moleque|3\nPingo de leite|1.5\nBananinha tradicional|3\nBananinha zero|3.5\nSalgadinhos Piraquê (100gr)|6\nSalgadinhos torcida 60 g|3.5\nSalgadinho Fofura|2.8`};
const emojiFor=category=>({'Salgados e lanches':'🥟','Pratos e acompanhamentos':'🍽️','Pratos Rápidos':'🍽️',Bebidas:'🥤','Doces e sobremesas':'🍰'})[category];
const specialDescriptions={
  'Panqueca avulsa':'Sabores: presunto e queijo, carne ou frango com requeijão.',
  'Panqueca com fritas':'Panqueca com 1 acompanhamento: fritas.',
  'Panqueca com salada':'Panqueca com 1 acompanhamento: salada de alface, tomate e cebola.',
  'Bife de Linguiça (avulso)':'Bife de Linguiça servido avulso.',
  'Bife de Linguiça com acompanhamento':'Bife de Linguiça com 1 acompanhamento à escolha.',
  'Filé Empanado':'Filézinho de frango empanado servido avulso.',
  'Filé Empanado com arroz e fritas':'Filézinho de frango empanado com arroz e fritas.'
};
const MENU=Object.entries(rawMenu).flatMap(([category,rows])=>rows.split('\n').map(row=>{const [name,price]=row.split('|');return{name,category,price:Number(price),emoji:emojiFor(category),description:specialDescriptions[name]||'Consulte a disponibilidade no atendimento.'}}));
