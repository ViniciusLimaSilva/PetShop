const NomePet = 'PetShop Do Lar';

const moment = require('moment'); // require
const fs = require('fs');

let dadospet = require('./dadospets.json');

let pets = dadospet.pets;

/*
let pets  = [ {
    nome: 'Joey',
    tipo: 'coelho',
    idade: 3,
    raca: 'chinchila',
    peso: 5,
    tutor: 'vinicius',
    contato: '(81)98529-1481',
    vacinado: false,
    servicos: ['banho', 'tosa']

},
{
    nome: 'bolota',
    tipo: 'coelho',
    idade: 1,
    raca: 'mesclado',
    peso: 2,
    tutor: 'conceição',
    contato: '(81)98624-8759',
    vacinado: true,
    servicos: ['tosa']

},
{
    nome: 'joeyJr',
    tipo: 'coelho',
    idade: 1,
    raca: 'Raraça Pura',
    peso: 2,
    tutor: 'Pierre',
    contato: '(81)99999-9999',
    vacinado: false,
    servicos: ['vacina', 'castração']

}
];
*/

/*
const listarpets = () => {

    for(let pet of pets){
        console.log(`O nome do pet é:  ${pet.nome}`);
    }
    
    
    for(let i = 0; i < pet.length; i++){

        console.log('O nome do pet é: ' + pet[i].nome);
        console.log(`O nome do pet é:  ${pet[i].nome}`);
    }
    
    
}
*/

const listarPets = () => {
  for (let pet of pets) {
    console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);

    for (const servico of pet.servicos) {
      console.log(`${servico.data} -- ${servico.nome}`);
    }

    let vacinado = pet.vacinado == true ? 'Vacinado' : 'Não vacinado'; //if ternario para verificar se o pet é vacinado
    console.log(vacinado);
  }
};

//                     DESAFIO 1
const VerificaVacinaPet = (animal) => {
  for (let pet of pets) {
    if (animal == pet.nome) {
      if (pet.vacinado == false) {
        pet.vacinado = true;
        console.log(`Pet ${pet.nome} não era vacinado e agora esta vacinado`);
      } else {
        console.log(`Pet ${pet.nome} ja era vacinado`);
      }
    }
  }
};
//VerificaVacinaPet('bolota');

//               DESAFIO 2
const campanhaVacina = () => {
  let cont = 0;
  for (let pet of pets) {
    if (pet.vacinado == false) {
      pet.vacinado = true;
      cont = cont + 1;
    }
  }
  let PetsVacinados = pets.length - cont;
  console.log(
    `Dentre todos os ${pets.length} pets/pet, ${cont} foram/foi vacinado/s e ${PetsVacinados} ja eram/era vacinados!!!`
  );
};
//campanhaVacina();

//               DESAFIO 3

const cadastrocliente = (
  nome,
  tipo,
  idade,
  raca,
  peso,
  tutor,
  contato,
  vacinado,
  servicos
) => {
  pets.push({
    nome: nome,
    tipo: tipo,
    idade: idade,
    raca: raca,
    peso: peso,
    tutor: tutor,
    contato: contato,
    vacinado: vacinado,
    servicos: servicos,
  });

  console.log(pets);
};

//cadastrocliente('pingu', 'cachorro', 5, 'viralata', 10, 'rafael', '(81) 98871-9823', true, ['tosa', 'banho'])

//                DESAFIO 4

const atenderCliente = (pet, servico) => {
  //(servico)? servico() : console.log('Apenas visitando'); // if ternario para avançar se n tiver 2 parametro
  //servico(); jeito sem if
  console.log(`Tchau ${pet.nome}, até mais`);
  console.log('serviço concluido!!!!');
};

const darBanhoPet = (pet) => {
  pet.servicos.push({
    nome: 'banho',
    data: moment().format('DD-MM-YYYY'),
  });

  fs.writeFile('./dadospets.json', JSON.stringify(pets), (err) => {
    if (err) {
      throw err;
    }
  });
  console.log(`Pet ${pet.nome} está de banho tomado`);
};

const TosarPet = (pet) => {
  pet.servicos.push({
    nome: 'tosa',
    data: moment().format('DD-MM-YYYY'),
  });

  fs.writeFile('./dadospets.json', JSON.stringify(pets), (err) => {
    if (err) {
      throw err;
    }
  });
  console.log(`Pet ${pet.nome} está com cabelinho na régua`);
};

const ApararUnhasPet = (pet) => {
  pet.servicos.push({
    nome: 'corte de unhas',
    data: moment().format('DD-MM-YYYY'),
  });

  fs.writeFile('./dadospets.json', JSON.stringify(pets), (err) => {
    if (err) {
      throw err;
    }
  });

  console.log(`Pet ${pet.nome} está de unhas aparadas!`);
};

atenderCliente(pets[0], ApararUnhasPet(pets[0]));
//TosarPet(pets[0]);
//console.log('---------------------')
//darBanhoPet(pets[0]);
//console.log('---------------------')
//ApararUnhasPet(pets[1]);
//console.log('---------------------')
//listarPets();
