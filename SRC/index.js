const express = require('express');
const app = express();
const pool = require('./database');

const PORT = process.env.PORT || 3000

//isso é uma rota /helloworld
app.get('/helloworld', async (request, response) => {

    response.send('HEELO WORLD MINHA PRIMEIRA API');

});

app.get('/cliente', async (request, response) => {

    try {
        
        const result = await pool.query('SELECT * FROM cliente');

        response.send(result.rows); 

    }catch(err){
        response.status(500).send(err)
    }

});

app.listen(PORT, ()=>{

    console.log("Servidor está rodando na porta " + 3000);

});


//https://localhost:3000/helloworld

