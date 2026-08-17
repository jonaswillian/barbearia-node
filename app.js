const { MongoClient } = require('mongodb');
const url = "mongodb+srv://aurelianojw:quest1806@jonas.efiwr89.mongodb.net";

const exec = new MongoClient(url);
const banco = "barbearia";

async function crud(){
    await exec.connect();
    const bd = exec.db(banco) // carrega o banco
    const tabela = bd.collection("clientes");

    //INSERIR REGISTRO
    const inserir = {nome: 'Nabucodonosor', email: 'nabuco@gmail.com'};
    const resultado = await tabela.insertOne(inserir);

    // MOSTRAR CLIENTES
    const clientes = await tabela.find({}).toArray();
    console.log ("Lista de clientes: ", clientes);
    
}

crud();
