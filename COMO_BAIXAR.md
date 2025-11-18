# 📦 Como Baixar o Projeto para Rodar Localmente

## Método 1: Via GitHub (Recomendado) ⭐

### Passo 1: Conectar ao GitHub
1. No Lovable, clique no botão **GitHub** no canto superior direito
2. Autorize a conexão com sua conta GitHub
3. Crie um novo repositório ou conecte a um existente
4. O Lovable vai automaticamente fazer push do código

### Passo 2: Clonar o Repositório
```bash
# Clone o repositório que você criou
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Entre na pasta
cd SEU_REPOSITORIO

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

---

## Método 2: Download Direto do Lovable

### Passo 1: Ativar Dev Mode
1. No Lovable, ative o **Dev Mode** (toggle no canto superior esquerdo)
2. Você verá a estrutura de arquivos do projeto

### Passo 2: Baixar Arquivos Manualmente
Você precisará copiar manualmente os seguintes arquivos/pastas:

#### Arquivos Essenciais:
- `package.json`
- `vite.config.ts`
- `tailwind.config.ts`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `index.html`
- `postcss.config.js`
- `.gitignore`

#### Pastas Essenciais:
- `src/` (toda a pasta com todos os subdiretórios)
- `public/`

### Passo 3: Recriar Estrutura Localmente
```bash
# Crie uma pasta para o projeto
mkdir labirinto-palavras-perdidas
cd labirinto-palavras-perdidas

# Copie todos os arquivos baixados para esta pasta
# Mantenha a mesma estrutura de pastas

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

---

## Método 3: Via Lovable Export (Mais Fácil)

### Usando o Histórico
1. No Lovable, clique em **Settings** (ícone de engrenagem)
2. Vá para a seção **Export**
3. Clique em **Download Project**
4. Será baixado um arquivo ZIP com todo o código

### Após o Download:
```bash
# Descompacte o arquivo ZIP
unzip projeto.zip

# Entre na pasta
cd projeto

# Instale as dependências
npm install

# Execute
npm run dev
```

---

## 📋 Checklist Pós-Download

Após baixar, verifique se você tem:

### Estrutura de Arquivos
```
projeto/
├── node_modules/          (será criado após npm install)
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── placeholder.svg
├── src/
│   ├── assets/           (17 imagens)
│   ├── components/       (Game.tsx, etc)
│   ├── data/            (storyNodes.ts)
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

### Dependências Instaladas
```bash
# Verifique se o node_modules foi criado
ls node_modules/

# Deve ter mais de 1000 pastas
```

### Teste de Funcionamento
```bash
# Execute o projeto
npm run dev

# Abra no navegador
# http://localhost:5173

# Você deve ver a tela inicial do jogo
```

---

## 🐛 Problemas Comuns

### Erro: "Cannot find module"
```bash
# Solução: Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port 5173 already in use"
```bash
# Solução: Use outra porta
npm run dev -- --port 3000
```

### Erro ao importar imagens
```bash
# Verifique se a pasta src/assets/ tem todas as 17 imagens
ls src/assets/
```

### Build falha
```bash
# Limpe o cache e tente novamente
npm run build -- --force
```

---

## 🚀 Build para Produção

### Gerar Build
```bash
# Gera os arquivos otimizados na pasta dist/
npm run build
```

### Testar Build Localmente
```bash
# Preview da versão de produção
npm run preview
```

### Deploy da Build
A pasta `dist/` gerada pode ser enviada para:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- Qualquer servidor web estático

---

## 💡 Dicas Importantes

### 1. Node.js
Certifique-se de ter Node.js 18+ instalado:
```bash
node --version
# Deve mostrar v18.x.x ou superior
```

### 2. Git (Opcional mas recomendado)
```bash
git --version
# Para usar o método 1
```

### 3. Editor de Código
Recomendado: VS Code com as extensões:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin

### 4. Navegador
Use navegadores modernos:
- Chrome/Edge (recomendado)
- Firefox
- Safari

---

## 📱 Testando em Dispositivos Móveis

### Na Rede Local
```bash
# Execute o projeto
npm run dev

# Pegue o endereço IP local
# Windows: ipconfig
# Mac/Linux: ifconfig

# Acesse do celular
http://SEU_IP:5173
```

### Exemplo
Se seu IP local é `192.168.1.100`:
```
http://192.168.1.100:5173
```

---

## 📞 Suporte Técnico

### Se o download não funcionar:
1. Verifique sua conexão com internet
2. Tente usar outro método de download
3. Certifique-se de ter permissões de escrita na pasta

### Se a instalação falhar:
1. Verifique a versão do Node.js
2. Limpe o cache do npm: `npm cache clean --force`
3. Tente usar `yarn` ao invés de `npm`

### Se o projeto não executar:
1. Verifique os logs de erro no terminal
2. Confirme que todas as dependências foram instaladas
3. Verifique se não há conflitos de porta

---

## ✅ Verificação Final

Antes de apresentar, teste:

- [ ] Projeto abre sem erros
- [ ] Tela inicial carrega
- [ ] Consegue fazer escolhas
- [ ] Sons funcionam
- [ ] Imagens carregam
- [ ] Animações rodam suavemente
- [ ] Funciona no mobile (se necessário)
- [ ] Build de produção funciona

---

**Última atualização:** 18/11/2025  
**Versão do guia:** 1.0.0

Se tiver dúvidas, consulte a documentação oficial:
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Lovable Docs](https://docs.lovable.dev/)

**Boa sorte! 🎉**
