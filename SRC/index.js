const express = require('express');
const app = express();
const pool = require('./database');

app.use(express.json());

const PORT = process.env.PORT || 3000

//isso é uma rota /helloworld
app.get('/helloworld', async (request, response) => {

    response.send('HEELO WORLD MINHA PRIMEIRA API');

});

app.post('/addCliente', async (request, response) => {

    try {
        
        const {nome, cpf, idade, id_tipo_cliente} = request.body

        console.log (nome)
        console.log (cpf)
        console.log (idade)
        console.log (id_tipo_cliente)

        const result = await pool.query('INSERT INTO cliente (nome, cpf, idade, id_tipo_cliente) values ($1, $2, $3, $4)', 
                                                            [nome, cpf, idade, id_tipo_cliente]);

        response.send('Cliente cadastrado com sucesso!'); 

    }catch(err){

        console.log(err)

        response.status(500).send(err)
    }

});


app.get('/listCliente', async (request, response) => {

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


//http://localhost:3000/helloworld

