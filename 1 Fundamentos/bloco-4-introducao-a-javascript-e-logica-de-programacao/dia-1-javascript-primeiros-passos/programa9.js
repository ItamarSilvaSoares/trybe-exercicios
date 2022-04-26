const number1 = 4,
    number2 = 2,
    number3 = 6;

eImpar(number1, number2, number3);

function eImpar(number1, number2, number3) {
    if (number1 % 2 != 0 || number2 % 2 != 0 || number2 % 2 != 0) {
        console.log(`Pelo menos um número é impar`);
    } else {
        console.log(`Nenhumm número é impar`);
    }
}