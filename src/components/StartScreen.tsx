import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import startScreenBg from '@/assets/start-screen.jpg';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div 
      className="min-h-screen text-foreground flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${startScreenBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <Card className="max-w-2xl w-full p-12 bg-black/80 border-red-900/30 backdrop-blur-sm shadow-2xl shadow-red-900/20 relative z-10 animate-fade-in">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold mb-4 text-red-100 animate-pulse drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              O Labirinto das
            </h1>
            <h1 className="text-6xl font-bold mb-6 text-red-200 animate-pulse drop-shadow-[0_0_30px_rgba(220,38,38,0.4)]">
              Palavras Perdidas
            </h1>
          </div>

          <div className="py-6 border-y border-red-900/30">
            <p className="text-gray-400 text-sm italic mb-2">Inspirado em</p>
            <p className="text-xl text-red-200 font-semibold">A Cartomante</p>
            <p className="text-gray-400 text-sm">de Machado de Assis</p>
          </div>

          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <p className="opacity-80">
              Cada escolha tem consequências.
            </p>
            <p className="opacity-80">
              Cada palavra pode ser a última.
            </p>
            <p className="opacity-80 text-red-300">
              Nem todos os caminhos levam à verdade.
            </p>
          </div>

          <Button
            onClick={onStart}
            className="mt-8 bg-gradient-to-r from-red-900 to-red-950 hover:from-red-800 hover:to-red-900 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-red-900/50 transition-all hover:scale-105 border border-red-800/50"
          >
            Iniciar História
          </Button>

          <p className="text-xs text-gray-600 mt-6">
            Use fones de ouvido para melhor experiência
          </p>
        </div>
      </Card>
    </div>
  );
};

export default StartScreen;
