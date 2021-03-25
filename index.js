const NomePet = "PetShop Do Lar";

let pet  = [ {
    nome: 'Joey',
    tipo: 'coelho',
    idade: 3,
    raca: 'chinchila',
    peso: 5,
    tutor: 'vinicius',
    contato: '(81)98529-1481',
    vacinado: true,
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
    nome: 'joey Jr',
    tipo: 'coelho',
    idade: 1,
    raca: 'Raraça Pura',
    peso: 2,
    tutor: 'Pierre',
    contato: '(81)99999-9999',
    vacinado: true,
    servicos: ['vacina', 'castração']

}
];

const listarpets = () => {
    
    for(let i = 0; i < pet.length; i++){
        console.log(pet[i].nome);
    }
}

listarpets();

