const { Router } = require('express');
const routes = Router();
const axios = require('axios');

routes.get('/alunos/todos', (req, res) => {
    const alunos = [
        {
            "nome": "Saulo Joab",
            "idade": 21,
            "cadeiras": [
                {
                    "nome": 'Web 2'
                },
                {
                    "nome": "Banco de Dados II"
                }
            ]
        },
        {
            "nome": "Thom Yorke",
            "idade": 33,
            "cadeiras": [
                {
                    "nome": 'Web 2'
                },
                {
                    "nome": "Algoritmos de Programação II"
                }
            ]
        },
    ]

    res.status(200).json(alunos)
});

routes.get('/moeda/:valor_real', async (req, res) => {
    const data = await axios.default.get('https://economia.awesomeapi.com.br/json/last/USD')
    const dollarData = data.data;

    const converted = req.params.valor_real * dollarData.USDBRL.bid;

    res.status(200).json({ converted_value: converted })
})

module.exports = routes;