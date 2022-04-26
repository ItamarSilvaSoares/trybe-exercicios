const number1 = 0

positivoNegativoZero(number1)

function positivoNegativoZero(number1) {
    if (number1 > 0) {
        console.log(`O número ${number1} é positivo`)
    } else if (number1 < 0) {
        console.log(`O número ${number1} é negativo`)
    } else {console.log(`O número ${number1} é zero`)}
}