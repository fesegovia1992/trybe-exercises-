/*Crie uma função que receba um número inteiro N e retorne o somatório
 de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15.*/



function somatorio (numero) {
    let soma =0;
    for (let index = 0; index <= numero; index++) {
        soma = soma + index;

    }
    return soma;
};

console.log(somatorio(5));