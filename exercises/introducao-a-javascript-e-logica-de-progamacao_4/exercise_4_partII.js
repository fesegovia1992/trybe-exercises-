/*Crie uma função que receba um array de nomes e retorne
 o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.*/


function maiorQuantidadeCaracteres (nomes) {
    let nomeMaior = 0;
    for (let i in nomes){
        if ((nomes[nomeMaior].length) < (nomes[i].length)) {
            nomeMaior = i;
        }
    }
        return nomes[nomeMaior];
};

console.log(maiorQuantidadeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

