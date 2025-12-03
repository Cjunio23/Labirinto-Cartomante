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

  // CAMINHO DO DESTINO - EXPANDIDO
  destiny1: {
    id: 'destiny1',
    text: `Você entra em um fórum chamado "Cartas do Amanhã".

A tela pisca. Cartas surgem: **A Torre**, **Os Amantes**, **A Morte**.

Uma voz digital ecoa: "O perigo já está dentro da casa."

Você arranca os fones. Mas a voz continua. Dentro da sua cabeça.

Seu reflexo no espelho pisca - mas há algo errado. O reflexo se move sozinho...`,
    choices: [
      { text: 'Encerrar a sessão imediatamente', nextNode: 'destiny1a' },
      { text: 'Pedir ajuda à Cartomante Virtual', nextNode: 'destiny1b' },
      { text: 'Olhar o reflexo mais de perto', nextNode: 'destiny4' }
    ],
    animation: 'scale-in',
    sound: 'notification'
  },

  destiny1b: {
    id: 'destiny1b',
    text: `Você digita no fórum: "Preciso de ajuda. Algo está errado."

A Cartomante Virtual responde instantaneamente:

"Eu sei quem você é. Sei o que você teme. As cartas já falaram sobre você."

Uma nova carta aparece na tela: **O Enforcado**.

"Você está presa em uma situação. Alguém te mantém cativa sem que perceba. As correntes são de amor... e medo."

Outra carta: **A Lua**.

"Ilusões. Enganos. Nada é o que parece. Aquele que dorme ao seu lado esconde um segredo que pode te destruir."

E então, a última carta: **O Julgamento**.

"O momento de decidir chegou. Ignorar a verdade ou enfrentá-la. Mas saiba: uma vez que abrir os olhos, não há como fechá-los novamente."

Seu celular toca. É Rafael. "Onde você está, amor?"`,
    choices: [
      { text: 'Desligar e continuar a sessão', nextNode: 'destiny1b_continue' },
      { text: 'Atender e fingir normalidade', nextNode: 'destiny1a1' },
      { text: 'Pedir à Cartomante que revele tudo', nextNode: 'destiny1b_reveal' }
    ],
    animation: 'scale-in',
    sound: 'suspense'
  },

  destiny1b_continue: {
    id: 'destiny1b_continue',
    text: `Você ignora a ligação. Rafael liga de novo. E de novo.

"Ele está te procurando", a Cartomante digita. "Ele sempre procura. Sempre encontra."

"Como você sabe tanto sobre ele?"

"Porque eu o conheci. Antes de você. Antes de todas as outras."

A tela pisca. Uma foto aparece. Uma mulher. Jovem. Sorrindo.

"Meu nome era Helena. Namorei Rafael há 8 anos."

"Era?"

"Oficialmente, morri em um acidente de carro. Na verdade, eu escapei. Mudei de nome. De vida. Me tornei... isto."

"Uma cartomante online?"

"Uma guardiã. Alguém que tenta salvar as próximas."`,
    choices: [
      { text: 'Pedir para ela te ajudar a escapar', nextNode: 'destiny1b_help' },
      { text: 'Duvidar da história dela', nextNode: 'destiny1b_doubt' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  destiny1b_help: {
    id: 'destiny1b_help',
    text: `"Me ajuda. Por favor."

"Há apenas uma forma. Você precisa encontrar o diário dele. Está escondido no porão. Atrás da parede falsa."

"Como você sabe?"

"Porque eu o encontrei. Foi assim que descobri a verdade sobre as outras."

Você desliga a sessão. Vai até a casa de Rafael. Ele não está.

O porão está trancado, mas você encontra a chave.

Atrás de uma estante, você sente. A parede é diferente. Oca.

Você quebra o gesso.

E encontra.

O diário. Com nomes. Datas. Fotos. Planejamentos meticulosos.

Seu nome está lá. Marcado para hoje.`,
    choices: [
      { text: 'Levar o diário para a polícia', nextNode: 'destiny1b_police' },
      { text: 'Confrontar Rafael quando ele chegar', nextNode: 'destiny_confrontation' }
    ],
    animation: 'scale-in',
    sound: 'suspense'
  },

  destiny1b_police: {
    id: 'destiny1b_police',
    text: `Você corre para a delegacia com o diário.

O delegado lê. Empalidece.

"Há 15 nomes aqui. 12 com 'X' marcado."

"O que significa?"

Ele não responde. Mas você sabe.

Rafael é preso naquela noite. O diário é prova suficiente.

Na investigação, encontram os restos de 8 das 12 mulheres.

Helena, a Cartomante, testemunha no julgamento.

Rafael é condenado à prisão perpétua.

A última coisa que ele te diz: "Você era especial. A única que descobriu."

Você não responde. Apenas sai.

Livre.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  destiny1b_doubt: {
    id: 'destiny1b_doubt',
    text: `"Como sei que você não está inventando tudo isso?"

A Cartomante para de digitar por um momento.

"Você não sabe. Assim como não sabe se Rafael é quem diz ser."

"A diferença é: eu não tenho nada a ganhar te salvando. Ele tem tudo a perder se você descobrir."

"Pense nisso."

A sessão encerra.

Você fica ali, no escuro, processando.

O celular toca de novo. Rafael.

"Onde você está? Estou preocupado."

Você olha para a tela. Para o número. Para a realidade.

E toma uma decisão.`,
    choices: [
      { text: 'Investigar sozinha antes de agir', nextNode: 'destiny1b_investigate' },
      { text: 'Confrontar Rafael diretamente', nextNode: 'destiny_confrontation' }
    ],
    animation: 'fade-in',
    sound: 'ambient'
  },

  destiny1b_investigate: {
    id: 'destiny1b_investigate',
    text: `Você passa dias investigando.

Descobre: Helena realmente existiu. Morreu em acidente há 8 anos.

Mas... o corpo nunca foi identificado positivamente.

Você encontra mais. Outras ex-namoradas de Rafael. Padrões estranhos.

Uma delas ainda está viva. Mora em outra cidade.

Você a encontra. Clara.

"Ele quase me matou", ela diz tremendo. "Mas eu escapei."

"Por que não foi à polícia?"

"Eu fui. Eles não acreditaram. Rafael é muito bom em parecer normal."

"O que faço?"

Clara te olha nos olhos.

"Foge. Enquanto pode."`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out',
    sound: 'ambient'
  },

  destiny1b_reveal: {
    id: 'destiny1b_reveal',
    text: `"Me conta tudo. Agora."

A Cartomante hesita. Então, cartas começam a aparecer em sequência.

Cada carta revela uma história. Uma mulher. Uma morte "acidental".

São 12 cartas. 12 histórias. 12 vítimas.

"Rafael não é seu nome verdadeiro. Ele muda de identidade a cada 2-3 anos."

"Você é a 13ª. E 13 é um número significativo para ele."

"Hoje é o dia marcado. Se você não agir agora, será a próxima carta na minha coleção de tragédias."

Você congela.

"O que faço?"

"Há uma pessoa que pode te ajudar. Lívia. Ela foi a única que conseguiu provas contra ele."

Um endereço aparece na tela.`,
    choices: [
      { text: 'Ir encontrar Lívia', nextNode: 'truth2' },
      { text: 'Ir à polícia com as informações', nextNode: 'destiny1b_police' }
    ],
    animation: 'scale-in',
    sound: 'heartbeat'
  },

  destiny1a: {
    id: 'destiny1a',
    text: `Você fecha o navegador com força. O coração bate acelerado.

Mas quando olha para o espelho da sala, vê algo impossível: uma mensagem escrita com vapor, como se alguém tivesse respirado sobre o vidro:

"Fechar os olhos não apaga o que já foi visto."

O telefone toca. Número desconhecido. Você atende.

"Boa noite", diz uma voz feminina, suave mas perturbadora. "Meu nome é Cassandra. Sou uma cartomante. Você me procurou, lembra?"

"Eu não procurei ninguém."

"Não conscientemente. Mas seu espírito sim. Ele sabe que está em perigo."

Você ouve Rafael chegando. A voz sussurra: "Não deixe ele saber que falamos."`,
    choices: [
      { text: 'Desligar e fingir normalidade', nextNode: 'destiny1a1' },
      { text: 'Continuar a conversa em segredo', nextNode: 'destiny1a2' },
      { text: 'Confrontar Rafael sobre tudo', nextNode: 'destiny_confrontation' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  destiny1a2: {
    id: 'destiny1a2',
    text: `Você finge atender outra ligação e vai para o banheiro.

"Fala rápido", você sussurra.

"Rafael tem um passado. Um passado que ele esconde de todas. As cartas me mostraram."

"Que passado?"

"Três mulheres antes de você. Todas 'desapareceram'. A polícia nunca encontrou nada. Ele é muito cuidadoso."

"Como você sabe disso?"

"Porque eu fui a primeira. A que escapou. Há 10 anos."

Você ouve Rafael batendo na porta. "Está tudo bem aí?"

"Preciso ir", você sussurra.

"Escuta: no porão dele há provas. Encontre-as antes que seja tarde."

A ligação cai.`,
    choices: [
      { text: 'Investigar o porão esta noite', nextNode: 'destiny_basement' },
      { text: 'Fingir que nada aconteceu por enquanto', nextNode: 'destiny1a1' },
      { text: 'Confrontar Rafael sobre Cassandra', nextNode: 'destiny_confrontation' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  destiny_escape: {
    id: 'destiny_escape',
    text: `Você corre. Não pega nada. Apenas corre.

A porta. A escada. A rua.

Rafael grita seu nome atrás de você. Mas você não para.

Você corre até não conseguir mais respirar.

Em um hotel barato, você se esconde. Paga em dinheiro. Nome falso.

Três dias depois, você lê no jornal: "Homem preso após tentativa de sequestro."

É Rafael. Tentou outra mulher. Mas ela gritou. Vizinhos chamaram a polícia.

Na casa dele, encontraram evidências de anos de crimes.

Você escapou. Por pouco.

Mas escapou.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  destiny_confrontation: {
    id: 'destiny_confrontation',
    text: `"Quem é Cassandra, Rafael?"

O rosto dele congela. Por um segundo apenas. Mas você viu.

"Quem?"

"Não finge. Eu sei sobre as outras."

Rafael se senta. Suspira.

"Cassandra é... uma ex. Obcecada. Ela cria histórias sobre mim."

"E as mulheres que desapareceram?"

Ele te olha. Há algo diferente nos olhos dele agora.

"Você andou investigando."

Não é uma pergunta.

"Eu precisava saber."

Rafael se levanta. Lentamente.

"E agora que sabe... o que pretende fazer?"`,
    choices: [
      { text: 'Dizer que vai embora', nextNode: 'destiny_confrontation_leave' },
      { text: 'Blefar dizendo que a polícia já sabe', nextNode: 'destiny_confrontation_bluff' },
      { text: 'Tentar fugir', nextNode: 'destiny_escape' }
    ],
    animation: 'scale-in',
    sound: 'heartbeat'
  },

  destiny_confrontation_leave: {
    id: 'destiny_confrontation_leave',
    text: `"Eu vou embora. Não quero mais isso."

Rafael bloqueia a porta.

"Você não pode ir. Não agora. Não depois de saber."

"Rafael, me deixa passar."

"Eu te amo. Demais. É por isso que..."

Ele não completa.

"Por isso que o quê, Rafael?"

Lágrimas escorrem pelo rosto dele.

"Por isso que eu não posso deixar você ir. Nunca."

Você olha para a janela. Para a porta. Para ele.

E toma uma decisão que vai mudar tudo.`,
    choices: [
      { text: 'Pular pela janela', nextNode: 'destiny_window_jump' },
      { text: 'Gritar por socorro', nextNode: 'destiny_scream' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  destiny_window_jump: {
    id: 'destiny_window_jump',
    text: `Você corre para a janela. Rafael vem atrás.

O vidro estilhaça. Você cai.

Primeiro andar. Dor. Mas você está viva.

Você se levanta. Corre. Grita.

Vizinhos aparecem. Chamam a polícia.

Rafael é preso tentando fugir pela porta dos fundos.

No julgamento, você testemunha. Com Cassandra. Com outras sobreviventes.

Rafael é condenado.

Você ganhou cicatrizes. Mas também ganhou liberdade.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  destiny_confrontation_bluff: {
    id: 'destiny_confrontation_bluff',
    text: `"A polícia já sabe de tudo. Se algo me acontecer, eles vêm direto aqui."

Rafael para. Estuda seu rosto.

"Você está mentindo."

"Quer arriscar?"

Um momento de silêncio eterno.

Então Rafael recua. Abre a porta.

"Vai embora então. Mas lembra: eu te amei de verdade."

Você não olha para trás.

Na delegacia, você conta tudo. Mas sem provas, não podem prendê-lo.

Você se muda de cidade. Muda de vida.

Rafael nunca é preso. Mas você sobreviveu.

Às vezes, sobreviver é a única vitória possível.`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out',
    sound: 'ambient'
  },

  destiny_scream: {
    id: 'destiny_scream',
    text: `"SOCORRO! ALGUÉM ME AJUDA!"

Sua voz ecoa pela casa. Pela rua.

Rafael tenta te calar mas você continua gritando.

Vizinhos ouvem. Luzes se acendem.

"O que está acontecendo aí?", alguém grita.

Rafael solta você. "Não é nada! Só uma discussão!"

"EU QUERO SAIR! ELE NÃO ME DEIXA!", você grita mais alto.

Sirenes ao longe.

Rafael olha para você com ódio. Mas também com derrota.

"Você arruinou tudo."

A polícia chega. Você está segura.

Rafael é levado para interrogatório. E nunca mais volta.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  destiny_talk_livia: {
    id: 'destiny_talk_livia',
    text: `"Espera. Não quero brigar. Me conta o que está acontecendo."

Lívia baixa a faca. Hesita.

"Você... quer ouvir?"

"Sim. Sem julgamentos."

Ela se senta no chão do porão. Você se senta também.

"Eu namorei Rafael há 4 anos. Ele era perfeito. Até que não era mais."

"Descobri fotos. De outras mulheres. Algumas... mortas."

"Quando confrontei ele, ele tentou me matar. Fingiu que foi suicídio. Mas eu sobrevivi."

"Desde então, moro aqui. No porão dele. Documentando. Esperando o momento certo."

"O momento para quê?"

Lívia sorri. Um sorriso triste.

"Para salvá-la. Como ninguém me salvou."`,
    choices: [
      { text: 'Trabalhar com ela para expor Rafael', nextNode: 'destiny_work_together' },
      { text: 'Chamar a polícia imediatamente', nextNode: 'destiny_police_now' }
    ],
    animation: 'fade-in',
    sound: 'ambient'
  },

  destiny_work_together: {
    id: 'destiny_work_together',
    text: `Vocês duas planejam juntas.

Lívia tem anos de evidências. Fotos. Gravações. Um diário completo.

Vocês levam tudo para a polícia federal.

A investigação é rápida. As provas, irrefutáveis.

Rafael é preso em casa. Sem chance de escapar.

No julgamento, vocês duas testemunham. Juntas.

Rafael é condenado a prisão perpétua.

Vocês se tornam amigas. Sobreviventes unidas.

A dor nunca passa completamente. Mas vocês não estão mais sozinhas.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  destiny_police_now: {
    id: 'destiny_police_now',
    text: `Você liga para a polícia ali mesmo.

"Há uma mulher desaparecida vivendo no porão. E um homem perigoso na casa."

Sirenes em 10 minutos.

Rafael é acordado pela polícia. Não tem tempo de reagir.

Lívia é encontrada. Desnutrida. Traumatizada. Mas viva.

As evidências no porão são suficientes para múltiplas acusações.

Rafael nunca mais vê a luz do dia.

Lívia recebe tratamento. Eventualmente, se recupera.

Você salvou duas vidas aquela noite: a dela e a sua.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  destiny_livia_story: {
    id: 'destiny_livia_story',
    text: `Você baixa a faca. "Me conta tudo."

Lívia respira fundo.

"Eu era a noiva dele. Há 5 anos. Íamos casar."

"Então descobri o diário. Os planos. As outras."

"Quando confrontei ele, quase morri. Escapei por milagre."

"Fingi minha morte. Mudei de identidade. Mas não consegui deixá-lo para trás."

"Porque eu sabia que ele ia fazer de novo. Com outras."

"Então eu vigiei. Documentei. Esperei."

"E quando vi você... vi a mim mesma. Jovem. Apaixonada. Cega."

Lágrimas escorrem pelo rosto dela.

"Eu tinha que te salvar. Como ninguém me salvou."`,
    choices: [
      { text: 'Agradecer e planejar juntas', nextNode: 'destiny_work_together' },
      { text: 'Ir à polícia agora com ela', nextNode: 'destiny_police_now' }
    ],
    animation: 'fade-in',
    sound: 'ambient'
  },

  destiny1a1: {
    id: 'destiny1a1',
    text: `Você desliga. Rafael entra com um sorriso e vinho.

"Pensei em uma noite especial", ele diz, mas há algo nos olhos dele. Uma intensidade nova.

Durante o jantar, você percebe: ele está estudando você. Cada movimento. Cada expressão.

"Você parece diferente hoje", ele comenta.

"Diferente como?"

"Assustada. Como se tivesse visto um fantasma."

O telefone vibra na sua mão. Mensagem de número desconhecido: "Ele sabe. As cartas nunca mentem. Corra. AGORA."

Rafael inclina a cabeça. "Quem te mandou mensagem?"`,
    choices: [
      { text: 'Mostrar a mensagem para ele', nextNode: 'destiny1a1_show' },
      { text: 'Mentir dizendo que é trabalho', nextNode: 'destiny1a1_lie' },
      { text: 'Sair correndo da casa', nextNode: 'destiny_escape' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  destiny1a1_lie: {
    id: 'destiny1a1_lie',
    text: `"É do trabalho. Emergência de última hora."

Rafael te olha por um longo momento.

"Às 22h? Sua empresa não respeita seus funcionários."

"É assim mesmo", você força um sorriso.

Mas os olhos dele dizem que não acreditou.

O resto da noite é estranho. Rafael fala pouco. Te observa muito.

Quando você vai dormir, ele fica acordado. No celular. No escuro.

Às 3h, você acorda com barulhos.

Rafael não está na cama.

Você ouve passos. No corredor. Aproximando-se.`,
    choices: [
      { text: 'Fingir que está dormindo', nextNode: 'destiny_pretend_sleep' },
      { text: 'Confrontá-lo sobre o barulho', nextNode: 'destiny_confront_night' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  destiny_pretend_sleep: {
    id: 'destiny_pretend_sleep',
    text: `Você fecha os olhos. Controla a respiração.

A porta abre. Silenciosamente.

Você sente ele se aproximar. Parar ao lado da cama.

Ele fica ali. Te observando. Por minutos.

Então... ele sai.

Você espera uma hora. Depois, silenciosamente, você pega seu celular e liga para a polícia.

Sussurrando, explica a situação.

Eles chegam ao amanhecer. Encontram Rafael no porão. Com cordas. Com fita.

Ele estava se preparando.

Você sobreviveu porque fingiu.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  destiny_confront_night: {
    id: 'destiny_confront_night',
    text: `"Rafael? O que está fazendo?"

Ele para no corredor. A luz está apagada.

"Nada. Só... checando as portas."

"Às 3h da manhã?"

Silêncio.

"Você deveria estar dormindo", ele diz. E há algo na voz dele.

"Você está me assustando."

"Não precisa ter medo. Se você ficar quieta. Se você não fizer perguntas."

Seu sangue gela.

"Mas você fez perguntas, não fez? Falou com Cassandra."

Ele sabe.`,
    choices: [
      { text: 'Correr para a porta da frente', nextNode: 'destiny_escape' },
      { text: 'Tentar raciocinar com ele', nextNode: 'destiny_reason_night' }
    ],
    animation: 'scale-in',
    sound: 'heartbeat'
  },

  destiny_reason_night: {
    id: 'destiny_reason_night',
    text: `"Rafael, seja lá o que esteja acontecendo, podemos conversar. Como adultos."

"Conversar?" Ele ri. Sem humor. "Conversas não mudam nada."

"Eu te amo. Apesar de tudo."

Ele para. Por um momento, há algo humano nos olhos dele.

"Você me ama?"

"Sim. E quero te ajudar. Mas você precisa me deixar."

Lágrimas escorrem pelo rosto dele.

"Eu não quero ser assim. Mas quando elas tentam ir embora... eu não consigo."

"Desta vez você consegue. Por mim."

Um longo silêncio.

Ele se afasta. Abre a porta.

"Vai. Antes que eu mude de ideia."

Você não hesita. Corre.

E nunca olha para trás.`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out',
    sound: 'ambient'
  },

  destiny1a1_show: {
    id: 'destiny1a1_show',
    text: `Você mostra a mensagem. Por um momento, o rosto de Rafael fica inexpressivo.

Então ele ri. Alto. Genuíno.

"Cassandra? Ela ainda está fazendo isso?"

"Você conhece ela?"

Rafael suspira, pegando o telefone. "Ela é minha ex. Obsessiva. Quando terminei, ela jurou que ia 'salvar' todas as mulheres que eu namorasse. Diz que tem poderes místicos."

Ele deleta a mensagem. "Não deixe ela te assustar. É só uma pessoa com problemas."

Você quer acreditar. Mas algo dentro de você grita que não deveria.

Naquela noite, você acorda com barulhos no porão.`,
    choices: [
      { text: 'Investigar os barulhos sozinha', nextNode: 'destiny_basement' },
      { text: 'Acordar Rafael', nextNode: 'destiny1a1_wake' }
    ],
    animation: 'fade-in',
    sound: 'ambient'
  },

  destiny1a1_wake: {
    id: 'destiny1a1_wake',
    text: `Você sacode Rafael. "Tem alguém no porão."

Ele se levanta rapidamente, pegando um taco de beisebol. "Fica aqui."

Você o vê descer as escadas. Ouve vozes. Duas pessoas conversando.

Uma delas é Rafael. A outra... uma voz feminina.

Você desce lentamente. A porta do porão está entreaberta. Você espia.

Rafael está abraçado com uma mulher. Cabelos longos e escuros. Ela está chorando.

"Eu te disse que ela descobriria", a mulher diz.

"Cassandra estava certa sobre você", você sussurra, mas eles ouvem.

Rafael se vira. "Eu posso explicar..."`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out',
    sound: 'jumpscare'
  },

  destiny_basement: {
    id: 'destiny_basement',
    text: `Você desce as escadas do porão sozinha. O cheiro de umidade e algo mais... algo metálico.

A luz não funciona. Você usa a lanterna do celular.

No canto, você vê: um altar improvisado. Velas. Fotos. De você. Centenas delas.

E no centro, cartas de tarô. Todas mostrando a mesma imagem: A Morte.

Uma voz atrás de você: "Você não devia ter descido."

Você se vira. Não é Rafael.

É uma mulher que você nunca viu antes. Mas ela segura uma faca que você reconhece - da sua cozinha.

"Cassandra me disse que você viria", ela sorri. "Meu nome é Lívia. E Rafael... bem, ele não sabe que eu moro aqui há meses."`,
    choices: [
      { text: 'Tentar fugir correndo', nextNode: 'destiny_run' },
      { text: 'Gritar por Rafael', nextNode: 'destiny_scream' },
      { text: 'Tentar conversar com ela', nextNode: 'destiny_talk_livia' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  destiny_run: {
    id: 'destiny_run',
    text: `Você corre para as escadas, mas Lívia é mais rápida. Ela te puxa pelo braço.

Vocês caem. A faca escapa da mão dela e desliza pelo chão.

Você se levanta primeiro. Pega a faca.

Lívia levanta as mãos. "Espera! Eu não vim te machucar! Vim te salvar!"

"SALVAR?! Você estava me espreitando!"

"Porque Rafael ia fazer com você o que fez com as outras! Eu fui a única que escapou! Por favor, você precisa acreditar em mim!"

Você ouve passos. Rafael está descendo.

"Tudo bem aí embaixo?", ele grita.`,
    choices: [
      { text: 'Gritar por ajuda de Rafael', nextNode: 'destiny_rafael_help' },
      { text: 'Ouvir o que Lívia tem a dizer', nextNode: 'destiny_livia_story' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  destiny_rafael_help: {
    id: 'destiny_rafael_help',
    text: `"Rafael! Socorro!", você grita.

Ele desce correndo. Vê Lívia. Seu rosto muda completamente.

"Você...", ele sussurra, e há algo em sua voz. Medo?

Lívia se levanta. "Oi, amor. Quanto tempo."

"Você morreu", Rafael diz, recuando. "Eu te vi morrer."

"Você me VIU morrer? Ou você me FEZ morrer?"

O silêncio que se segue é ensurdecedor.

Você olha para Rafael. "Do que ela está falando?"

Rafael olha para você com lágrimas nos olhos. "Eu posso explicar. Mas você vai me odiar."`,
    choices: [
      { text: 'Exigir a verdade agora', nextNode: 'destiny_truth_revealed' },
      { text: 'Fugir enquanto eles discutem', nextNode: 'destiny_escape2' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  destiny_truth_revealed: {
    id: 'destiny_truth_revealed',
    text: `"FALA!", você grita.

Rafael desaba no chão. "Eu... eu tenho uma condição. Sonambulismo violento. Quando durmo, eu não sou eu. Faço coisas... terríveis."

Lívia completa: "Ele me atacou enquanto dormia. Tentou me matar. Eu fingi estar morta e fugi. Desde então, venho tentando salvar as mulheres que ele namora."

"Por que não foi à polícia?"

"Eu fui! Mas ele tem álibi perfeito. Estava dormindo. Não há como provar."

Rafael soluça. "Eu tomo remédios agora. Eu juro. Eu não ia te machucar."

Lívia mostra o braço. Cicatrizes profundas. "Foi o que ele disse pra mim também."

Você olha para os dois. Uma das histórias é verdadeira. Ou ambas. Ou nenhuma.

Em quem você confia?`,
    choices: [
      { text: 'Confiar em Rafael e chamar a polícia para Lívia', nextNode: 'destiny_trust_rafael' },
      { text: 'Confiar em Lívia e fugir com ela', nextNode: 'destiny_trust_livia' },
      { text: 'Não confiar em nenhum dos dois', nextNode: 'destiny_trust_nobody' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  destiny_trust_rafael: {
    id: 'destiny_trust_rafael',
    text: `Você escolhe Rafael. A polícia leva Lívia embora, gritando avisos.

Você e Rafael tentam reconstruir. Ele te mostra os remédios. Os relatórios médicos. Tudo parece legítimo.

Três meses depois, você acorda às 3h. Rafael não está na cama.

Você o encontra no porão. Parado. Olhos abertos mas vazios.

Na mão dele, uma faca.

E na parede, escrito com sangue: "Cassandra avisou."

Você nunca deveria ter confiado.`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out',
    sound: 'jumpscare'
  },

  destiny_trust_livia: {
    id: 'destiny_trust_livia',
    text: `Você agarra a mão de Lívia. "Me tira daqui."

Vocês sobem correndo. Rafael tenta te segurar, mas você empurra.

"Desculpa", você diz. "Mas eu não posso arriscar."

Você e Lívia correm para o carro dela. Ela dirige por horas.

Vocês param em um hotel pequeno. Lívia explica tudo: outras mulheres, outras tentativas, o padrão.

"Você me salvou", você diz.

Ela sorri, mas há algo estranho no sorriso. "Não. Você se salvou. Assim como eu me salvei de Cassandra."

"O quê?"

A porta se tranca automaticamente. Lívia tira uma peruca. Embaixo, cabelos curtos e grisalhos.

"Cassandra é meu nome verdadeiro. Lívia era... outra. Rafael? Ele era inocente."

Você finalmente entende. Mas é tarde demais.`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out',
    sound: 'jumpscare'
  },

  destiny_trust_nobody: {
    id: 'destiny_trust_nobody',
    text: `"Fiquem longe de mim. OS DOIS."

Você sobe correndo, pega suas chaves, e vai embora. Não olha para trás.

Na delegacia, você conta tudo. Eles investigam.

Descobrem que: Rafael tinha sonambulismo, sim, mas estava em tratamento. Lívia era uma ex obcecada que invadiu a casa.

Mas também descobrem algo mais: Cassandra. A cartomante. Ela orquestrou tudo. Manipulou Lívia. Criou o cenário perfeito para destruir Rafael e te capturar.

Quando a polícia vai até a casa de Cassandra, encontram um santuário dedicado a você. Fotos desde que você era criança.

"Ela é minha irmã", Cassandra confessa. "Gêmea. Nossos pais ficaram com ela. Me abandonaram. Passei a vida preparando minha vingança."

Você olha nos olhos dela. É como olhar em um espelho distorcido.

Você nunca soube que tinha uma irmã.

Agora entende: o destino não prevê o futuro. Ele o cria.`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out',
    sound: 'ambient'
  },

  destiny_escape2: {
    id: 'destiny_escape2',
    text: `Enquanto eles discutem, você sobe as escadas silenciosamente.

Pega as chaves. Sai pela porta da frente.

No carro, você dirige sem parar até o nascer do sol.

Anos depois, você nunca descobre a verdade real. Foi Rafael? Foi Lívia? Foi tudo mentira?

Você vive olhando por cima do ombro.

Mas pelo menos você vive.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
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
    animation: 'fade-in',
    sound: 'notification'
  },

  truth2: {
    id: 'truth2',
    text: `No café, Lívia te espera. Há um hematoma sob o olho.

"Eu mandei a mensagem para te salvar." Ela desliza um envelope. "Tudo está aqui. Rafael não é quem você pensa."

Você abre. Certificados de óbito. Três mulheres. Todas ex-namoradas. Todas mortes "acidentais".`,
    choices: [
      { text: 'Examinar os documentos com mais atenção', nextNode: 'truth2_examine' },
      { text: 'Perguntar sobre o hematoma dela', nextNode: 'truth2_bruise' },
      { text: 'Sair imediatamente com as provas', nextNode: 'truth2_leave' }
    ],
    animation: 'scale-in',
    sound: 'heartbeat'
  },

  truth2_examine: {
    id: 'truth2_examine',
    text: `Você examina os documentos com cuidado.

A primeira morte: Ana Carolina, 2019. Queda das escadas.
A segunda: Mariana Silva, 2020. Afogamento na banheira.
A terceira: Beatriz Santos, 2022. Incêndio em apartamento.

"Todas tiveram relacionamentos com Rafael por cerca de 6 meses", Lívia explica. "Exatamente quanto tempo vocês estão juntos."

Você sente o estômago revirar.

"E tem mais", ela continua, mostrando o celular. "Encontrei isso na casa dele."

É um diário. Com seu nome. E uma data marcada: hoje.`,
    choices: [
      { text: 'Ir à polícia imediatamente', nextNode: 'truth_police' },
      { text: 'Confrontar Rafael com Lívia como testemunha', nextNode: 'truth_confront_together' },
      { text: 'Pedir para ver mais provas', nextNode: 'truth_more_evidence' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  truth2_bruise: {
    id: 'truth2_bruise',
    text: `"O que aconteceu com seu olho?", você pergunta.

Lívia toca o hematoma, wincing. "Rafael me encontrou ontem. Disse que eu devia parar de 'inventar histórias'."

"Ele te bateu?"

"Não foi a primeira vez. Mas desta vez eu gravei." Ela mostra o celular - um vídeo de Rafael a empurrando contra uma parede.

Sua voz no vídeo: "Se você contar pra ela, eu acabo com você. E com ela também."

Você sente náusea.

"Eu era como você", Lívia diz suavemente. "Achava que ele era perfeito. Até que..."

Ela para. Olhos marejados.`,
    choices: [
      { text: 'Abraçá-la e pedir que conte tudo', nextNode: 'truth_livia_story' },
      { text: 'Usar o vídeo como prova', nextNode: 'truth_use_video' },
      { text: 'Questionar se ela está manipulando você', nextNode: 'truth_doubt_livia' }
    ],
    animation: 'fade-in',
    sound: 'ambient'
  },

  truth2_leave: {
    id: 'truth2_leave',
    text: `Você pega os documentos e sai do café correndo.

Precisa processar isso. Sozinha.

No apartamento, você espalha tudo na mesa. Fotos. Certidões. Notícias de jornal.

O padrão é inegável. E aterrorizante.

Seu celular toca. Rafael.

"Onde você está, amor? Estou preocupado."

Sua voz soa... diferente. Ou você está paranóica?`,
    choices: [
      { text: 'Atender e fingir que está tudo bem', nextNode: 'truth_pretend' },
      { text: 'Ignorar e bloquear o número', nextNode: 'truth_block' },
      { text: 'Atender e confrontá-lo pelo telefone', nextNode: 'truth_phone_confront' }
    ],
    animation: 'fade-in',
    sound: 'notification'
  },

  truth_police: {
    id: 'truth_police',
    text: `Você e Lívia vão direto à delegacia.

O delegado ouve tudo. Examina os documentos. Seu rosto fica grave.

"Vamos investigar. Mas...", ele hesita, "...precisamos de mais do que coincidências. Ele nunca foi suspeito oficialmente."

"Então o que fazemos?", você pergunta, desesperada.

"Fiquem longe dele. Vou colocar uma viatura para observação."

Três dias depois, você recebe uma ligação.

Rafael foi preso tentando invadir seu apartamento. Com clorofórmio e cordas no carro.

O diário encontrado é a confissão completa. Todas as três mulheres. E você seria a quarta.

Lívia te salvou.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_confront_together: {
    id: 'truth_confront_together',
    text: `Vocês duas vão até a casa de Rafael. Você bate na porta.

Ele abre sorrindo. O sorriso congela quando vê Lívia.

"Lívia? Você... você está viva?"

"Surpreso?", ela diz friamente.

"Eu... eu pensei que você tinha se mudado! Desaparecido!"

Você mostra o diário. "Explica isso."

Rafael olha para o diário. Depois para você. Depois para Lívia.

E então ele sorri. Um sorriso que te faz estremecer.

"Entrem", ele diz calmamente. "Vamos resolver isso como adultos."

Algo na voz dele...`,
    choices: [
      { text: 'Entrar com Lívia', nextNode: 'truth_enter_trap' },
      { text: 'Recusar e chamar a polícia ali mesmo', nextNode: 'truth_call_police_now' },
      { text: 'Correr', nextNode: 'truth_run_together' }
    ],
    animation: 'scale-in',
    sound: 'heartbeat'
  },

  truth_more_evidence: {
    id: 'truth_more_evidence',
    text: `"Você tem mais alguma prova?", você pergunta.

Lívia abre uma mochila. Dentro há câmeras, gravadores, um laptop.

"Eu venho investigando ele há dois anos. Desde que escapei."

Ela abre o laptop. Mostra vídeos. Rafael seguindo mulheres. Entrando em suas casas à noite. Preparando "acidentes".

"Ele é meticuloso. Paciente. Mas eu documentei tudo."

Um dos vídeos mostra Rafael entrando no seu apartamento. Semana passada. Enquanto você dormia.

Ele só... te observava.

Por horas.

"Jesus Cristo", você sussurra.

"Ele está planejando há meses. Hoje seria o dia, de acordo com o padrão."`,
    choices: [
      { text: 'Ir à mídia com as provas', nextNode: 'truth_media' },
      { text: 'Confrontá-lo com tudo', nextNode: 'truth_final_confrontation' },
      { text: 'Desaparecer antes que seja tarde', nextNode: 'truth_disappear' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  truth_livia_story: {
    id: 'truth_livia_story',
    text: `Você abraça Lívia. Ela chora.

"Eu o conheci há três anos. Ele era perfeito. Atencioso. Romântico."

"Mas aos poucos... pequenas coisas. Ele sabia onde eu estava sempre. Aparecia 'por acaso'. Conhecia meus horários."

"Quando tentei terminar, ele implorou. Disse que ia se matar. Então eu fiquei."

"Uma noite, acordei com ele sobre mim. Mãos no meu pescoço. Olhos... vazios."

"Consegui escapar. Corri. Mas ele me encontrava. Sempre."

"Finalmente, fingi minha morte. Incêndio. Deixei um corpo irreconhecível."

"E desde então, tento salvar as outras. Mas sempre chego tarde demais."

Ela olha nos seus olhos. "Mas você... você eu posso salvar."`,
    choices: [
      { text: 'Fugir juntas para outro país', nextNode: 'truth_escape_abroad' },
      { text: 'Armarem uma armadilha para ele', nextNode: 'truth_trap_rafael' },
      { text: 'Expor tudo publicamente', nextNode: 'truth_expose_all' }
    ],
    animation: 'fade-in',
    sound: 'ambient'
  },

  truth_use_video: {
    id: 'truth_use_video',
    text: `"Esse vídeo é tudo que precisamos", você diz.

Lívia envia para seu e-mail. Para a polícia. Para amigos de confiança.

"Se algo acontecer com qualquer uma de nós, todos verão."

Rafael liga. Você atende no viva-voz.

"Lívia está mentindo pra você", ele diz, voz calma demais. "Ela é instável. Obcecada comigo."

"Então por que você a ameaçou ontem?"

Silêncio.

"Você... você me gravou?"

"Tudo. Todas as ameaças. Todas as mentiras."

Outro silêncio. Então, sussurrando:

"Você não devia ter feito isso."

A ligação cai.

Lívia olha para você. "Precisamos sair daqui. Agora."`,
    choices: [
      { text: 'Ir para a casa de Lívia', nextNode: 'truth_livia_house' },
      { text: 'Ir para um hotel', nextNode: 'truth_hotel' },
      { text: 'Ficar e enfrentá-lo', nextNode: 'truth_stand_ground' }
    ],
    animation: 'scale-in',
    sound: 'heartbeat'
  },

  truth_doubt_livia: {
    id: 'truth_doubt_livia',
    text: `"Como eu sei que você não está manipulando tudo isso?", você pergunta.

Lívia recua, como se tivesse sido atingida.

"Eu... eu entendo. É exatamente o que ele diria que eu faria."

Ela respira fundo. "Tudo bem. Você não precisa confiar em mim. Mas pesquise. Ana Carolina. Mariana Silva. Beatriz Santos."

"Procure no Facebook, Instagram. Veja as fotos antigas delas. Todas com Rafael."

"Veja quando pararam de postar. Quando morreram."

"E então me diga se estou mentindo."

Ela se levanta. "Quando estiver pronta para acreditar, me liga. Mas não demore. Ele não vai."

Lívia sai.

Você fica sozinha com os documentos. Com a dúvida. Com o medo.`,
    choices: [
      { text: 'Investigar sozinha as ex-namoradas', nextNode: 'truth_investigate' },
      { text: 'Confrontar Rafael diretamente', nextNode: 'truth_direct_confront' },
      { text: 'Contratar um detetive particular', nextNode: 'truth_detective' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  truth_pretend: {
    id: 'truth_pretend',
    text: `"Oi amor, estou bem! Só saí para tomar um ar", você mente, forçando alegria na voz.

"Que bom. Estava preocupado. Quer jantar juntos hoje?"

Você olha para os documentos espalhados. Para as fotos das mulheres mortas.

"Claro! Onde?"

"Aquele restaurante que você ama. 20h?"

"Perfeito."

Você desliga. Mãos tremendo.

Lívia tinha deixado um cartão. Você liga.

"Ele marcou um encontro", você diz.

"Não vá. Por favor, não vá."

"Eu preciso. Preciso olhar nos olhos dele e saber."

"Então vou com você. Estarei lá. Você não vai ficar sozinha."

20h. O restaurante está cheio. Rafael te espera com flores.

Você senta. Ele sorri.

E você vê. Nos olhos dele. A verdade.`,
    choices: [
      { text: 'Acusar ele ali mesmo, na frente de todos', nextNode: 'truth_public_accusation' },
      { text: 'Sinalizar para Lívia intervir', nextNode: 'truth_livia_intervenes' },
      { text: 'Jogar vinho nele e sair', nextNode: 'truth_dramatic_exit' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  truth_block: {
    id: 'truth_block',
    text: `Você bloqueia o número. Tranca as portas. Fecha as cortinas.

Mas a sensação de ser observada não passa.

Às 2h da manhã, você ouve. Alguém tentando abrir a porta.

Você não respira. Não se move.

A maçaneta gira. Devagar.

"Sei que está aí", a voz de Rafael atravessa a porta. "Podemos conversar como adultos."

"Ou posso entrar de outra forma."

Você pega o telefone. 190.

"Polícia? Tem alguém tentando invadir minha casa."

Sirenes. Rafael foge.

Mas quando a polícia chega, encontram algo na porta:

Um bilhete. "Você deveria ter atendido. Agora ficou mais complicado."`,
    choices: [
      { text: 'Pedir proteção policial', nextNode: 'truth_police_protection' },
      { text: 'Ir para a casa de um familiar', nextNode: 'truth_family_house' },
      { text: 'Enfrentá-lo de uma vez por todas', nextNode: 'truth_final_stand' }
    ],
    animation: 'scale-in',
    sound: 'jumpscare'
  },

  truth_phone_confront: {
    id: 'truth_phone_confront',
    text: `"Eu sei sobre as outras, Rafael."

Silêncio pesado.

"...Quais outras?"

"Ana. Mariana. Beatriz."

Um suspiro. "Lívia te contou."

"Então é verdade?"

"É... complicado."

"Complicado?! Elas morreram!"

"Foi culpa delas! Elas iam me deixar! Depois de tudo que eu fiz!"

Você congela. Ele acabou de confessar.

"Você... você as matou."

"E eu vou matar você também, se tentar me deixar."

A linha fica muda.

A porta do apartamento se abre.

Ele tem chave.`,
    choices: [
      { text: 'Pular pela janela', nextNode: 'truth_window_escape' },
      { text: 'Se trancar no banheiro e ligar para polícia', nextNode: 'truth_bathroom_911' },
      { text: 'Pegar uma faca da cozinha', nextNode: 'truth_self_defense' }
    ],
    animation: 'fade-in',
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
      { text: 'Entrar e ouvir', nextNode: 'truth3_enter' },
      { text: 'Exigir que ele fale ali mesmo', nextNode: 'truth3_doorway' },
      { text: 'Recusar e sair', nextNode: 'truth8' }
    ],
    animation: 'fade-in',
    sound: 'notification'
  },

  truth3_enter: {
    id: 'truth3_enter',
    text: `Você entra. A casa está diferente. Mais escura. Fria.

Rafael fecha a porta atrás de você.

"Lívia era... especial. Eu a amava. De verdade."

"E?"

"E ela descobriu sobre as outras."

Seu sangue gela. "Que outras?"

Rafael senta. Mãos no rosto. "Eu tenho um problema. Quando amo demais, eu... preciso garantir que nunca vão embora."

"Então você as mata?!"

"EU AS PROTEJO!", ele grita. Então, mais calmo: "De um mundo cruel. De se machucarem. De me deixarem."

Você recua para a porta. Trancada.

"Mas você", ele sorri, "você é diferente. Você entende."`,
    choices: [
      { text: 'Concordar para ganhar tempo', nextNode: 'truth_play_along' },
      { text: 'Atacá-lo e tentar fugir', nextNode: 'truth_attack_rafael' },
      { text: 'Tentar raciocinar com ele', nextNode: 'truth_reason_rafael' }
    ],
    animation: 'scale-in',
    sound: 'suspense'
  },

  truth3_doorway: {
    id: 'truth3_doorway',
    text: `"Fala aqui. Agora."

Rafael olha em volta. Vizinhos podem ouvir.

"Lívia não é quem você pensa. Ela é... desequilibrada. Criou toda uma fantasia sobre mim."

"Ela tem provas, Rafael."

"Forjadas. Ela é obcecada comigo desde que terminamos."

"Por que ela faria isso?"

"Porque eu a rejeitei. E agora quer destruir minha vida."

Ele parece sincero. Mas...

Seu celular toca. Lívia: "Não acredita nele. Tenho as provas reais. Te encontro na biblioteca em 30 min. Sozinha."`,
    choices: [
      { text: 'Ir encontrar Lívia na biblioteca', nextNode: 'truth_library' },
      { text: 'Confrontar Rafael com a mensagem', nextNode: 'truth_show_message' },
      { text: 'Ir embora sem dizer nada', nextNode: 'truth_silent_leave' }
    ],
    animation: 'fade-in',
    sound: 'notification'
  },

  truth4: {
    id: 'truth4',
    text: `Você confronta por mensagem.

Lívia: "Rafael não é quem diz ser. Quanto mais você fica perto dele, menos chance tem de sobreviver."

"Encontra comigo. Ou descubra sozinha. Mas quando descobrir, pode ser tarde demais."

Você bloqueia ela. Bloqueia Rafael. Troca as fechaduras.

Durante um mês, você se isola.

Até que um dia, lendo o jornal:

"Mulher encontrada morta em apartamento. Polícia suspeita de serial killer."

A foto é de Lívia.

E embaixo, em letras menores: "Vítima havia denunciado perseguição nos últimos meses."

Seu telefone toca. Número desconhecido.

"Alô?"

"Lívia tentou te salvar. Eu fui mais rápido. Você é a próxima."

É Rafael.`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out',
    sound: 'heartbeat'
  },

  // Continuação dos novos nós do caminho Truth

  truth_investigate: {
    id: 'truth_investigate',
    text: `Você passa dias pesquisando.

Ana Carolina: último post no Instagram - foto com Rafael. "Finalmente feliz ❤️"
Duas semanas depois: notícia de óbito.

Mariana Silva: Facebook cheio de fotos dele. Última atualização: "Começando uma vida nova"
Um mês depois: encontrada morta na banheira.

Beatriz Santos: Twitter. "Conheci alguém incrível"
A foto mostra Rafael ao fundo.
Três semanas depois: incêndio em seu apartamento.

O padrão é inegável.

Você verifica suas próprias redes sociais. Conta os posts sobre Rafael.

Vinte e três.

E vocês estão juntos há... cinco meses e meio.

Lívia estava certa.`,
    choices: [
      { text: 'Ligar para Lívia e se desculpar', nextNode: 'truth_apologize_livia' },
      { text: 'Ir à polícia com suas descobertas', nextNode: 'truth_police_evidence' },
      { text: 'Confrontar Rafael com prints das redes sociais', nextNode: 'truth_social_media_confront' }
    ],
    animation: 'fade-in',
    sound: 'suspense'
  },

  truth_direct_confront: {
    id: 'truth_direct_confront',
    text: `Você vai até a casa de Rafael sem avisar. Porta aberta.

Você entra. A casa está silenciosa.

"Rafael?"

Nenhuma resposta.

Você explora. Na mesa, documentos. Seu nome. Seu endereço. Seus horários.

Uma pasta inteira sobre você.

No computador, aberto: um fórum. "Como desaparecer sem deixar rastros."

Seu estômago revira.

No quarto, você encontra: fotos suas dormindo. Centenas. De ângulos impossíveis.

Ele tem câmeras no seu apartamento.

A porta do quarto se fecha atrás de você.

"Procurando algo?"

É Rafael.`,
    choices: [
      { text: 'Fingir que não viu nada', nextNode: 'truth_pretend_nothing' },
      { text: 'Correr para a janela', nextNode: 'truth_bedroom_escape' },
      { text: 'Confrontá-lo sobre tudo', nextNode: 'truth_confront_photos' }
    ],
    animation: 'scale-in',
    sound: 'jumpscare'
  },

  truth_detective: {
    id: 'truth_detective',
    text: `Você contrata um detetive particular. Ex-policial. Discreto.

Uma semana depois, ele te liga: "Precisamos conversar. Pessoalmente."

No escritório dele, ele coloca uma pasta na mesa.

"Rafael Almeida. Três identidades diferentes nos últimos 10 anos."

"O quê?"

"Guilherme Costa em São Paulo. Marcelo Santos no Rio. Rafael Almeida aqui."

"Sempre o mesmo padrão. Relacionamento. Seis meses. Morte 'acidental'. Mudança de cidade e identidade."

"Encontrei oito vítimas. Que eu consegui confirmar. Podem ter mais."

Você não consegue respirar.

"Tem mais", o detetive continua. "Ele tem uma irmã. Cassandra. Que o ajuda a selecionar as vítimas."

Cassandra. A taróloga.`,
    choices: [
      { text: 'Confrontar Cassandra', nextNode: 'truth_confront_cassandra' },
      { text: 'Ir com tudo isso para a polícia federal', nextNode: 'truth_federal_police' },
      { text: 'Usar você mesma como isca', nextNode: 'truth_be_bait' }
    ],
    animation: 'fade-in',
    sound: 'heartbeat'
  },

  // FINAIS DO CAMINHO TRUTH (mais de 30 finais únicos possíveis)

  truth_enter_trap: {
    id: 'truth_enter_trap',
    text: `Vocês entram. Rafael fecha a porta.

"Sabe", ele diz calmamente, "eu sempre soube que vocês duas se encontrariam eventualmente."

Ele tira algo do bolso. Um controle remoto.

"Por isso preparei a casa."

Um clique. Todas as saídas se trancam.

Lívia tenta a janela. Barras de metal cobrem do lado de fora.

"Você planejou isso", você sussurra.

"Planejei TUDO. Desde o primeiro dia. Cassandra me ajudou a escolher você. A mensagem de Lívia foi MINHA ideia. Eu mandei ela enviar."

"Por quê?"

"Porque", ele sorri, "vocês duas juntas são o final perfeito. Minhas duas mulheres favoritas. Juntas. Para sempre."

Ele avança.`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out',
    sound: 'heartbeat'
  },

  truth_call_police_now: {
    id: 'truth_call_police_now',
    text: `Você disca 190 ali mesmo.

Rafael vê e corre. Lívia tenta segurá-lo mas ele a empurra.

A polícia chega em 8 minutos. Encontra vocês duas. Assustadas mas vivas.

Rafael foge, mas deixa tudo para trás. O diário. As provas. Tudo.

Dois dias depois, ele é capturado tentando fugir para o Paraguai.

O julgamento é rápido. As provas, incontestáveis.

Rafael é condenado por três assassinatos e duas tentativas.

Você e Lívia se tornam amigas. Ambas sobreviventes.

Você finalmente consegue dormir sem medo.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_run_together: {
    id: 'truth_run_together',
    text: `"CORRE!", você grita.

Vocês duas correm. Rafael vem atrás.

Mas vocês são mais rápidas. Mais desesperadas.

Lívia tem um carro. Vocês entram. Trancam.

Rafael bate no vidro. "VOCÊ NÃO PODE ESCAPAR!"

Lívia acelera.

Vocês dirigem por horas. Cruzam a fronteira. Começam uma vida nova.

Juntas, vocês se protegem. Curam. Recomeçam.

Anos depois, você recebe uma carta. Rafael morreu na prisão.

Você queima a carta sem ler.

Algumas histórias merecem ser esquecidas.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
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
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth6: {
    id: 'truth6',
    text: `Você pega o envelope. Agradece a Lívia. E vai embora.

Pega um ônibus para outra cidade. Deixa tudo para trás.

Seis meses depois, com um novo nome, você finalmente sorri de verdade.

Recomeçar foi a melhor vingança.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth7: {
    id: 'truth7',
    text: `Rafael mostra mensagens de Lívia. "Ela é obsessiva. Criou tudo isso."

Você não sabe mais em quem confiar. A verdade tem tantas versões. Qual delas é real?`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out',
    sound: 'suspense'
  },

  truth8: {
    id: 'truth8',
    text: `"Não quero mais mentiras."

Você sai. Na rua, Lívia liga.

"Você fez a escolha certa. Agora preciso te contar o resto. O que ele fez com as outras."

"Outras?"`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'notification'
  },

  // Adicionando todos os outros finais necessários
  truth_media: {
    id: 'truth_media',
    text: `Você leva tudo para a imprensa.

No dia seguinte, a história explode. "Serial Killer Romântico Aterroriza Cidade."

Rafael é preso. As famílias das vítimas finalmente têm respostas.

Você e Lívia dão entrevistas. Contam suas histórias. Salvam outras mulheres.

Rafael tenta se defender, mas as provas são irrefutáveis.

Condenado a 120 anos.

Você finalmente sente que pode seguir em frente.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_final_confrontation: {
    id: 'truth_final_confrontation',
    text: `Você vai até Rafael com Lívia e todas as provas.

"Acabou", você diz simplesmente.

Rafael olha para os vídeos. Para o diário. Para vocês duas.

E então... ele chora.

"Eu sou doente. Eu sei. Preciso de ajuda."

"Você precisa de prisão", Lívia diz.

A polícia chega. Vocês já tinham ligado antes.

Rafael é levado. Você e Lívia se abraçam.

Sobreviventes.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_disappear: {
    id: 'truth_disappear',
    text: `Você e Lívia desaparecem.

Novos nomes. Novos países. Novas vidas.

Rafael nunca encontra vocês.

Anos depois, você lê que ele foi preso por tentar matar outra mulher.

Mas ela sobreviveu. Graças aos alertas que você e Lívia espalharam.

Você salvou uma vida desaparecendo.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_escape_abroad: {
    id: 'truth_escape_abroad',
    text: `Vocês fogem para Lisboa. Começam uma vida nova juntas.

Lívia muda de identidade. Você também.

Vocês abrem uma ONG para mulheres em relacionamentos abusivos.

Anos depois, Rafael é preso. Mas vocês já estão seguras. Longe. Livres.

A melhor vingança é viver bem.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_trap_rafael: {
    id: 'truth_trap_rafael',
    text: `Vocês armam uma armadilha. Gravam uma confissão.

Rafael cai. Confessa tudo. Sobre as três mulheres. Os planos.

A gravação vai para a polícia. Para a mídia.

Ele é preso antes que possa reagir.

Você e Lívia testemunham no julgamento.

Justiça é servida.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_expose_all: {
    id: 'truth_expose_all',
    text: `Vocês expõem tudo nas redes sociais. Documentos, fotos, tudo.

A história viraliza. #JustiçaParaAsVítimas

Rafael tenta fugir mas é reconhecido no aeroporto.

Preso. Julgado. Condenado.

Vocês salvaram inúmeras outras mulheres ao expor a verdade.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_livia_house: {
    id: 'truth_livia_house',
    text: `Vocês vão para a casa de Lívia. É um bunker. Preparado.

"Eu sabia que este dia chegaria", ela explica.

Câmeras. Alarmes. Tudo monitorado.

Quando Rafael tenta invadir, é capturado em vídeo.

A polícia o prende em flagrante.

Vocês estavam preparadas.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_hotel: {
    id: 'truth_hotel',
    text: `Vocês vão para um hotel no centro. Muita gente. Segurança.

Rafael aparece no lobby. Seguranças o interceptam.

A polícia chega. Você mostra as provas.

Ele é preso na frente de todos.

Humilhado. Derrotado.

Você finalmente respira.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_stand_ground: {
    id: 'truth_stand_ground',
    text: `"Não vou fugir mais", você diz a Lívia.

Rafael chega. Você mostra que tem backup. Provas em vários lugares.

"Se algo acontecer comigo, todos saberão. A polícia, a mídia, TODOS."

Rafael percebe que perdeu.

Ele não pode te tocar sem se expor.

Você venceu.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_public_accusation: {
    id: 'truth_public_accusation',
    text: `Você se levanta. Grita: "Este homem matou três mulheres!"

O restaurante silencia.

Rafael tenta negar. Mas você mostra os documentos. Ali. Para todos.

Alguém filma. Viraliza.

A pressão pública força uma investigação.

Rafael é preso três dias depois.

Seu grito salvou sua vida.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_livia_intervenes: {
    id: 'truth_livia_intervenes',
    text: `Você faz um sinal. Lívia aparece.

"Polícia está a caminho, Rafael", ela diz.

Rafael se levanta bruscamente. Tenta fugir.

Mas a polícia já estava posicionada. Lívia havia chamado antes.

Ele é preso na saída do restaurante.

Você abraça Lívia. Vocês salvaram uma à outra.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_dramatic_exit: {
    id: 'truth_dramatic_exit',
    text: `Você joga o vinho na cara dele. "Eu sei de TUDO!"

E sai. Deixa ele ali. Humilhado.

Na rua, Lívia te espera. Carro ligado.

Vocês fogem. Mas desta vez, juntas. Preparadas.

Rafael tenta segui-las. Mas vocês já avisaram a polícia.

Ele é preso na estrada.

Acabou.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_police_protection: {
    id: 'truth_police_protection',
    text: `A polícia oferece proteção. Uma viatura na sua porta.

Rafael tenta se aproximar três vezes. Três vezes é impedido.

Na terceira, é preso por violação de medida protetiva.

Na prisão, outros crimes são descobertos.

Ele nunca mais sai.

Você finalmente está segura.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_family_house: {
    id: 'truth_family_house',
    text: `Você vai para a casa da sua mãe. Em outra cidade.

Rafael não sabe onde. Ninguém conta.

Semanas depois, você lê: "Homem preso por tentativa de homicídio."

Era Rafael. Tentou atacar outra mulher.

Mas desta vez, ela estava pronta. Graças aos seus avisos.

Você a salvou sem nem saber.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_final_stand: {
    id: 'truth_final_stand',
    text: `"Vem", você diz ao telefone. "Vamos terminar isso."

Rafael chega. Mas você não está sozinha.

Lívia. A polícia. Uma equipe de TV.

"Você quer me matar?", você diz, câmeras gravando. "Então faz. Na frente de todos."

Rafael congela. Percebe a armadilha.

Ele corre. Mas é capturado duas quadras depois.

Você venceu.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_window_escape: {
    id: 'truth_window_escape',
    text: `Você pula pela janela. Segundo andar.

Dói. Mas você corre.

Rafael vem atrás. Mas vizinhos veem. Chamam a polícia.

Você se esconde numa loja. Explica tudo.

A polícia chega. Prende Rafael tentando te procurar.

Na bolsa dele: corda, fita adesiva, clorofórmio.

Premeditado.

Ele é condenado a 40 anos.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_bathroom_911: {
    id: 'truth_bathroom_911',
    text: `Você corre para o banheiro. Tranca. Liga 190.

"Ele está aqui. Ele confessou. Por favor, rápido!"

Rafael bate na porta. "ABRE!"

Você ouve sirenes. 4 minutos.

A porta começa a ceder.

Polícia invade o apartamento. Rafael é contido.

Você sai do banheiro. Tremendo mas viva.

Você sobreviveu.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_self_defense: {
    id: 'truth_self_defense',
    text: `Você pega a faca maior da cozinha.

Rafael entra. Vê a faca. Para.

"Você não vai me machucar", ele diz, avançando.

Você não hesita. Corta o braço dele.

Ele recua, surpreso. "Você... me cortou?"

"E vou fazer pior se chegar perto."

Ele foge. Você liga para polícia.

Rafael é preso no hospital.

Legítima defesa. Você é inocentada.

Você salvou sua própria vida.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_play_along: {
    id: 'truth_play_along',
    text: `"Você está certo", você mente. "Eu entendo."

Rafael sorri. Relaxa.

Você se aproxima. Abraça ele.

E discretamente, liga para 190 no bolso.

Deixa o celular gravando.

Rafael confessa tudo, pensando que você é cúmplice.

Quando a polícia chega, tem tudo gravado.

Ele percebe tarde demais que você o enganou.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_attack_rafael: {
    id: 'truth_attack_rafael',
    text: `Você pega um vaso e bate na cabeça dele.

Rafael cai. Você corre para a porta. Trancada.

Procura a chave. Encontra. Mãos tremendo.

Rafael se levanta. Sangue no rosto.

Você abre a porta. Corre.

Grita na rua. Vizinhos aparecem.

Rafael não pode fazer nada com testemunhas.

Polícia chega. Você conta tudo.

Ele é preso. Você é livre.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_reason_rafael: {
    id: 'truth_reason_rafael',
    text: `"Rafael, você precisa de ajuda. Profissional."

Ele olha para você. Por um momento, parece... humano.

"Eu sei", ele sussurra. "Eu não quero ser assim."

"Então vamos juntos. Polícia, psiquiatra. Eu te acompanho."

Rafael chora. Concorda.

Vocês saem juntos. Ele se entrega.

No julgamento, você testemunha. Ele é enviado para hospital psiquiátrico.

Não é liberdade. Mas é justiça.`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_library: {
    id: 'truth_library',
    text: `Você vai à biblioteca. Lívia está numa mesa dos fundos.

Ela abre um baú. Dentro: diários. De Rafael.

"Roubei da casa dele. Leia."

Você lê. Cada página, mais aterrorizante.

Planos detalhados. Datas. Métodos.

Seu nome aparece 47 vezes.

"Ele está vindo", Lívia diz de repente. "Rastreou meu celular."

Rafael entra na biblioteca.

Vocês duas se olham.

Correr ou confrontar?`,
    choices: [
      { text: 'Correr pelos fundos', nextNode: 'truth_library_escape' },
      { text: 'Confrontar com testemunhas', nextNode: 'truth_library_confront' }
    ],
    animation: 'scale-in',
    sound: 'heartbeat'
  },

  truth_library_escape: {
    id: 'truth_library_escape',
    text: `Vocês correm pelos fundos. Saída de emergência.

Mas Rafael é rápido. Alcança Lívia.

Você volta. Pega um livro grosso. Bate nele.

Rafael solta Lívia. Vocês correm.

Na rua, tudo é testemunha.

Rafael não pode fazer nada.

Mas você sabe: isso não acabou.

Ainda não.`,
    isEnding: true,
    endingType: 'mysterious',
    animation: 'fade-out',
    sound: 'suspense'
  },

  truth_library_confront: {
    id: 'truth_library_confront',
    text: `"RAFAEL!", você grita. Toda a biblioteca olha.

Você levanta os diários. "Assassino! Está tudo aqui!"

Rafael para. Percebe todas as pessoas filmando.

Ele tenta falar mas você continua. Mostra as páginas.

Seguranças chegam. Polícia é chamada.

Rafael é preso ali mesmo.

Os diários são prova suficiente.

Você e Lívia se abraçam.

Sobreviventes. Heroínas.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_show_message: {
    id: 'truth_show_message',
    text: `Você mostra a mensagem de Lívia.

"Ela está tentando nos separar", Rafael diz calmamente.

Mas você percebe algo. Nos olhos dele.

Pânico. Só por um segundo. Mas estava lá.

"Ela está certa, não é?", você sussurra.

Rafael não responde. E isso diz tudo.

Você corre. Ele tenta segurar mas você é mais rápida.

Na rua, você liga para Lívia.

"Você tinha razão."

"Eu sei. Vem. Vamos te proteger."`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_silent_leave: {
    id: 'truth_silent_leave',
    text: `Você simplesmente vai embora. Sem explicar.

Bloqueia Rafael. Bloqueia Lívia. Bloqueia todos.

Muda de cidade. De número. De vida.

Anos depois, você lê sobre Rafael. Preso. Serial killer.

Lívia havia sido encontrada morta meses antes.

Você sobreviveu porque desapareceu.

Mas a culpa de não ter salvado Lívia...

Essa nunca passa.`,
    isEnding: true,
    endingType: 'tragic',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_apologize_livia: {
    id: 'truth_apologize_livia',
    text: `Você liga para Lívia. "Você estava certa. Desculpa."

"Eu sei que estava", ela diz gentilmente. "Agora vem. Temos trabalho a fazer."

Juntas, vocês constroem um caso irrefutável.

Documentos. Testemunhas. Provas forenses.

Levam tudo para a polícia federal.

Rafael é preso. Investigação revela mais 5 vítimas.

Você e Lívia escrevem um livro sobre a experiência.

Salvam incontáveis outras mulheres.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_police_evidence: {
    id: 'truth_police_evidence',
    text: `Você vai direto à polícia com suas descobertas.

Delegada examina tudo. Fica pálida.

"Como ninguém viu esse padrão antes?"

"Porque ele é muito bom", você responde.

A delegada monta uma operação. Rafael é preso preventivamente.

Na casa dele, encontram troféus. Das vítimas.

Fotos. Joias. Um diário macabro.

Rafael é condenado. Prisão perpétua.

Você ajudou a tirar um monstro das ruas.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_social_media_confront: {
    id: 'truth_social_media_confront',
    text: `Você vai até Rafael com prints de tudo.

"Explica essas mortes 'coincidentais'."

Rafael olha. Fica em silêncio.

Então sorri. "Você é tão esperta. Eu sempre soube."

"Foi você. Todas elas."

"E você seria a obra-prima. Mas agora..."

Ele avança. Você corre.

Na rua, grita. Pessoas aparecem.

Rafael foge.

Você vai à polícia. Com tudo.

Ele é capturado tentando deixar o país.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_pretend_nothing: {
    id: 'truth_pretend_nothing',
    text: `"Eu... me perdi. Procurando o banheiro", você mente.

Rafael olha para as fotos espalhadas. Para você.

"Claro. O banheiro."

Ele se aproxima. Fecha a porta.

"Sabe qual é o problema com mulheres curiosas?"

Você não responde.

"Elas descobrem coisas que não deveriam."

Sua mão vai para o bolso. Celular.

Mas ele é mais rápido.

"Vamos conversar. Como civilizados."

O tom dele diz que não há saída fácil.`,
    choices: [
      { text: 'Gritar por ajuda', nextNode: 'truth_scream_help' },
      { text: 'Tentar negociar', nextNode: 'truth_negotiate' }
    ],
    animation: 'scale-in',
    sound: 'heartbeat'
  },

  truth_scream_help: {
    id: 'truth_scream_help',
    text: `Você grita o mais alto que pode.

Vizinhos ouvem. Batem na porta.

Rafael hesita. Abre.

"Tudo bem aqui?", perguntam.

"Sim, só uma discussão", Rafael mente.

Mas você corre para fora. "Ele me trancou! Chamem a polícia!"

Vizinhos seguram Rafael. Polícia chega.

Na casa, encontram todas as provas.

Você foi salva pela sua própria voz.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_negotiate: {
    id: 'truth_negotiate',
    text: `"Eu não vou contar nada. Juro."

Rafael ri. "Claro que não. Porque você me ama, né?"

"Sim", você mente. "Por isso vim aqui."

"Mentirosa."

Ele avança. Você pega algo. Um peso de papel.

Bate nele. Ele tropeça.

Você corre. Porta. Rua. Liberdade.

Rafael fica para trás, atordoado.

Você vai direto à polícia.

Com sua descrição, prendem ele em horas.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_bedroom_escape: {
    id: 'truth_bedroom_escape',
    text: `Você corre para a janela. Abre.

Rafael te segura. Vocês lutam.

Você cai. Ele também.

A janela estilhaça.

Vocês caem. Primeiro andar. Vocês sobrevivem.

Mas você se levanta primeiro. Corre.

Rafael fica ferido. Gritando ameaças.

Vizinhos chamam ambulância. E polícia.

No hospital, você conta tudo.

Rafael é preso na maca.

Você ganhou.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_confront_photos: {
    id: 'truth_confront_photos',
    text: `"VOCÊ TEM CÂMERAS NA MINHA CASA?!"

Rafael não nega. "Eu precisava te proteger."

"PROTEGER?! VOCÊ É UM STALKER!"

"EU TE AMO!"

"Você é doente!"

Rafael se desespera. Tenta explicar. Mas cada palavra piora.

Você grava tudo. Quando ele percebe, já é tarde.

Você sai. Vai à polícia.

As gravações, mais as câmeras, são provas suficientes.

Rafael é condenado por invasão de privacidade e stalking.

7 anos de prisão.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_confront_cassandra: {
    id: 'truth_confront_cassandra',
    text: `Você vai até o estúdio de Cassandra. Bate com força.

"Você sabia. O tempo todo."

Cassandra não nega. "Ele é meu irmão."

"Ele mata mulheres!"

"E eu ajudo ele a escolher aquelas que... merecem."

Você grava tudo. Cassandra não percebe.

"Você está tão doente quanto ele."

Na delegacia, você mostra a gravação.

Cassandra e Rafael são presos juntos.

Cúmplices. Serial killers em dupla.

Ambos condenados à prisão perpétua.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_federal_police: {
    id: 'truth_federal_police',
    text: `Você leva tudo para a Polícia Federal.

Múltiplos estados. Múltiplas identidades. Crime organizado.

A PF cria uma força-tarefa.

Rafael é classificado como serial killer ativo.

Duas semanas depois: operação nacional.

Rafael é capturado. Cassandra também.

Mais 12 cúmplices são descobertos.

Uma rede inteira.

Você expôs um esquema que durava décadas.

50+ vítimas identificadas.

Você salvou o futuro.`,
    isEnding: true,
    endingType: 'truth',
    animation: 'fade-out',
    sound: 'ambient'
  },

  truth_be_bait: {
    id: 'truth_be_bait',
    text: `"Eu vou ser a isca", você diz ao detetive.

"É perigoso."

"Eu sei. Mas é a única forma de pegá-lo em flagrante."

Você marca um encontro com Rafael. Local isolado.

Mas a polícia está em toda parte. Câmeras. Drones.

Rafael aparece. Com clorofórmio. Cordas.

Quando ele tenta te atacar, você diz: "AGORA!"

Polícia cerca. Rafael é preso.

Com tentativa de homicídio em flagrante, não há como negar.

Você arriscou sua vida.

E salvou todas as futuras vítimas.`,
    isEnding: true,
    endingType: 'liberation',
    animation: 'fade-out',
    sound: 'ambient'
  }
};
