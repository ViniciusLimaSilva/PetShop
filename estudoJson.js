// let arquivoJson = require("./package.json") chamando o arquivo json



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