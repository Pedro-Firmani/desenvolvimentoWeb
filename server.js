const express = require('express');
const app = express();
const port = 3000;
const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
const axios = require('axios');
const {default: axios} = require('axios');

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/rota', (req, res) => {
    res.send('Minha primeira rota');
});

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep;
    if(!cepRegex.test(cep)){
        res.status(400).send('Cep invalido. Formato: XXXXX-XXX')
    }
    try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao fazer requisição:', error)
        res.status(500).send('Erro ao consultar o CEP')
    }
});