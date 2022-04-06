const number1 = 60,
    number2 = 60,
    number3 = 20


eTriangulo(number1, number2, number3)

function eTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        console.log(`Erro, ângulo inválido`)
    } else {
        if ((a + b + c) == 180) {
            console.log(`${true} É um triangulo `)
        } else {
            console.log(`${false} Não é um triangulo `)
        }
    }

}