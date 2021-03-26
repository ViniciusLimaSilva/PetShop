let nomes = ['vinicius', 'bruno', 'iago', 'natalia'];

const imprimirlista = () => {
    for(let i = 0; i < nomes.length; i++){
        console.log(`${i}: ${nomes[i]}`)
    }
}


//nomes.push('renato') adiciona no vetor
//nomes.pop(); remove o ultimo da lista
//let professores = nomes.join("- ") organiza toda a lista pelo o que vc quiser como um hifen ou virgula
//let ultimoprof = "ultimo professor: " + nomes.pop(); mostra o ultimo do vetor mas o exclui
//nomes.unshift('joao') adiciona no comeco do vetor
//let idiagog = "ID: " + nomes.indexOf('iago') mostra o index de onda o elemento está
//let idiagog = " " + nomes.lastIndexOf('bruno') mostra o ultimo lugar em que a string corresponde, ex: vinicius e quero saber o i, ele vai retornar 5 pois é a posição do ultimo i da palavra

//if(nomes.includes("vinicius")){  verifica se o que esta em aspas esta dentro da lista, verifica se esta incluso
//    console.log('vini esta no time')
///}else{
//    console.log('vini nao esta no time')
//}

