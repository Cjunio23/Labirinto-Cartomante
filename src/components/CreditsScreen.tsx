import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface CreditsScreenProps {
  onRestart: () => void;
}

const CreditsScreen = ({ onRestart }: CreditsScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black text-foreground flex items-center justify-center p-4 relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-900/5 rounded-full blur-3xl animate-pulse top-1/4 left-1/3" />
      </div>

      <Card className="max-w-2xl w-full p-12 bg-black/90 border-purple-900/30 backdrop-blur-sm shadow-2xl shadow-purple-900/20 relative z-10 animate-fade-in">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-purple-200 mb-8 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            Obrigado por jogar.
          </h2>

          <div className="space-y-6 py-8 border-y border-purple-900/30">
            <div className="space-y-2">
              <p className="text-gray-400 text-sm italic">Inspirado em</p>
              <p className="text-xl text-purple-200 font-semibold">A Cartomante, de Machado de Assis</p>
            </div>

            <div className="space-y-3 pt-6">
              <p className="text-gray-300 font-semibold">Projeto desenvolvido por:</p>
              <div className="space-y-1 text-purple-100">
                <p>Ana Luísa Reis</p>
                <p>Arthur Soares</p>
                <p>Custódio Junio</p>
                <p>Laura Campos</p>
                <p>Luiz Carlos</p>
              </div>
            </div>

            <div className="space-y-2 pt-6">
              <p className="text-gray-400 text-sm">Disciplina: Oficina de Gêneros Hipertextuais</p>
              <p className="text-gray-400 text-sm">Professora: Glaura Cardoso Vale</p>
              <p className="text-gray-300 font-semibold">CEFET-MG — 2025</p>
            </div>
          </div>

          <Button
            onClick={onRestart}
            className="mt-8 bg-gradient-to-r from-purple-900 to-purple-950 hover:from-purple-800 hover:to-purple-900 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-purple-900/50 transition-all hover:scale-105 border border-purple-800/50"
          >
            Jogar Novamente
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CreditsScreen;
