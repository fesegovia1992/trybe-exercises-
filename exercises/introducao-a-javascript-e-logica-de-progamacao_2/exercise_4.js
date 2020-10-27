let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for (var i = 0; i<numbers.length;i++) {
    total = total + numbers[i];
    console.log(total / numbers.length);
}
if ((total / numbers.length) > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menor que 20');
}
