const analizar = require('./Minimax.js');
PORT = process.env.PORT || 4000

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(analizar.analizar(req.query.turno, req.query.estado));
})

app.listen(PORT, ()=>{
    console.log(`Escuchando puerto: ${PORT}`)
})
