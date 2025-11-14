import { StoryNode } from '@/types/game';

export const storyNodes: Record<string, StoryNode> = {
  start: {
    id: 'start',
    text: `Era uma sexta-feira qualquer até o momento em que a notificação iluminou a tela do seu celular.

A luz branca do visor cortou a escuridão do quarto. Você pegou o telefone com mãos trêmulas.

"Ele sabe de tudo. Ainda há tempo para se salvar."

Por um instante, você achou que fosse spam. Algum golpe elaborado. Mas então veio a segunda mensagem:

"Rafael não é quem você pensa. Corra."

O nome dele. *Rafael*. Seu coração gelou. Quem mais saberia? Quem mais teria esse número?

Seus dedos tremem sobre a tela. O quarto parece menor. O ar, mais pesado. Você sente os olhos de alguém - ou algo - observando você no escuro.

O que você faz?`,
    choices: [
      { text: 'Ignorar e seguir a vida normalmente', nextNode: 'reason1' },
      { text: 'Buscar respostas em lugares místicos', nextNode: 'destiny1' },
      { text: 'Investigar quem enviou a mensagem', nextNode: 'truth1' }
    ],
    animation: 'fade-in',
    sound: 'notification'
  },

  // CAMINHO DA RAZÃO
  reason1: {
    id: 'reason1',
    text: `Você decide fingir que nada aconteceu. Apaga as mensagens. Bloqueia o número desconhecido.

Rafael te espera naquela noite. Jantar. Flores. Promessas. Você sorri. Ele sorri de volta. Mas há algo nos olhos dele - algo que você nunca viu antes.

"Está tudo bem?", ele pergunta.

"Está", você mente.

Os dias passam. Você tenta esquecer. Mas as coisas começam a mudar: mensagens apagadas no seu celular, ligações que você não fez no histórico, silêncios longos demais quando você entra na sala.

Uma noite, você acorda às 3h da manhã. Rafael não está na cama. Você o encontra na sala, no escuro, olhando fixamente para o celular dele. A luz azul ilumina seu rosto. Ele não percebe você ali.

Então chega outra mensagem:

"Ele está te vigiando. Cada passo. Cada respiração. Você ainda tem tempo."

Você apaga. Desativa notificações. Mas quando olha no espelho, não se reconhece mais. O medo mudou você.

Naquela noite chuvosa, você decide que precisa saber a verdade...`,
    choices: [
      { text: 'Ir até a casa dele sem avisar', nextNode: 'reason2' },
      { text: 'Ligar para ele primeiro', nextNode: 'reason3' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  reason2: {
    id: 'reason2',
    text: `A chuva cai pesada. Cada gota parece um tambor anunciando o inevitável.

A rua está deserta. Os postes piscam. Um. Dois. Apagam. Você continua andando.

A casa dele está escura. Apenas uma janela iluminada no segundo andar. Uma sombra se move atrás da cortina.

Você toca a campainha. Uma vez. Ninguém atende.

Duas vezes. Três.

A porta se abre lentamente. Rangendo. Como em um filme de terror barato - mas isso é real. Dolorosamente real.

É Lívia quem está ali. A irmã dele. Ou prima? Você nunca soube ao certo.

Os olhos dela estão vermelhos, inchados - como se tivesse chorado por dias. O rímel escorrido desenha linhas negras no rosto pálido.

Ela não diz nada. Apenas te olha. Depois sussurra, com a voz quebrada:

"Você veio. Ele disse que você viria. Ele te esperava."

Antes que você possa perguntar qualquer coisa, antes que possa respirar, um som seco ecoa pela casa.

Um disparo.

Seus ouvidos zunem. Lívia olha para você com olhos arregalados. Depois, lentamente, olha para baixo.

A mancha vermelha se espalha pela blusa branca dela.

Ela cai.

Você ouve passos. Lentos. Calculados. Vindo das escadas.

Tudo escurece.`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out',
    sound: 'jumpscare'
  },

  reason3: {
    id: 'reason3',
    text: `Seus dedos tremem enquanto discam o número dele.

O telefone toca. Uma vez. O som parece ecoar no vazio.

Duas vezes. Você quase desliga.

Três vezes. Seu coração bate mais forte a cada toque.

"Alô?" A voz de Rafael finalmente responde. Mas soa estranha. Distante. Como se viesse de outro mundo.

"Oi, eu... precisava ouvir sua voz."

Silêncio do outro lado. Você pode ouvir uma respiração pesada. Não é dele. Ou é?

"Rafael?"

"Você não devia ter ligado." A voz dele é fria agora. Quase robótica. "Agora ela sabe."

Seu estômago se contrai. "Quem sabe? Do que você está falando?"

"Você entenderá em breve. Ou talvez não. Tanto faz."

"Rafael, você está me assustando—"

A ligação cai. Um bip agudo. Depois, silêncio.

Você tenta ligar de volta imediatamente. Três toques. Uma mensagem automática:

"O número que você discou não existe."

Impossível. Você acabou de falar com ele.

Você tenta de novo. E de novo. E de novo.

"O número que você discou não existe."

No dia seguinte, você vai até a casa dele. Vazia. Mobília coberta. Como se ninguém tivesse morado ali por anos.

Os vizinhos dizem que a casa está abandonada há meses.

Rafael desapareceu sem deixar vestígios.

Ou ele nunca existiu?`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out',
    sound: 'suspense'
  },

  // CAMINHO DO DESTINO
  destiny1: {
    id: 'destiny1',
    text: `Você entra em um fórum antigo chamado "Cartas do Amanhã".

Layout tosco. Anos 90. Fundo negro. Um botão piscando em vermelho: "Vire as cartas. Descubra o que te espera."

Sua mão treme sobre o mouse. Você clica.

A tela pisca. Uma carta surge, girando lentamente:

**A Torre** - ruína e revelação. A imagem mostra uma construção desabando em chamas.

Segunda carta: **Os Amantes** - escolha e culpa. Duas figuras de costas uma para a outra.

Terceira carta: **A Morte** - transformação inevitável. Um esqueleto montado em um cavalo branco.

Uma voz digital ecoa pelos seus fones de ouvido - você não se lembra de ter colocado nada:

"O perigo já está dentro da casa."

Você arranca os fones. Mas a voz continua. Dentro da sua cabeça.

Você olha para trás. A luz do quarto pisca. Apaga. Acende. Apaga.

Seu reflexo no espelho pisca junto - mas há algo errado. O reflexo se move sozinho...`,
    choices: [
      { text: 'Encerrar a sessão imediatamente', nextNode: 'destiny2' },
      { text: 'Pedir ajuda à Cartomante Virtual', nextNode: 'destiny3' },
      { text: 'Olhar o reflexo mais de perto', nextNode: 'destiny4' }
    ],
    animation: 'scale-in',
    sound: 'heartbeat'
  },

  destiny2: {
    id: 'destiny2',
    text: `Você fecha o navegador rapidamente. Mas o reflexo continua piscando no espelho atrás de você.

No dia seguinte, descobre que Rafael desapareceu sem deixar vestígios.

Só uma aba permanece aberta no seu navegador:

"Você não devia ter parado. Agora o destino te alcançará quando menos esperar."

A tela pisca. Uma última mensagem aparece:

"Ele virá esta noite."`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out'
  },

  destiny3: {
    id: 'destiny3',
    text: `A IA responde em voz robótica e distorcida:

"Você procura respostas. Mas o que busca não é o futuro - é perdão."

O site mostra uma última carta, invertida: **O Julgamento**.

A energia acaba. Na escuridão da tela, uma frase aparece em vermelho pulsante:

"Agora ele sabe onde você está."

Você ouve passos atrás de você. Lentos. Deliberados.

Quando se vira, já é tarde demais.`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out'
  },

  destiny4: {
    id: 'destiny4',
    text: `Você se aproxima do espelho. Seu reflexo sorri - mas você não está sorrindo.

Então, seu reflexo fala:

"Finalmente. Você precisa ver a verdade. Rafael não é quem você pensa. E Lívia... ela sabe de tudo desde o início."

O reflexo estende a mão. "Toque o espelho. Eu te mostro o que realmente aconteceu."`,
    choices: [
      { text: 'Tocar o espelho', nextNode: 'destiny5' },
      { text: 'Fugir da casa', nextNode: 'destiny6' }
    ],
    animation: 'scale-in'
  },

  destiny5: {
    id: 'destiny5',
    text: `Seus dedos tocam a superfície fria do espelho.

Imediatamente, visões invadem sua mente: Rafael e Lívia juntos. Planos. Segredos. Traição.

Você vê tudo. Cada mentira. Cada momento roubado. Cada mensagem que nunca deveria existir.

Quando seus olhos se abrem novamente, você está diferente. Sabe exatamente o que fazer.

A verdade liberta. Mas também transforma.

Você sai da casa com um sorriso nos lábios. Desta vez, você está no controle.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out'
  },

  destiny6: {
    id: 'destiny6',
    text: `Você corre. Sai pela porta. Desce as escadas. Não olha para trás.

Mas conforme você corre pelas ruas vazias, percebe algo estranho: as pessoas olham para você, mas não te veem.

Você passa a mão pelo rosto. Sente apenas o vazio.

Quando finalmente para na frente de uma vitrine, entende:

Não há reflexo. Você não está mais lá.

O espelho te levou.`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out'
  },

  // CAMINHO DA VERDADE
  truth1: {
    id: 'truth1',
    text: `Você não consegue fingir. Copia o número que enviou a mensagem e começa a rastrear.

Site de busca reversa. Redes sociais. Fóruns obscuros.

A origem é estranha - uma conta antiga, ligada ao e-mail de Lívia.

De repente, ela te liga:
"A gente precisa conversar. Agora."

Sua voz treme. Há urgência. Medo?`,
    choices: [
      { text: 'Encontrar ela no café', nextNode: 'truth2' },
      { text: 'Ir direto na casa de Rafael', nextNode: 'truth3' },
      { text: 'Confrontá-la por mensagem', nextNode: 'truth4' }
    ],
    animation: 'fade-in'
  },

  truth2: {
    id: 'truth2',
    text: `No café, Lívia te olha nos olhos e diz:

"Eu mandei a mensagem. Não para te assustar - para te salvar."

Ela respira fundo. "Rafael não é quem você pensa. Há coisas que você precisa saber antes que seja tarde demais."

Ela desliza um envelope pela mesa. "Tudo está aqui. Fotos. Conversas. Provas."

Você abre. Seu mundo desmorona. Cada página é uma nova revelação devastadora.`,
    choices: [
      { text: 'Confrontar Rafael', nextNode: 'truth5' },
      { text: 'Simplesmente ir embora', nextNode: 'truth6' }
    ],
    animation: 'scale-in'
  },

  truth3: {
    id: 'truth3',
    text: `Você vai direto na casa de Rafael. Bate na porta com força.

Ele abre, surpreso. "O que você está fazendo aqui?"

"Recebi uma mensagem. De Lívia. Sobre você."

O rosto dele muda. "Ela te contou."

Não é uma pergunta. É uma confirmação.

"Me contou o quê, Rafael?"

Ele suspira. "Entre. Você merece saber a verdade toda. Mas vai doer."`,
    choices: [
      { text: 'Ouvir a verdade dele', nextNode: 'truth7' },
      { text: 'Recusar e sair', nextNode: 'truth8' }
    ],
    animation: 'fade-in'
  },

  truth4: {
    id: 'truth4',
    text: `Você: "Por que você me enviou aquela mensagem?"

Lívia: "Porque alguém precisava te acordar."

Você: "Acordar para o quê?"

Lívia: "Para o fato de que você está em perigo. Rafael não é quem diz ser. E quanto mais você fica perto dele, menos chance tem de sobreviver."

Você: "Sobreviver?? Do que você está falando?"

Lívia: "Encontra comigo. Ou descubra sozinha. Mas quando descobrir, pode ser tarde demais."

A conversa termina. Você está sozinha com a escolha mais importante da sua vida.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out'
  },

  truth5: {
    id: 'truth5',
    text: `Você vai até Rafael com as provas.

Ele olha para os documentos. Para você. De volta para os documentos.

"Você não entende", ele começa.

"Entendo perfeitamente", você corta. "Entendo que tudo foi mentira."

Ele tenta se aproximar. Você recua.

"Nós terminamos. Desta vez, de verdade."

Você sai. A chuva começa a cair. Mas pela primeira vez em meses, você respira aliviada.

A verdade dói. Mas liberta.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out'
  },

  truth6: {
    id: 'truth6',
    text: `Você pega o envelope. Agradece a Lívia. E vai embora.

Não para a casa de Rafael. Não para sua própria casa.

Você pega um ônibus para outra cidade. Deixa o telefone para trás. Deixa tudo para trás.

Às vezes, a verdade não exige confronto. Só exige que você escolha a si mesma.

Seis meses depois, em uma nova cidade, com um novo nome, você finalmente sorri de verdade.

Recomeçar foi a melhor vingança.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out'
  },

  truth7: {
    id: 'truth7',
    text: `Rafael te leva para a sala. Prepara um café que você não bebe.

"Lívia é minha irmã", ele começa. "Irmã de criação. Ela sempre foi... instável. Obsessiva."

Ele te mostra mensagens. Centenas delas. De Lívia para ele. Declarações de amor. Ameaças. Planos de te afastar.

"Ela criou tudo isso. As 'provas' são falsas. Ela quer te afastar de mim."

Você olha para ele. Para as mensagens. Não sabe mais em quem confiar.

A verdade tem tantas versões. Qual delas é real?`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out'
  },

  truth8: {
    id: 'truth8',
    text: `"Não", você diz. "Não quero mais mentiras. Não quero mais explicações."

Você se vira para sair. Rafael segura seu braço.

"Se você sair agora, não há volta."

Você olha para ele. "Eu sei."

E sai.

Na rua, seu telefone toca. É Lívia.

"Você fez a escolha certa. Agora preciso te contar o resto. O que ele realmente é. O que ele fez com as outras."

Seu sangue gela.

"Outras?"`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out'
  }
};
