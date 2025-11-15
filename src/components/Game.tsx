import { useState, useEffect } from 'react';
import { storyNodes } from '@/data/storyNodes';
import { GameState } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { soundEffects } from '@/utils/soundEffects';
import StartScreen from './StartScreen';
import CreditsScreen from './CreditsScreen';
import gameBackground from '@/assets/game-background.jpg';
import sceneRain from '@/assets/scene-rain.jpg';
import sceneTarot from '@/assets/scene-tarot.jpg';
import sceneHouse from '@/assets/scene-house.jpg';
import sceneBedroom from '@/assets/scene-bedroom.jpg';
import sceneDinner from '@/assets/scene-dinner.jpg';
import sceneCafe from '@/assets/scene-cafe.jpg';
import sceneMirror from '@/assets/scene-mirror.jpg';
import sceneStreet from '@/assets/scene-street.jpg';
import scenePhone from '@/assets/scene-phone.jpg';

const getSceneImage = (nodeId: string): string => {
  if (nodeId === 'start') return sceneBedroom;
  if (nodeId.includes('reason1') && !nodeId.includes('reason2') && !nodeId.includes('reason3')) return sceneDinner;
  if (nodeId.includes('reason2') || nodeId.includes('reason3')) return sceneRain;
  if (nodeId.includes('destiny4') || nodeId.includes('destiny5') || nodeId.includes('destiny6')) return sceneMirror;
  if (nodeId.includes('destiny')) return sceneTarot;
  if (nodeId.includes('truth2')) return sceneCafe;
  if (nodeId.includes('truth3') || nodeId.includes('truth7') || nodeId.includes('truth8')) return sceneHouse;
  if (nodeId.includes('truth6')) return sceneStreet;
  if (nodeId.includes('truth4')) return scenePhone;
  return gameBackground;
};

type GameScreen = 'start' | 'playing' | 'credits';

const Game = () => {
  const [screen, setScreen] = useState<GameScreen>('start');
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
    if (screen !== 'playing') return;

    setIsTyping(true);
    setShowChoices(false);
    setDisplayedText('');

    // Play sound effect based on node
    if (currentNode.sound === 'notification') {
      soundEffects.playNotification();
    } else if (currentNode.sound === 'suspense') {
      soundEffects.playSuspense();
    } else if (currentNode.sound === 'jumpscare') {
      setTimeout(() => soundEffects.playJumpscare(), 1000);
    } else if (currentNode.sound === 'heartbeat') {
      soundEffects.playHeartbeat();
    } else {
      soundEffects.playAmbient();
    }

    let index = 0;
    const text = currentNode.text;
    const typingSpeed = 25;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        if (!currentNode.isEnding) {
          setShowChoices(true);
        }
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [currentNode, screen]);

  const handleChoice = (nextNode: string) => {
    soundEffects.playChoice();
    setGameState({
      ...gameState,
      currentNode: nextNode,
      history: [...gameState.history, gameState.currentNode]
    });
  };

  const handleStart = () => {
    soundEffects.playChoice();
    setScreen('playing');
  };

  const restartGame = () => {
    soundEffects.playChoice();
    setGameState({
      currentNode: 'start',
      history: [],
      startTime: Date.now()
    });
    setScreen('start');
  };

  const goToCredits = () => {
    soundEffects.playChoice();
    setScreen('credits');
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

  if (screen === 'start') {
    return <StartScreen onStart={handleStart} />;
  }

  if (screen === 'credits') {
    return <CreditsScreen onRestart={restartGame} />;
  }

  const backgroundImage = getSceneImage(currentNode.id);

  return (
    <div 
      className="min-h-screen text-foreground p-4 overflow-hidden relative transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header - sem tempo */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold mb-2 text-red-100 drop-shadow-[0_0_30px_rgba(220,38,38,0.2)]">
            O Labirinto das Palavras Perdidas
          </h1>
        </div>

        {/* Story Card */}
        <Card className={`p-8 mb-6 bg-gradient-to-br ${currentNode.isEnding ? getEndingMessage().color : 'from-black/90 to-slate-900/80'} border-red-900/30 backdrop-blur-sm shadow-2xl shadow-red-900/20 animate-scale-in`}>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed whitespace-pre-line font-light text-gray-100">
              {displayedText}
              {isTyping && <span className="animate-pulse text-red-400">▊</span>}
            </p>
          </div>

          {currentNode.isEnding && !isTyping && (
            <div className="mt-8 text-center animate-fade-in border-t border-red-900/30 pt-6">
              <h2 className="text-3xl font-bold mb-2 text-red-300">{getEndingMessage().title}</h2>
              <p className="text-muted-foreground mb-6 italic">{getEndingMessage().message}</p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={restartGame}
                  className="bg-gradient-to-r from-red-900 to-red-950 hover:from-red-800 hover:to-red-900 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-red-900/50 transition-all hover:scale-105"
                >
                  🔄 Jogar Novamente
                </Button>
                <Button
                  onClick={goToCredits}
                  className="bg-gradient-to-r from-purple-900 to-purple-950 hover:from-purple-800 hover:to-purple-900 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-purple-900/50 transition-all hover:scale-105"
                >
                  📜 Créditos
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Choices - SEM ÍCONES */}
        {!currentNode.isEnding && showChoices && currentNode.choices && (
          <div className="space-y-4 animate-fade-in">
            {currentNode.choices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => handleChoice(choice.nextNode)}
                className="w-full p-6 text-left bg-gradient-to-r from-slate-900/50 to-slate-800/50 hover:from-red-900/50 hover:to-red-950/50 border border-red-900/30 hover:border-red-700 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-red-900/30 text-base group"
                variant="outline"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-gray-100 group-hover:text-red-200 transition-colors">
                  {choice.text}
                </span>
              </Button>
            ))}
          </div>
        )}

        {/* Footer hint */}
        {!currentNode.isEnding && (
          <div className="text-center mt-8 text-red-300/50 text-sm animate-pulse">
            Cada escolha tem consequências...
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
