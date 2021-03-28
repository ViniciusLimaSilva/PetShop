// let arquivoJson = require("./package.json") chamando o arquivo

/*
let petObj = {
    nome: 'pulga',
    idade: 4,
    tipo: 'cachorro',
    genero: 'M',
    vacinado: true,
};

let petStringJson = '{"nome":"pulga","idade":4,"tipo":"cachorro","genero":"M","vacinado":true}'

console.log(JSON.stringify(petObj)) // transformando o objeto em uma string JSON
console.log(JSON.parse(petStringJson))// transformando uma string JSON em um objeto

// ESTUDAR stringify() (transforma em uma string JSON)
// ESTUDAR JSON.parse() (transforma em um objeto JSON)

*/
let dadospet = require('./dadospets.json')

let pets = dadospet.pets



const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);

    (servico)? servico() : console.log('so vim dar uma olhadinha'); // if ternario para avançar se n tiver 2 parametro
    //servico(); jeito sem if
    console.log('Tchau, até mais!');
}

const darBanhoPet = () => {
    console.log('dando banho no pet...');
}

const apararUnhas = () => {
    console.log('Aparando Unhas....');
}

atenderCliente(pets[0], darBanhoPet);
console.log('--------------------------')
atenderCliente(pets[2], apararUnhas);
console.log('--------------------------')
atenderCliente(pets[1]);


