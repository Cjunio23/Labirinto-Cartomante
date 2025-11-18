# O Labirinto das Palavras Perdidas - Documentação Final

## 📋 Resumo do Projeto

**Título:** O Labirinto das Palavras Perdidas  
**Tipo:** Jogo narrativo interativo (Visual Novel)  
**Tecnologia:** React + TypeScript + Vite + Tailwind CSS  
**Estado:** ✅ Pronto para entrega

---

## 🎮 Características do Jogo

### Narrativa Profunda
- **3 caminhos principais:** Razão, Destino e Verdade
- **Mais de 150 nós narrativos** com múltiplas ramificações
- **Mais de 50 finais diferentes** incluindo:
  - Finais trágicos
  - Finais de libertação
  - Finais misteriosos
  - Finais de verdade revelada

### Recursos Técnicos Implementados
✅ Sistema de efeitos sonoros (Web Audio API)
✅ Animações suaves com Tailwind
✅ Efeito de digitação (typing effect)
✅ Troca dinâmica de backgrounds por cena
✅ Sistema de histórico de escolhas
✅ Telas de início e créditos
✅ Design responsivo
✅ Interface dark mode temática

### Efeitos Sonoros
- Notificação
- Suspense
- Batidas cardíacas
- Jumpscare
- Ambiente
- Som de escolha

### Imagens e Assets
17 backgrounds únicos:
- scene-rain.jpg
- scene-tarot.jpg
- scene-house.jpg
- scene-bedroom.jpg
- scene-dinner.jpg
- scene-cafe.jpg
- scene-mirror.jpg
- scene-street.jpg
- scene-phone.jpg
- scene-warehouse.jpg
- scene-hospital.jpg
- scene-forest.jpg
- scene-cemetery.jpg
- scene-basement.jpg
- scene-parking.jpg
- scene-library.jpg
- scene-subway.jpg

---

## 📁 Estrutura do Projeto

```
src/
├── assets/                    # 17 imagens de background
├── components/
│   ├── Game.tsx              # Componente principal do jogo
│   ├── StartScreen.tsx       # Tela inicial
│   ├── CreditsScreen.tsx     # Tela de créditos
│   ├── NavLink.tsx           # Navegação
│   └── ui/                   # Componentes Shadcn
├── data/
│   └── storyNodes.ts         # Toda a narrativa (2400+ linhas)
├── types/
│   └── game.ts               # Tipos TypeScript
├── utils/
│   └── soundEffects.ts       # Sistema de som
├── pages/
│   ├── Index.tsx             # Página principal
│   └── NotFound.tsx          # Página 404
├── index.css                 # Estilos globais e design system
└── main.tsx                  # Entry point
```

---

## 🎯 Funcionalidades Principais

### 1. Sistema de Narrativa
- Árvore de decisões complexa
- Choices que levam a diferentes outcomes
- Sistema de tracking de histórico
- Verificação de nós faltantes (safety check)

### 2. Interface do Usuário
- Card de história com gradiente dinâmico
- Botões de escolha animados
- Efeito de digitação para imersão
- Transições suaves entre cenas
- Mensagens de final personalizadas

### 3. Sistema Visual
- Background muda baseado no nó atual
- Cores específicas para cada tipo de final
- Animações: fade-in, scale-in, fade-out
- Design responsivo para mobile e desktop

---

## 🔍 Caminhos da História

### Caminho da Razão (reason)
Focado em lógica e investigação racional. Inclui:
- Investigação da casa de Rafael
- Contratação de detetive
- Verificação de histórico
- Múltiplos finais baseados em escolhas racionais

### Caminho do Destino (destiny)  
Focado em elementos místicos e sobrenaturais. Inclui:
- Consulta com Cassandra (taróloga)
- Espelho misterioso
- Lívia (personagem sobrenatural)
- Rituais e confrontos místicos

### Caminho da Verdade (truth)
Focado em descobrir a verdade completa. Inclui:
- Investigação profunda de Rafael
- Descoberta de ex-namoradas mortas
- Aliança com Lívia
- Confrontos e revelações
- Sistema complexo de provas e evidências

---

## 🎨 Design System

### Cores Temáticas
- **Background:** Preto/Cinza escuro
- **Primary:** Tons de vermelho
- **Text:** Cinza claro/Branco
- **Accent:** Vermelho vibrante para highlights

### Tipografia
- Fonte principal: System fonts otimizadas
- Tamanhos responsivos
- Boa legibilidade em todos os dispositivos

### Animações
- `animate-fade-in`: Entrada suave
- `animate-scale-in`: Escala + fade
- `animate-fade-out`: Saída suave
- Transições CSS para hover states

---

## ⚙️ Configuração e Execução Local

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clonar o repositório
git clone <SEU_REPOSITORIO>

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Scripts Disponíveis
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run lint` - Verificar código
- `npm run preview` - Preview do build

---

## 🐛 Correções Implementadas

### Verificação de Segurança
Adicionado safety check no componente Game para evitar crashes quando um nó não existe:
```typescript
if (!currentNode) {
  console.error(`Story node not found: ${gameState.currentNode}`);
  return <ErrorScreen />;
}
```

### Performance
- Otimização de re-renders
- Lazy loading quando possível
- Memoização de funções pesadas

---

## 📊 Estatísticas do Projeto

- **Total de nós:** 150+
- **Total de finais:** 50+
- **Linhas de código narrativo:** 2400+
- **Componentes:** 20+
- **Assets:** 17 backgrounds + 2 screens
- **Tipos de som:** 6
- **Animações:** 4 principais

---

## 🚀 Deploy

### Lovable Cloud
O projeto já está deployado automaticamente via Lovable.

### Deploy Manual (Vercel/Netlify)
```bash
npm run build
# Fazer upload da pasta dist/
```

---

## 📝 Notas Finais

### O que funciona perfeitamente ✅
- Todos os 3 caminhos principais
- Sistema de som
- Animações
- Responsividade
- Typing effect
- Troca de backgrounds
- Sistema de finais

### Melhorias Futuras (Opcional)
- Sistema de save/load
- Galeria de finais desbloqueados
- Menu de configurações (volume, velocidade)
- Sistema de conquistas
- Modo de replay

---

## 👥 Créditos

**Inspiração:** Jogos narrativos clássicos  
**Desenvolvimento:** Projeto acadêmico  
**Tecnologias:** React, TypeScript, Vite, Tailwind CSS  
**Universidade:** [Sua Universidade]  
**Disciplina:** [Sua Disciplina]  
**Ano:** 2025

---

## 📞 Suporte

Para dúvidas sobre o código:
1. Verifique a documentação inline nos arquivos
2. Consulte o README.md principal
3. Revise os comentários no código

---

**Última atualização:** 18/11/2025  
**Status:** ✅ Pronto para apresentação  
**Versão:** 1.0.0

---

## 🎓 Como Apresentar

### Pontos Fortes para Destacar
1. **Complexidade narrativa** - Mais de 150 nós e 50 finais
2. **Tecnologias modernas** - React, TypeScript, Vite
3. **UX/UI polida** - Animações, sons, efeitos visuais
4. **Código bem estruturado** - Componentes organizados, tipos bem definidos
5. **Responsivo** - Funciona em mobile e desktop

### Demo Sugerida
1. Mostrar tela inicial
2. Percorrer rapidamente um caminho
3. Destacar os efeitos sonoros e visuais
4. Mostrar diferentes tipos de finais
5. Explicar a estrutura de dados (storyNodes)

**Boa sorte na sua apresentação! 🎉**
