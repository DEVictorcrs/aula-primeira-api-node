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

app.get('/endereco', async (request, response) => {

    try {
        
        const result = await pool.query('SELECT * FROM endereco');

        response.send(result.rows); 

    }catch(err){
        response.status(500).send(err)
    }

});


app.listen(PORT, ()=>{

    console.log("Servidor está rodando na porta " + 3000);

});

app.get('/detalhecliente', async (request,response)=>{

    const result = await pool.query('SELECT * FROM cliente cl join endereco dc on (id_cliente = id_tipo_cliente)');

    response.send(result.rows);
})

//http://localhost:3000/helloworld

