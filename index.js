const NomePet = 'PetShop Do Lar';

const moment = require('moment'); // require
const fs = require('fs');

let dadospet = fs.readFileSync('./dadospet.json'); // puxando outro arquivo, lendo ele e jogando para a variavel dadospet

dadospet = JSON.parse(dadospet); // transformando o arquivo em json

const attbancopets = () => {
  // att banco no arquivo json e add
  let petsatt = JSON.stringify(dadospet);
  fs.writeFileSync('dadospet.json', petsatt, 'utf-8'); // escreve o que foi editado no arquivo json
};

const { version } = require('moment');
const { verify } = require('crypto');

/*
const listarpets = () => {

    for(let pet of dadospet.pets){
        console.log(`O nome do pet é:  ${pet.nome}`);
    }
    
    
    for(let i = 0; i < pet.length; i++){

        console.log('O nome do pet é: ' + pet[i].nome);
        console.log(`O nome do pet é:  ${pet[i].nome}`);
    }
    
    
}
*/

/*
const listarPets = () => {
  for (let pet of dadospet.pets) {
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

*/

const listarPets = () => {
  dadospet.pets.forEach((pet) => {
    //desestruturação

    let { nome, idade, tipo, raca } = pet;

    console.log(`${nome}, ${idade} anos, ${tipo}, ${raca}`);

    pet.servicos.forEach((servico) => {
      let { nome = nomeServico, data } = servico;
      console.log(`${nome} - ${data}`);
    });

    let vacinado = pet.vacinado == true ? 'Vacinado' : 'Não vacinado'; //if ternario para verificar se o pet é vacinado
    console.log(vacinado + '\n');
  });
};

//                     DESAFIO 1
const VerificaVacinaPet = (animal) => {
  dadospet.pets.forEach((pet) => {
    let { nome, vacinado } = pet;

    if (animal == nome) {
      if (vacinado == false) {
        vacinado = true;
        console.log(`Pet ${nome} não era vacinado e agora esta vacinado`);
      } else {
        console.log(`Pet ${nome} ja era vacinado`);
      }
    }
  });
};
//VerificaVacinaPet('bolota');

//               DESAFIO 2
const campanhaVacina = () => {
  let cont = 0;

  dadospet.pets = dadospet.pets.map((pet) => {
    if (pet.vacinado == false) {
      pet.vacinado = true;
      cont = cont + 1;
    }
    return pet;
  });
  let PetsVacinados = dadospet.pets.length - cont;

  attbancopets();
  console.log(
    `Dentre todos os ${dadospet.pets.length} pets/pet, ${cont} foram/foi vacinado/s e ${PetsVacinados} ja eram/era vacinados!!!`
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
  newPet = {
    nome,
    tipo,
    idade,
    raca,
    peso,
    tutor,
    contato,
    vacinado,
    servicos,
  };

  dadospet.pets.push(newPet);

  attbancopets();

  console.log('pet adicionado');
};

//cadastrocliente('pingu', 'cachorro', 5, 'viralata', 10, 'rafael', '(81) 98871-9823', true, [])

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

  attbancopets();
  console.log(`Pet ${pet.nome} está de banho tomado`);
};

const TosarPet = (pet) => {
  pet.servicos.push({
    nome: 'tosa',
    data: moment().format('DD-MM-YYYY'),
  });

  attbancopets();
  console.log(`Pet ${pet.nome} está com cabelinho na régua`);
};

const ApararUnhasPet = (pet) => {
  pet.servicos.push({
    nome: 'corte de unhas',
    data: moment().format('DD-MM-YYYY'),
  });

  attbancopets();

  console.log(`Pet ${pet.nome} está de unhas aparadas!`);
};

const buscarpet = (nomepet) => {
  let petencontrado = dadospet.pets.find((pet) => {
    return pet.nome == nomepet;
  });

  console.log(
    petencontrado
      ? petencontrado
      : `nenhum pet encontrado com o nome${pet.nome}`
  );
};

const filtrarTipoPet = (tipoPet) => {
  let TipopetsEncontrados = dadospet.pets.filter((pet) => {
    return pet.tipo == tipoPet;
  });

  console.log(TipopetsEncontrados);
};

const clientePremium = (pet) => {
  //desestruturação
  let { nome } = pet;

  let nServicos = pet.servicos.length;

  if (nServicos > 5) {
    console.log(
      `Olá, ${nome}! Você é um cliente especial e ganhou um descontão!`
    );
  } else {
    console.log(`Olá, ${nome}! Você ainda não tem descontos disponiveis!`);
  }
};

const contatotutor = (pet) => {
  let { nome, contato, tutor } = pet;

  console.log(`  Tutor: ${tutor}
  Contato: ${contato}
  Pet: ${nome}`);
};

const filtrarTutor = (nomeTutor) => {
  let petsTutor = dadospet.pets.filter((pet) => {
    return pet.tutor == nomeTutor;
  });

  console.log(`Pets do tutor ${nomeTutor}:`);
  petsTutor.forEach((pet) => {
    console.log(`${pet.nome} - ${pet.tipo}`);
  });
};

VerificaVacinaPet('bolota');

//clientePremium(dadospet.pets[1]);
//clientePremium(dadospet.pets[1]);
//atenderCliente(dadospet.pets[3], TosarPet(dadospet.pets[3]));
//TosarPet(pets[0]);
//console.log('---------------------')
//darBanhoPet(pets[0]);
//console.log('---------------------')
//ApararUnhasPet(pets[1]);
//console.log('---------------------')
//listarPets();
