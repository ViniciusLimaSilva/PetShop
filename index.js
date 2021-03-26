const NomePet = "PetShop Do Lar";

const moment = require('moment'); // require
let dadospet = require('./dadospets.json')

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

listarpets();

*/

/*

const listarPets = () => {
    for(let pet of pets){        
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}



//                     DESAFIO 1
const VerificaVacinaPet = (animal) => {
   
    for(let pet of pets){
        if(animal == pet.nome){
            if(pet.vacinado == false){
                pet.vacinado = true;
                console.log(`Pet ${pet.nome} não era vacinado e agora esta vacinado`);
                
        }
        else{
            console.log(`Pet ${pet.nome} ja era vacinado`);
            
        }
        
        
    }

    
   }
        
};
//VerificaVacinaPet('bolota');

*/


/*
//               DESAFIO 2
const campanhaVacina = () =>{
    let cont = 0;
    for(let pet of pets){
        
        if(pet.vacinado == false){
            pet.vacinado = true;
            cont = cont + 1;
        }
    
   }
   let PetsVacinados = pets.length - cont;
   console.log(`Dentre todos os ${pets.length} pets/pet, ${cont} foram/foi vacinado/s e ${PetsVacinados} ja eram/era vacinados!!!`);

}
//campanhaVacina();

*/

/*

//               DESAFIO 3

const cadastrocliente = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos) =>{
    
    pets.push({
    nome: nome,
    tipo: tipo,
    idade: idade,
    raca: raca,
    peso: peso,
    tutor: tutor,
    contato: contato,
    vacinado: vacinado,
    servicos: servicos
    });

    console.log(pets);
}

//cadastrocliente('pingu', 'cachorro', 5, 'viralata', 10, 'rafael', '(81) 98871-9823', true, ['tosa', 'banho'])

*/

/*

//               DESAFIO 4

const darBanhoPet = (Petty) => {

    for(let pet of pets){
        if(Petty == pet.nome){
            pet.servicos.push(`Banho, Serviço feito na data: ${moment().format('DD-MM-YYYY')}`);
            console.log(`Pet ${pet.nome} está de banho tomado`);
                      
        }     
    }


}
const TosarPet = (Petty) => {

    for(let pet of pets){
        if(Petty == pet.nome){
            pet.servicos.push(`tosa, Serviço feito na data: ${moment().format('DD-MM-YYYY')}`);
            console.log(`Pet ${pet.nome} está com cabelinho na régua`);
                      
        }     
    }
    

}
const ApararUnhasPet = (Petty) => {
    
    for(let pet of pets){
        if(Petty == pet.nome){
            pet.servicos.push(`Corte de unhas, Serviço feito na data: ${moment().format('DD-MM-YYYY')}`);      
            console.log(`Pet ${pet.nome} está de unhas aparadas!`);
                      
        }     
    }
    

}
darBanhoPet('bolota');
TosarPet('bolota');
ApararUnhasPet('bolota');

*/

console.log(dadospet)






