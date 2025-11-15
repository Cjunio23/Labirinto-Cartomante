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

  // CAMINHO DA RAZÃO - EXPANDIDO
  reason1: {
    id: 'reason1',
    text: `Você decide fingir que nada aconteceu. Apaga as mensagens. Bloqueia o número desconhecido.

Rafael te espera naquela noite. Jantar. Flores. Promessas. Você sorri. Ele sorri de volta. Mas há algo nos olhos dele - algo que você nunca viu antes.

"Está tudo bem?", ele pergunta, segurando sua mão com mais força do que o usual.

"Está", você mente.

Os dias passam. As coisas começam a mudar: mensagens apagadas no seu celular, ligações que você não fez no histórico, silêncios longos demais.

Uma noite, você acorda às 3h. Rafael não está na cama. Você o encontra na sala, no escuro, olhando fixamente para o celular. A luz azul ilumina seu rosto. Ele não percebe você ali.

Então chega outra mensagem: "Ele está te vigiando. Cada passo. Você ainda tem tempo."

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

A casa dele está escura. Apenas uma janela iluminada no segundo andar. Uma sombra se move atrás da cortina.

Você toca a campainha. A porta se abre lentamente. Rangendo.

É Lívia quem está ali. Os olhos dela estão vermelhos, inchados. O rímel escorrido desenha linhas negras no rosto pálido.

"Você veio. Ele disse que você viria."

Antes que você possa perguntar qualquer coisa, um som seco ecoa pela casa.

Um disparo.

Lívia olha para você com olhos arregalados. Depois, olha para baixo. A mancha vermelha se espalha pela blusa branca.

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

"Alô?" A voz de Rafael soa estranha. Distante.

"Oi, eu... precisava ouvir sua voz."

"Você não devia ter ligado. Agora ela sabe."

A ligação cai. Você tenta ligar de volta. "O número que você discou não existe."

No dia seguinte, você vai até a casa dele. Vazia. Mobília coberta. Como se ninguém tivesse morado ali por anos.

Os vizinhos dizem que a casa está abandonada há meses.

Rafael desapareceu sem deixar vestígios. Ou ele nunca existiu?`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out',
    sound: 'suspense'
  },

  // CAMINHO DO DESTINO
  destiny1: {
    id: 'destiny1',
    text: `Você entra em um fórum chamado "Cartas do Amanhã".

A tela pisca. Cartas surgem: **A Torre**, **Os Amantes**, **A Morte**.

Uma voz digital ecoa: "O perigo já está dentro da casa."

Você arranca os fones. Mas a voz continua. Dentro da sua cabeça.

Seu reflexo no espelho pisca - mas há algo errado. O reflexo se move sozinho...`,
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
    text: `Você fecha o navegador. Mas o reflexo continua piscando.

No dia seguinte, Rafael desapareceu. Uma mensagem permanece: "Você não devia ter parado. Agora o destino te alcançará quando menos esperar."`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out'
  },

  destiny3: {
    id: 'destiny3',
    text: `A IA responde: "Você procura respostas. Mas o que busca não é o futuro - é perdão."

"Agora ele sabe onde você está."

Você ouve passos. Quando se vira, já é tarde demais.`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out',
    sound: 'jumpscare'
  },

  destiny4: {
    id: 'destiny4',
    text: `Você se aproxima do espelho. Seu reflexo sorri - mas você não está sorrindo.

"Toque o espelho. Eu te mostro o que realmente aconteceu."`,
    choices: [
      { text: 'Tocar o espelho', nextNode: 'destiny5' },
      { text: 'Fugir da casa', nextNode: 'destiny6' }
    ],
    animation: 'scale-in',
    sound: 'heartbeat'
  },

  destiny5: {
    id: 'destiny5',
    text: `Seus dedos tocam a superfície fria.

Visões invadem sua mente: Rafael e Lívia. Planos. Segredos. Traição. Você vê tudo.

Quando abre os olhos, você está diferente. Sabe exatamente o que fazer.

A verdade liberta. Mas também transforma. Desta vez, você está no controle.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out'
  },

  destiny6: {
    id: 'destiny6',
    text: `Você corre. Mas as pessoas olham para você sem te ver.

Quando para na frente de uma vitrine, entende: não há reflexo.

O espelho te levou.`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out'
  },

  // CAMINHO DA VERDADE
  truth1: {
    id: 'truth1',
    text: `Você rastreia o número. A origem é estranha - ligada ao e-mail de Lívia.

Ela te liga: "A gente precisa conversar. Agora."

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
    text: `No café, Lívia te espera. Há um hematoma sob o olho.

"Eu mandei a mensagem para te salvar." Ela desliza um envelope. "Tudo está aqui. Rafael não é quem você pensa."

Você abre. Certificados de óbito. Três mulheres. Todas ex-namoradas. Todas mortes "acidentais".`,
    choices: [
      { text: 'Confrontar Rafael', nextNode: 'truth5' },
      { text: 'Simplesmente ir embora', nextNode: 'truth6' }
    ],
    animation: 'scale-in',
    sound: 'heartbeat'
  },

  truth3: {
    id: 'truth3',
    text: `Você vai até Rafael. Bate com força.

"Recebi uma mensagem. De Lívia. Sobre você."

O rosto dele muda. "Ela te contou."

"Me contou o quê, Rafael?"

"Entre. Você merece saber a verdade toda. Mas vai doer."`,
    choices: [
      { text: 'Ouvir a verdade dele', nextNode: 'truth7' },
      { text: 'Recusar e sair', nextNode: 'truth8' }
    ],
    animation: 'fade-in'
  },

  truth4: {
    id: 'truth4',
    text: `Você confronta por mensagem.

Lívia: "Rafael não é quem diz ser. Quanto mais você fica perto dele, menos chance tem de sobreviver."

"Encontra comigo. Ou descubra sozinha. Mas quando descobrir, pode ser tarde demais."`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out'
  },

  truth5: {
    id: 'truth5',
    text: `Você vai até Rafael com as provas.

"Explica isso."

Ele tenta se aproximar. Você recua. "Nós terminamos. De verdade."

Você sai. A chuva começa a cair. Mas pela primeira vez em meses, você respira aliviada.

A verdade dói. Mas liberta.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out'
  },

  truth6: {
    id: 'truth6',
    text: `Você pega o envelope. Agradece a Lívia. E vai embora.

Pega um ônibus para outra cidade. Deixa tudo para trás.

Seis meses depois, com um novo nome, você finalmente sorri de verdade.

Recomeçar foi a melhor vingança.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out'
  },

  truth7: {
    id: 'truth7',
    text: `Rafael mostra mensagens de Lívia. "Ela é obsessiva. Criou tudo isso."

Você não sabe mais em quem confiar. A verdade tem tantas versões. Qual delas é real?`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out'
  },

  truth8: {
    id: 'truth8',
    text: `"Não quero mais mentiras."

Você sai. Na rua, Lívia liga.

"Você fez a escolha certa. Agora preciso te contar o resto. O que ele fez com as outras."

"Outras?"`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out'
  }
};
