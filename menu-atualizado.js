/* Produtos e preços do cardápio Salgateria D'Ana. */
const rawMenu={
'Salgados e lanches':`Baguete Folhada|8\nBolinho de carne|7\nCoxinha de frango|7\nCoxinha de frango com Requeijão|7\nEsfiha de carne|7\nEsfiha de calabresa|7\nEsfiha de frango com requeijão|7\nFolhado de bauru|7\nFogazza de queijo|7\nPão de batata|7\nPão de queijo|5\nKibe|7\nLanche natural de frango desfiado|12\nPão na chapa|5\nPão na chapa com requeijão|5\nPão com queijo mussarela|6\nPão com ovo|7\nMisto quente|12\nX - Burguer|15\nX - Salada|17\nX-Linguiça|17\nPastel Carne|12\nPastel Frango com requeijão|12\nPastel Pizza|12`,
'Pratos e acompanhamentos':`Batata frita (porção 200gr)|6\nSalada (alface tomate cenoura e pepino)|6\nOmelete simples|6\nOmelete completo|8`,
'Pratos Rápidos':`Panqueca avulsa|14\nBife de Linguiça (avulso)|8\nFilé Empanado|8\nFrango Empanado com arroz e fritas|22\nFilé de Frango Grelhado + Acompanhamentos|21`,
'Bebidas':`REFRI 200|3\nREFRI LATA|5\nREFRI 600|7\nÁgua de Coco Kero Côco 330 ml|4.6\nÁgua de Coco Du Côco 200ml|3.4\nÁgua garrafa|3\nÁgua garrafa com gás|3.5\nSuco Del Valle 450 ml garrafa|5\nDel Valle Lata|5\nMaguary caixinha|3\nAchocolatado Todynho (200 ml)|4\nAchocolatado Todynho levinho (200ml)|5\nNatural one Laranja (180ml)|4.5\nNatural one Uva (180ml)|4.5\nNatural one Laranja (300 ml)|6.5\nNatural one Uva (300 ml)|6.5\nMonster Grande|12.3\nMonster Pequeno|8\nChá ice tea sabores|6\nChá ice tea sabores sem açúcar|6.5\nExpresso|3.5\nExpresso Lungo|4\nCafé com leite|4.5\nCappuccino|4.5\nNescau|4.5\nIogurte|4\nYopró|8.5\nH2O - limão|6`,
'Doces e sobremesas':`Pudim de chocolate|5\nPudim de leite condensado|5\nGelatina sabores|7\nCocada caseira|4.5\nBolo no pote|9\nBolo Fatia|9\nRoll Bauducco|3.9\nBiscoito Negresco Sabores|5\nBiscoito Bono Sabores|5\nBarra de cereal sabores|3\nBombom sonho de valsa|2\nBombom ouro branco|2\nTRENTO|3.5\nChocolate Surpresa|4.5\nChocolates Lacta|4\nMENTOS|4\nHALLS|2.5\nTRIDENT|2.8\nBala Toffe - Unidade|0.5\nBala 7 Belo - Unidade|0.25\nBala Hortelã - Unidade|0.15\nBalas 5 unidades - Hortelã|0.5\nBalas 5 unidades - Toffe|2\nBalas 5 unidades - 7 Belo|1.5\nPaçoca Tradicional|1.5\nPaçoca zero|2.5\nPé de moça|3\nPé de Moleque|3\nPingo de leite|1.5\nBananinha tradicional|3\nBananinha zero|3.5\nSalgadinhos Piraquê (100gr)|6\nSalgadinhos torcida 60 g|3.5\nSalgadinho Fofura|2.8`};
rawMenu['Doces e sobremesas']=rawMenu['Doces e sobremesas'].replace('TRENTO|3.5','TRENTO|3.8');
rawMenu['Doces e sobremesas']=rawMenu['Doces e sobremesas'].replace('Salgadinhos Piraquê (100gr)|6','Salgadinhos Piraquê (100gr)|5');
rawMenu['Doces e sobremesas']=rawMenu['Doces e sobremesas'].replace('Pé de moça|3','Pé de moça|3.5').replace('Pé de Moleque|3','Pé de Moleque|3.5');
rawMenu['Doces e sobremesas']=rawMenu['Doces e sobremesas'].replace('Pudim de chocolate|5\n','').replace('Pudim de leite condensado|5','Pudim de leite condensado|6');
rawMenu['Salgados e lanches']+='\nHamburgão|7.5\nFolhado 4 Queijos|8';
rawMenu['Salgados e lanches']=rawMenu['Salgados e lanches'].replace('Pão na chapa com requeijão|5','Pão na chapa com requeijão|6').replace('Pão com queijo mussarela|6','Pão com queijo|7').replace('X - Burguer|15','X - Burguer|16').replace('X - Salada|17','X - Salada|18')+'\nX - Bacon|19\nX - Frango Bacon|19\nLanche Americano|17\nX - Egg Salada|20\nPão com queijo e ovo|9';
rawMenu['Pratos e acompanhamentos']=rawMenu['Pratos e acompanhamentos'].replace('Batata frita (porção 200gr)|6','Batatas fritas 200g|7').replace('Salada (alface tomate cenoura e pepino)|6','Salada|7').replace('Omelete simples|6','Omelete simples|7').replace('Omelete completo|8','Omelete completo|9')+'\nCarne Moída|8\nFeijão Carioca|6';
rawMenu['Pratos Rápidos']=rawMenu['Pratos Rápidos'].replace('Filé Empanado|8','Frango Empanado|9')+'\nFrango Grelhado|8';
rawMenu.Bebidas=rawMenu.Bebidas.replace('Água de Coco Kero Côco 330 ml|4.6','Água de Coco Kero Côco 330 ml|4').replace('Água de Coco Du Côco 200ml|3.4','Água de Coco Du Côco 200ml|4');
rawMenu['Doces e sobremesas']=rawMenu['Doces e sobremesas'].replace('HALLS|2.5','HALLS|2.8').replace('TRIDENT|2.8','TRIDENT|3');
rawMenu['Salgados e lanches']=rawMenu['Salgados e lanches'].replace('Hamburgão|7.5','Hamburgão|8');
const emojiFor=category=>({'Salgados e lanches':'🥟','Pratos e acompanhamentos':'🍽️','Pratos Rápidos':'🍽️',Bebidas:'🥤','Doces e sobremesas':'🍰'})[category];
const specialDescriptions={
  'Panqueca avulsa':'Sabores: presunto e queijo, carne ou frango com requeijão.',
  'Bife de Linguiça (avulso)':'Bife de Linguiça servido avulso.',
  'Filé Empanado':'Filézinho de frango empanado servido avulso.',
  'Frango Empanado com arroz e fritas':'Filézinho de frango empanado com arroz e fritas.',
  'Filé de Frango Grelhado + Acompanhamentos':'Filé de frango grelhado, fritas e arroz.'
};
const MENU=Object.entries(rawMenu).flatMap(([category,rows])=>rows.split('\n').map(row=>{const [name,price]=row.split('|');return{name,category,price:Number(price),emoji:emojiFor(category),description:specialDescriptions[name]||'Consulte a disponibilidade no atendimento.'}}));
