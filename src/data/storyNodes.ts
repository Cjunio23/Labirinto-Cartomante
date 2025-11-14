import { StoryNode } from '@/types/game';

export const storyNodes: Record<string, StoryNode> = {
  start: {
    id: 'start',
    text: `Era uma sexta-feira qualquer até o momento em que a notificação iluminou a tela do seu celular:

"Ele sabe de tudo. Ainda há tempo para se salvar."

Por um instante, você achou que fosse spam. Mas o nome *Rafael* piscando logo abaixo da próxima mensagem gelou seu sangue. Era o nome dele. E a mensagem anônima... quem mais saberia?

Seu coração dispara. Sua respiração fica pesada. O que você faz?`,
    choices: [
      { text: '🚫 Ignorar e seguir a vida normalmente', nextNode: 'reason1', icon: '🧠' },
      { text: '🔮 Buscar respostas místicas', nextNode: 'destiny1', icon: '✨' },
      { text: '🔍 Investigar quem enviou a mensagem', nextNode: 'truth1', icon: '🎯' }
    ],
    animation: 'fade-in'
  },

  // CAMINHO DA RAZÃO
  reason1: {
    id: 'reason1',
    text: `Você decide fingir que nada aconteceu. Rafael te espera naquela noite, e você não quer transformar o que têm em mais uma paranoia.

Mas conforme as horas passam, você começa a notar: mensagens apagadas, ligações recusadas, silêncios longos demais.

Dias depois, um novo número envia:
"Ele está te vigiando."

Você apaga. Desativa notificações. Mas o espelho denuncia: você já não é a mesma pessoa.

Naquela noite chuvosa, você decide ir até a casa de Rafael...`,
    choices: [
      { text: '🏠 Ir até a casa dele', nextNode: 'reason2', icon: '⚠️' },
      { text: '📱 Ligar para ele primeiro', nextNode: 'reason3', icon: '☎️' }
    ],
    animation: 'fade-in'
  },

  reason2: {
    id: 'reason2',
    text: `A rua está escura. O vento traz o som distante de um trovão.

Quando você toca a campainha, é Lívia quem abre a porta.

Os olhos dela estão vermelhos - como se tivesse chorado a noite inteira.

Ela apenas sussurra: "Você veio. Ele te esperava."

Antes que você possa responder, o som de um disparo ecoa pela casa.

Tudo escurece.`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out'
  },

  reason3: {
    id: 'reason3',
    text: `O telefone toca. Uma vez. Duas. Três.

"Alô?" A voz de Rafael soa estranha. Distante.

"Oi, eu... precisava ouvir sua voz."

Silêncio. Então ele diz: "Você não devia ter ligado. Agora ela sabe."

"Quem sabe? Do que você está falando?"

A ligação cai. Você tenta ligar de volta. O número não existe mais.

No dia seguinte, Rafael desapareceu sem deixar vestígios.`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out'
  },

  // CAMINHO DO DESTINO
  destiny1: {
    id: 'destiny1',
    text: `Você entra em um fórum antigo chamado "Cartas do Amanhã".

Layout tosco, fundo negro, um botão piscando: "Vire as cartas. Descubra o que te espera."

Você clica.

Primeira carta: **A Torre** - ruína e revelação.
Segunda carta: **Os Amantes** - escolha e culpa.
Terceira carta: **A Morte** - transformação inevitável.

Uma voz digital ecoa: "O perigo já está dentro da casa."

Você olha para trás. A luz pisca. Seu reflexo no espelho pisca junto - mas o espelho mostra algo mais...`,
    choices: [
      { text: '💻 Encerrar a sessão imediatamente', nextNode: 'destiny2', icon: '🚪' },
      { text: '🔮 Pedir ajuda à Cartomante Virtual', nextNode: 'destiny3', icon: '🤖' },
      { text: '🪞 Olhar o reflexo mais de perto', nextNode: 'destiny4', icon: '👁️' }
    ],
    animation: 'scale-in'
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
      { text: '✋ Tocar o espelho', nextNode: 'destiny5', icon: '🪞' },
      { text: '🏃 Fugir da casa', nextNode: 'destiny6', icon: '💨' }
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
      { text: '☕ Encontrar ela no café', nextNode: 'truth2', icon: '🤝' },
      { text: '🏠 Ir direto na casa de Rafael', nextNode: 'truth3', icon: '🎯' },
      { text: '📱 Confrontá-la por mensagem', nextNode: 'truth4', icon: '💬' }
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
      { text: '😢 Confrontar Rafael', nextNode: 'truth5', icon: '⚔️' },
      { text: '🚶 Simplesmente ir embora', nextNode: 'truth6', icon: '🌅' }
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
      { text: '👂 Ouvir a verdade dele', nextNode: 'truth7', icon: '🗣️' },
      { text: '🚫 Recusar e sair', nextNode: 'truth8', icon: '❌' }
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
