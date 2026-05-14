# 🏆 Copa do Mundo 2026 - Site do Evento

Site oficial do evento da Copa do Mundo FIFA 2026 (Canadá • México • Estados Unidos), desenvolvido em **Node.js + Express + EJS** com design **Liquid Glass**.

Desenvolvido por [CauaMeireles](https://github.com/CauaMeireles)

## 📦 Tecnologias

- **Node.js** (runtime)
- **Express.js** (servidor web)
- **EJS** (template engine)
- **CSS puro** com efeito Liquid Glass

## 🚀 Como rodar localmente

### 1. Instalar Node.js
Baixe em [nodejs.org](https://nodejs.org) (versão 18 ou superior)

### 2. Instalar as dependências
Dentro da pasta do projeto, abra o terminal e execute:
```bash
npm install
```

### 3. Iniciar o servidor
```bash
npm start
```

### 4. Acessar
Abra no navegador: **http://localhost:3000**

## ☁️ Como publicar (PaaS)

### Opção 1: Render (Recomendado pra Node.js)

1. Crie uma conta em [render.com](https://render.com) com seu GitHub
2. Suba o projeto pro GitHub
3. No Render, clique em **"New +" → "Web Service"**
4. Conecte o repositório
5. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
6. Clique em **"Create Web Service"**
7. Aguarde uns 2-3 minutos. Pronto, sua URL pública aparecerá!

### Opção 2: Vercel

1. Suba o projeto pro GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. A Vercel detecta o `vercel.json` automaticamente
4. Clique em **"Deploy"**

## 📋 Funcionalidades

- ✅ Hero com data e países sede
- ✅ Estatísticas do evento (48 seleções, 104 jogos, 16 estádios, 16 cidades)
- ✅ Galeria com 6 estádios principais e suas fotos
- ✅ Seção de informações para o torcedor
- ✅ Link integrado para o site das seleções participantes
- ✅ Design Liquid Glass com animações suaves
- ✅ 100% responsivo (mobile + desktop)
- ✅ Animações de scroll e hover

## 🔗 Trocar URL do site de seleções

Para apontar pro seu site real das seleções, edite o arquivo **`app.js`** na linha:

```javascript
const URL_SELECOES = 'https://copa-do-mundo26-times.vercel.app';
```

Troque pela URL real do seu projeto Vercel.

## 📁 Estrutura do projeto

```
copa2026-evento/
├── app.js                  # Servidor Express
├── package.json            # Dependências
├── vercel.json             # Config Vercel
├── README.md
├── views/
│   └── index.ejs           # Template principal
└── public/
    └── css/
        └── style.css       # Estilo Liquid Glass
```
