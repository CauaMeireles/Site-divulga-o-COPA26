/**
 * Copa do Mundo 2026 - Site do Evento
 * Node.js + Express + EJS
 * 
 * Para rodar localmente:
 *   npm install
 *   npm start
 * 
 * Acesse: http://localhost:3000
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (CSS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// ============================================================
// LINK PARA O SITE DE CADASTRO DAS SELEÇÕES
// Troque pela URL real do seu site da Vercel
// ============================================================
const URL_SELECOES = 'https://copa-do-mundo26-times.vercel.app';

// Dados do evento
const evento = {
    nome: 'Copa do Mundo FIFA 2026',
    edicao: '23ª edição',
    dataInicio: '11 de junho de 2026',
    dataFim: '19 de julho de 2026',
    paisesSedes: ['Canadá', 'México', 'Estados Unidos'],
    selecoes: 48,
    jogos: 104,
    estadios: 16,
    cidades: 16,
    mascote: 'Maple, Zayu e Clutch',
    urlSelecoes: URL_SELECOES
};

// Estádios principais com imagens
const estadios = [
    {
        nome: 'MetLife Stadium',
        cidade: 'East Rutherford, Nova Jersey',
        pais: '🇺🇸 Estados Unidos',
        capacidade: '82.500',
        destaque: 'Final da Copa',
        imagem: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFCFBFnkRgShZ3qGcL9llLo_G2Vg_qnw2ydFXh6Gia9mqm5YY1D6BBhIIMjiMBVg8pqAhIBbvB_Vrei6FVL4tUEv4B1PsJvHtuTH_SA9LdMKgFCFjZqZHMeWEFfI3CR9cLHlvn2=s680-w680-h510-rw'
    },
    {
        nome: 'Estádio Azteca',
        cidade: 'Cidade do México',
        pais: '🇲🇽 México',
        capacidade: '87.000',
        destaque: 'Jogo de abertura',
        imagem: 'https://classic.exame.com/wp-content/uploads/2026/03/GettyImages-2268027208.jpg'
    },
    {
        nome: 'SoFi Stadium',
        cidade: 'Los Angeles',
        pais: '🇺🇸 Estados Unidos',
        capacidade: '70.000',
        destaque: 'Jogos eliminatórios',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/SoFi_Stadium_interior_2021.jpg'
    },
    {
        nome: 'BMO Field',
        cidade: 'Toronto',
        pais: '🇨🇦 Canadá',
        capacidade: '45.000',
        destaque: 'Jogos do grupo',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Toronto_BMO_Field_in_2024.jpg'
    },
    {
        nome: 'AT&T Stadium',
        cidade: 'Arlington, Texas',
        pais: '🇺🇸 Estados Unidos',
        capacidade: '80.000',
        destaque: 'Semifinais',
        imagem: 'https://stadiumtechreport.com/wp-content/uploads/2022/01/shutterstock_editorial_9238279b-scaled-2-1.jpg'
    },
    {
        nome: 'BC Place',
        cidade: 'Vancouver',
        pais: '🇨🇦 Canadá',
        capacidade: '54.500',
        destaque: 'Jogos do grupo',
        imagem: 'https://assets.goal.com/images/v3/getty-2203463797/crop/MM5DIMJZGI5DEMZVHA5G433XMU5DQORWHE======/GettyImages-2203463797.jpg?auto=webp&format=pjpg&width=3840&quality=60'
    }
];

// Informações importantes do evento
const informacoes = [
    {
        icone: '🎟️',
        titulo: 'Ingressos',
        descricao: 'Vendas oficiais através do site da FIFA. Atenção a sites não autorizados.'
    },
    {
        icone: '✈️',
        titulo: 'Como Chegar',
        descricao: 'Voos diretos para os 3 países sede. Confira documentação e vistos necessários.'
    },
    {
        icone: '🏨',
        titulo: 'Hospedagem',
        descricao: 'Reserve com antecedência. Pacotes especiais disponíveis nas cidades-sede.'
    },
    {
        icone: '⚽',
        titulo: 'Programação',
        descricao: '104 jogos espalhados por 39 dias. Confira o calendário completo.'
    }
];

// Rota principal
app.get('/', (req, res) => {
    res.render('index', { evento, estadios, informacoes });
});

// Rota de redirect para o site de seleções
app.get('/selecoes', (req, res) => {
    res.redirect(URL_SELECOES);
});

// Tratamento de erro 404
app.use((req, res) => {
    res.status(404).render('index', { evento, estadios, informacoes });
});

app.listen(PORT, () => {
    console.log(`⚽ Servidor rodando em http://localhost:${PORT}`);
    console.log(`🏆 Copa do Mundo 2026 - Site do Evento`);
});
