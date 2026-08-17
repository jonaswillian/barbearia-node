const mysql = require("mysql2/promise")
async function conectar(){
    const conexao = await mysql.createConnection({
        host: 'localhost',
        user:'root',
        password: '',
        database: 'barbinha'
    });

    return conexao;
}

    async function mostrar(){
        const [resultado] = await conectar().execute("select * from clientes");
        console.log('Lista de Clientes:', resultado);
    }

    async function cadastrar(){
        const nome = 'Nabucodonosor';
        const email = 'nabuco@gmail.com';

        const [resultado] = 
        await conectar().execute("insert into clientes (nome, email) values (?, ?)", [nome, email]);
        console.log('Cliente inserido com sucesso!');
    }

    mostrar();