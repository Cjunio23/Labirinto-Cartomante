import { useState, useEffect } from 'react';
import { storyNodes } from '@/data/storyNodes';
import { GameState } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Game = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentNode: 'start',
    history: [],
    startTime: Date.now()
  });

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showChoices, setShowChoices] = useState(false);

  const currentNode = storyNodes[gameState.currentNode];

  useEffect(() => {
    setIsTyping(true);
    setShowChoices(false);
    setDisplayedText('');

    let index = 0;
    const text = currentNode.text;
    const typingSpeed = 30;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        setShowChoices(true);
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [currentNode]);

  const handleChoice = (nextNode: string) => {
    setGameState({
      ...gameState,
      currentNode: nextNode,
      history: [...gameState.history, gameState.currentNode]
    });
  };

  const restartGame = () => {
    setGameState({
      currentNode: 'start',
      history: [],
      startTime: Date.now()
    });
  };

  const getEndingMessage = () => {
    switch (currentNode.endingType) {
      case 'tragic':
        return {
          title: '💀 Final Trágico',
          message: 'Suas escolhas levaram a um destino sombrio. Nem sempre podemos escapar das consequências.',
          color: 'from-red-950 to-black'
        };
      case 'mysterious':
        return {
          title: '🌙 Final Misterioso',
          message: 'A verdade permanece oculta nas sombras. Algumas perguntas nunca terão resposta.',
          color: 'from-purple-950 to-black'
        };
      case 'truth':
        return {
          title: '🔍 Final da Verdade',
          message: 'Você descobriu fragmentos da verdade. Mas será que é toda a verdade?',
          color: 'from-blue-950 to-black'
        };
      case 'liberation':
        return {
          title: '🌅 Final Libertador',
          message: 'Você se libertou das correntes que te prendiam. O futuro é seu.',
          color: 'from-emerald-950 to-black'
        };
      default:
        return {
          title: 'Fim',
          message: 'Sua jornada terminou.',
          color: 'from-gray-950 to-black'
        };
    }
  };

  const elapsedTime = Math.floor((Date.now() - gameState.startTime) / 1000);
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-foreground p-4 overflow-hidden relative">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse top-0 -left-48" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse bottom-0 -right-48 animation-delay-2000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
            O Labirinto das Palavras Perdidas
          </h1>
          <p className="text-muted-foreground text-sm">
            Tempo: {minutes}:{seconds.toString().padStart(2, '0')}
          </p>
        </div>

        {/* Story Card */}
        <Card className={`p-8 mb-6 bg-gradient-to-br ${currentNode.isEnding ? getEndingMessage().color : 'from-slate-900/80 to-slate-800/80'} border-purple-500/30 backdrop-blur-sm shadow-2xl shadow-purple-500/20 animate-scale-in`}>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed whitespace-pre-line font-light text-gray-100">
              {displayedText}
              {isTyping && <span className="animate-pulse">▊</span>}
            </p>
          </div>

          {currentNode.isEnding && !isTyping && (
            <div className="mt-8 text-center animate-fade-in border-t border-purple-500/30 pt-6">
              <h2 className="text-3xl font-bold mb-2 text-purple-300">{getEndingMessage().title}</h2>
              <p className="text-muted-foreground mb-4 italic">{getEndingMessage().message}</p>
              <p className="text-sm text-gray-400 mb-6">
                Você jogou por {minutes} minutos e {seconds} segundos
              </p>
              <Button
                onClick={restartGame}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                🔄 Jogar Novamente
              </Button>
            </div>
          )}
        </Card>

        {/* Choices */}
        {!currentNode.isEnding && showChoices && currentNode.choices && (
          <div className="space-y-4 animate-fade-in">
            {currentNode.choices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => handleChoice(choice.nextNode)}
                className="w-full p-6 text-left bg-gradient-to-r from-slate-800/50 to-slate-700/50 hover:from-purple-900/50 hover:to-pink-900/50 border border-purple-500/30 hover:border-purple-400 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30 text-base group"
                variant="outline"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-2xl mr-3 group-hover:scale-125 transition-transform inline-block">
                  {choice.icon || '→'}
                </span>
                <span className="text-gray-100 group-hover:text-purple-200 transition-colors">
                  {choice.text}
                </span>
              </Button>
            ))}
          </div>
        )}

        {/* Footer hint */}
        {!currentNode.isEnding && (
          <div className="text-center mt-8 text-muted-foreground text-sm animate-pulse">
            Cada escolha molda seu destino...
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
