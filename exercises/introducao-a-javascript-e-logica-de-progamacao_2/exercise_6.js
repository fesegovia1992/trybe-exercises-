let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;

for (let i = 0; i < numbers.length; i++){
    if(numbers[i]%2 === 1) {
        numerosImpares = numbers[i];
        console.log(numerosImpares);
}
else if ((numbers[i]%2 === 1) ===null){
    console.log('nenhum valor ímpar encontrado.');
}
}   