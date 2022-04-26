const number1 = 1,
    number2 = 2,
    number3 = 3;

ePar(number1, number2, number3);

function ePar(number1, number2, number3) {
    if (number1 % 2 == 0 || number2 % 2 == 0 || number2 % 2 == 0) {
        console.log(`Pelo menos um número é par`);
    } else {
        console.log(`Nenhumm número é par`);
    }
}