const NomePet = "PetShop Do Lar";

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

const campanhaVacina = () =>{
    let cont = 0;
    for(let pet of pets){
        
        if(pet.vacinado == false){
            pet.vacinado = true;
            cont = cont + 1;
        }
    
   }
   console.log(`Dentre todos os ${pets.length} pets, ${cont} foram vacinados!!!`);

}
campanhaVacina();

