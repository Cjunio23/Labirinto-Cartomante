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
      { text: 'Ir até a casa dele sem avisar', nextNode: 'reason1a' },
      { text: 'Contratar um detetive particular', nextNode: 'reason1b' },
      { text: 'Verificar o histórico do celular dele', nextNode: 'reason1c' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  reason1a: {
    id: 'reason1a',
    text: `A chuva bate no para-brisa enquanto você dirige até o apartamento de Rafael. Cada batida do coração ecoa mais alto que o trovão.

Você estaciona do outro lado da rua. A janela dele está acesa. Você vê uma sombra se movendo lá dentro.

Não. Duas sombras.

Rafael não está sozinho.

Você espera. Quinze minutos. Meia hora. Então a porta se abre e uma mulher sai. Cabelos escuros, casaco vermelho. Ela olha para os lados antes de desaparecer na noite.

Seu estômago se revira. Quem era ela?`,
    choices: [
      { text: 'Confrontar Rafael agora', nextNode: 'reason2' },
      { text: 'Seguir a mulher misteriosa', nextNode: 'reason1a1' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  reason1a1: {
    id: 'reason1a1',
    text: `Você segue a mulher pelas ruas molhadas. Ela entra em um café 24 horas três quarteirões adiante.

Quando você entra, ela está sentada em uma mesa nos fundos, esperando. Como se soubesse que você viria.

"Sente-se", ela diz sem olhar para você.

Você hesita, mas se senta.

"Meu nome é Clara. E antes que pergunte - sim, eu conheci Rafael antes de você. Muito antes."

Ela empurra uma foto antiga pela mesa. Rafael mais jovem, ao lado dela. Felizes.

"Ele não te contou sobre mim, contou? Sobre o que aconteceu naquela noite?"`,
    choices: [
      { text: 'Ouvir a história dela', nextNode: 'reason1a1_story' },
      { text: 'Voltar e confrontar Rafael', nextNode: 'reason2' }
    ],
    animation: 'fade-in',
    sound: 'ambient'
  },

  reason1a1_story: {
    id: 'reason1a1_story',
    text: `"Éramos noivos há cinco anos", Clara começa. "Até a noite em que ele desapareceu. Sem explicação. Sem adeus."

Ela toma um gole do café frio.

"Levei anos para encontrá-lo. E quando finalmente consegui... ele estava com você. Como se eu nunca tivesse existido."

Seus olhos se enchem de lágrimas.

"Aquelas mensagens que você recebeu? Fui eu. Porque você precisa saber a verdade antes que seja tarde demais. Rafael não é quem você pensa. Ele... ele tem algo. Uma condição. Ele apaga pessoas da vida dele quando... quando algo dentro dele muda."

Você sente o ar faltar.

"Eu era a terceira. Antes de mim, houve outras duas. Nenhuma delas foi encontrada."`,
    choices: [
      { text: 'Ir à polícia imediatamente', nextNode: 'reason_police' },
      { text: 'Confrontar Rafael com Clara', nextNode: 'reason_confrontation' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  reason_police: {
    id: 'reason_police',
    text: `Você e Clara vão direto para a delegacia. A chuva continua caindo.

O detetive ouve tudo. Anota. Faz algumas ligações. Então olha para vocês duas com uma expressão grave.

"Precisamos agir rápido. Se o que vocês estão dizendo é verdade..."

Três horas depois, você está em frente ao apartamento de Rafael com a polícia. A porta é arrombada.

O apartamento está vazio. Mas no porão...

Eles encontram fotos. Centenas delas. De você. De Clara. De outras mulheres. Todas marcadas com datas.

E no canto, uma mala aberta. Passaportes falsos. Dinheiro. Um bilhete de avião para hoje à noite.

Rafael planejava desaparecer de novo.

Mas desta vez, ele não conseguiu.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  reason_confrontation: {
    id: 'reason_confrontation',
    text: `Vocês duas voltam ao apartamento de Rafael. Clara bate na porta com força.

Rafael abre. Seu rosto empalidece quando vê Clara.

"Você...", ele sussurra.

"Sim, eu. E ela sabe de tudo."

Por um momento, há apenas silêncio. Então Rafael ri. Um riso frio, sem humor.

"Vocês não entendem. Eu fiz isso por vocês. Todas vocês. Para protegê-las."

"De quê?!", você grita.

Ele aponta para a própria cabeça. "Dele. O outro eu. Aquele que acorda quando estou dormindo. Aquele que... que faz coisas que eu não consigo controlar."

Seus olhos estão cheios de lágrimas agora.

"Eu sumo porque é a única maneira de proteger quem eu amo. Mas vocês... vocês me encontraram."

Ele pega algo do bolso. Um frasco de remédios.

"Eu deveria ter tomado isso há muito tempo."

Antes que você possa reagir, ele engole todos os comprimidos.`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out',
    sound: 'jumpscare'
  },

  reason1b: {
    id: 'reason1b',
    text: `O escritório do detetive cheira a café velho e papel mofado. Ele é um homem de meia-idade, com olhos cansados que já viram demais.

"Você quer que eu investigue seu namorado?", ele pergunta, anotando em um bloco amarelado.

"Sim. Preciso saber se ele está escondendo algo."

Três dias depois, ele te liga. "Precisamos conversar. Pessoalmente."

No escritório, ele espalha fotos sobre a mesa. Rafael entrando em um prédio abandonado. Rafael conversando com pessoas suspeitas. Rafael em lugares que ele disse nunca ter visitado.

"Há mais", o detetive diz, empurrando uma pasta grossa. "Rafael Mendes não existe. Não oficialmente. Nenhum registro antes de cinco anos atrás. É como se ele tivesse surgido do nada."

Sua mão treme ao abrir a pasta.`,
    choices: [
      { text: 'Ver o que está na pasta', nextNode: 'reason1b1' },
      { text: 'Confrontar Rafael imediatamente', nextNode: 'reason2' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  reason1b1: {
    id: 'reason1b1',
    text: `Dentro da pasta há artigos de jornal antigos. Todos sobre desaparecimentos. Cinco mulheres nos últimos dez anos.

Todas tinham algo em comum: namoravam um homem chamado Rafael.

Em cada foto, é ele. Mais jovem em algumas, mas é ele.

"Ele muda de nome, de cidade, mas o padrão é sempre o mesmo", o detetive explica. "Namoro intenso de seis meses. Então a mulher desaparece. Sem corpo. Sem pistas."

Você sente náusea.

"A polícia nunca conseguiu provar nada. Mas eu sei que é ele."

Seu telefone vibra. Mensagem de Rafael: "Precisamos conversar. Venha ao armazém da rua 7. Sozinha. É importante."

O detetive olha para você. "Não vá. É uma armadilha."`,
    choices: [
      { text: 'Ir ao armazém com a polícia', nextNode: 'reason1b1_police' },
      { text: 'Ir sozinha, mas armada', nextNode: 'reason1b1_alone' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  reason1b1_police: {
    id: 'reason1b1_police',
    text: `Você vai com um colete à prova de balas escondido sob o casaco. A polícia está posicionada ao redor do armazém.

Rafael está lá dentro, de costas, olhando pela janela quebrada.

"Você veio", ele diz sem se virar.

"Com a polícia", você responde, tentando manter a voz firme.

Ele finalmente se vira. Há algo diferente nos olhos dele. Algo vazio.

"Eu sei. Eu sempre soube que este dia chegaria."

Ele levanta as mãos. "Não vou resistir. Mas você merece saber a verdade primeiro."

"Eu não matei ninguém. Eu as salvei. Salvei de algo pior do que a morte."

Antes que possa explicar, a polícia invade. Rafael não resiste.

Nos anos seguintes, nenhum corpo é encontrado. As mulheres permanecem desaparecidas. Rafael nunca fala novamente.

O mistério nunca é resolvido.`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out',
    sound: 'ambient'
  },

  reason1b1_alone: {
    id: 'reason1b1_alone',
    text: `Você entra no armazém sozinha. O chão range sob seus pés. Goteiras ecoam na escuridão.

"Rafael?", sua voz ecoa.

Uma luz se acende. Rafael está amarrado a uma cadeira, sangrando.

"É uma armadilha!", ele grita.

Você ouve passos atrás de você. Se vira.

É o detetive. Mas seu sorriso é diferente agora. Cruel.

"Você facilitou tanto", ele diz, trancando a porta.

"Sabe por que Rafael nunca foi pego? Porque ele nunca fez nada. Eu criei cada evidência. Cada foto. Eu que fiz as mulheres desaparecerem."

Ele se aproxima.

"E você será a próxima."

O último som que você ouve é Rafael gritando seu nome.`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out',
    sound: 'jumpscare'
  },

  reason1c: {
    id: 'reason1c',
    text: `Você espera Rafael dormir. Pega o celular dele da mesa de cabeceira. Seus dedos tremem ao desbloqueá-lo.

Você conhece a senha. Ele nunca escondeu de você. Até agora, você nunca teve motivos para usá-la.

O histórico de mensagens está... vazio. Tudo apagado. Todas as conversas. Como se o telefone fosse novo.

Mas então você encontra um aplicativo escondido. Protegido por outra senha.

Você tenta a data de aniversário dele. Não funciona. Tenta a data que vocês se conheceram. Também não.

Então, por impulso, tenta a data da primeira mensagem misteriosa.

Funciona.

O aplicativo abre. É cheio de conversas. Fotos. Vídeos.

E todas são... de você. Fotos suas que você nunca soube que foram tiradas. Conversas suas com outras pessoas, gravadas secretamente.

Rafael estava te observando. Documentando cada momento da sua vida.`,
    choices: [
      { text: 'Confrontá-lo agora mesmo', nextNode: 'reason2' },
      { text: 'Copiar tudo e ir à polícia', nextNode: 'reason1c1' },
      { text: 'Investigar mais antes de agir', nextNode: 'reason1c2' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  reason1c1: {
    id: 'reason1c1',
    text: `Você transfere tudo para seu telefone. Fotos, vídeos, mensagens. Evidências.

Quando está saindo silenciosamente, Rafael acorda.

"Aonde você vai?", ele pergunta, sonolento.

"Banheiro", você mente.

Mas ele vê seu casaco. Suas chaves na mão.

Seus olhos mudam. "Você viu, não viu?"

O silêncio é a resposta.

Rafael se levanta lentamente. "Eu posso explicar. Eu estava... te protegendo."

"Me espionando, você quer dizer."

"Não! Eu precisava ter certeza de que você estava segura. Depois do que aconteceu com a última..."

Ele para. Percebe que disse demais.

"A última o quê, Rafael?"

Ele apenas olha para você, e naquele olhar, você vê medo. Não do que você possa fazer.

Mas do que ele já fez.`,
    choices: [
      { text: 'Correr para a porta', nextNode: 'reason_escape' },
      { text: 'Fazer ele confessar tudo', nextNode: 'reason_confession' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  reason_escape: {
    id: 'reason_escape',
    text: `Você corre para a porta. Rafael tenta te segurar, mas você é mais rápida.

Você desce as escadas dois degraus por vez. Ouve ele gritando seu nome atrás.

Na rua, você corre até seu carro. As mãos tremem tanto que você quase deixa as chaves caírem.

Consegue entrar. Liga o motor. Rafael aparece na rua.

Você acelera.

Pelo retrovisor, você o vê parado no meio da rua, diminuindo, desaparecendo.

Na delegacia, você entrega tudo. Eles investigam. Encontram mais. Muito mais.

Rafael é preso. Você nunca o vê novamente.

Mas às vezes, tarde da noite, você ainda sente que alguém está observando.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  reason_confession: {
    id: 'reason_confession',
    text: `"Fale", você exige, mantendo distância. "Agora."

Rafael desaba na cadeira, rosto entre as mãos.

"Seu nome era Mariana. Éramos noivos. Eu a amava mais que tudo."

Lágrimas escorrem pelo rosto dele.

"Ela foi sequestrada. Na frente dos meus olhos. E eu não pude fazer nada. Eles nunca a encontraram."

Ele olha para você.

"Desde então, eu juro que nunca deixaria isso acontecer de novo. Com você, eu precisava saber onde estava. Precisava ter certeza de que estava segura. Sempre."

"Isso não justifica!", você grita.

"Eu sei! Eu sei que sou doente. Eu sei que preciso de ajuda. Mas eu nunca quis te machucar. Só queria..."

Ele soluça.

"...proteger você."

Você olha para o homem quebrado à sua frente. Parte de você sente pena. Outra parte sente horror.`,
    choices: [
      { text: 'Ajudá-lo a buscar tratamento', nextNode: 'reason_help' },
      { text: 'Ir embora para sempre', nextNode: 'reason_leave' }
    ],
    animation: 'fade-in',
    sound: 'ambient'
  },

  reason_help: {
    id: 'reason_help',
    text: `Você ajuda Rafael a encontrar um terapeuta especializado em trauma. Acompanha ele nas primeiras sessões.

Vocês não voltam a ser um casal. Esse capítulo terminou.

Mas você vê ele tentando. Realmente tentando melhorar. Confrontar os demônios. Lidar com a perda.

Anos depois, você o encontra por acaso em um café. Ele está diferente. Mais leve. Sorrindo genuinamente.

"Obrigado", ele diz simplesmente. "Por não me abandonar quando você tinha todos os motivos para isso."

Você sorri de volta. "Todos merecem uma segunda chance."

Às vezes, o perdão é a maior libertação.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  reason_leave: {
    id: 'reason_leave',
    text: `Você pega suas coisas e vai embora. Bloqueia o número dele. Delete todas as fotos. Apaga qualquer rastro dele da sua vida.

Nos primeiros meses, você olha por cima do ombro constantemente. Cada sombra é uma ameaça. Cada notificação faz seu coração disparar.

Mas com o tempo, o medo diminui.

Você se muda de cidade. Começa de novo. Novos amigos. Novo emprego. Nova vida.

Cinco anos depois, você está feliz. Realmente feliz.

E Rafael? Apenas uma memória distante. Um capítulo fechado.

Às vezes, a melhor escolha é simplesmente seguir em frente.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  reason1c2: {
    id: 'reason1c2',
    text: `Você decide investigar mais fundo antes de agir. Nos dias seguintes, você finge que nada mudou.

Mas à noite, quando Rafael dorme, você explora o aplicativo.

Encontra algo perturbador: ele não está apenas te observando. Ele está seguindo um padrão. As mesmas fotos, os mesmos ângulos, os mesmos tipos de anotações.

Como se estivesse comparando você com... alguém.

Você encontra uma pasta antiga. "Mariana" está escrito nela.

Dentro, milhares de fotos de outra mulher. Que se parece... exatamente com você.

Não um pouco. Exatamente.

Como se você fosse ela.

Ou uma cópia.`,
    choices: [
      { text: 'Confrontar sobre Mariana', nextNode: 'reason2' },
      { text: 'Investigar quem foi Mariana', nextNode: 'reason_mariana' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  reason_mariana: {
    id: 'reason_mariana',
    text: `Você pesquisa o nome "Mariana" junto com Rafael. Encontra artigos antigos de jornal.

"Jovem desaparece misteriosamente" - 7 anos atrás.
"Noivo devastado pede ajuda para encontrar desaparecida".

E então você vê as fotos dela nos artigos.

Seu sangue congela.

Não é só semelhança. É como olhar em um espelho.

Você investiga mais. Descobre que Rafael te encontrou em um aplicativo de encontros. Mas foi ele quem te procurou primeiro. Ele que insistiu. Ele que perseguiu você.

Não foi acaso. Foi planejado.

Ele estava procurando por uma substituta.

Naquela noite, Rafael chega em casa com flores. "Para minha Mariana", ele diz com um sorriso.

Ele te chamou de Mariana.

Ele nem percebe.`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out',
    sound: 'heartbeat'
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
    sound: 'ambient'
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
