const NomePet = 'PetShop Do Lar';

const moment = require('moment'); // require
const fs = require('fs');

let dadospet = require('./dadospets.json');
const { version } = require('moment');

let pets = dadospet.pets;

/*
const listarpets = () => {

    for(let pet of dadospet){
        console.log(`O nome do pet é:  ${pet.nome}`);
    }
    
    
    for(let i = 0; i < pet.length; i++){

        console.log('O nome do pet é: ' + pet[i].nome);
        console.log(`O nome do pet é:  ${pet[i].nome}`);
    }
    
    
}
*/

const listarPets = () => {
  for (let pet of dadospet) {
    console.log(
      `${pet.nome} \n ${pet.idade} anos \n ${pet.tipo} \n ${pet.raca}`
    );

    for (const servico of pet.servicos) {
      console.log(`${servico.data} -- ${servico.nome}`);
    }

    let vacinado = pet.vacinado == true ? 'Vacinado' : 'Não vacinado'; //if ternario para verificar se o pet é vacinado
    console.log(vacinado + '\n');
  }
};

//                     DESAFIO 1
const VerificaVacinaPet = (animal) => {
  for (let pet of dadospet) {
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
  for (let pet of dadospet) {
    if (pet.vacinado == false) {
      pet.vacinado = true;
      cont = cont + 1;
    }
  }
  let PetsVacinados = dadospet.length - cont;
  console.log(
    `Dentre todos os ${dadospet.length} pets/pet, ${cont} foram/foi vacinado/s e ${PetsVacinados} ja eram/era vacinados!!!`
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
  dadospet.push({
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

  fs.writeFile('./dadospets.json', JSON.stringify(dadospet), (err) => {
    if (err) {
      throw err;
    }
  });

  console.log('pet adicionado');
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

  fs.writeFile('./dadospets.json', JSON.stringify(dadospet), (err) => {
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

  fs.writeFile('./dadospets.json', JSON.stringify(dadospet), (err) => {
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

  fs.writeFile('./dadospets.json', JSON.stringify(dadospet), (err) => {
    if (err) {
      throw err;
    }
  });

  console.log(`Pet ${pet.nome} está de unhas aparadas!`);
};

atenderCliente(dadospet[3], ApararUnhasPet(dadospet[3]));
//TosarPet(pets[0]);
//console.log('---------------------')
//darBanhoPet(pets[0]);
//console.log('---------------------')
//ApararUnhasPet(pets[1]);
//console.log('---------------------')
//listarPets();
