const express = require('express');
const app = express();

const index = require('./routers/index');
app.use('/', index);

// Rotas /veiculos
const veiculoRouter = require('./routers/veiculoRouter');
app.use('/veiculos', veiculoRouter);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.")
});