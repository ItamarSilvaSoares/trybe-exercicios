const number1 = 1,
    number2 = 2,
    number3 = 3

qualMaior(number1, number2, number3)

function qualMaior(a, b, c) {
    if (a == b && a == c) {
        console.log(`Os números são todos iguais`)
    } else {
        if (a > b && a > c) {
            console.log(`o maior entre os três é o numero ${a}`)
        } else {
            if (b > c) {
                console.log(`o maior entre os três é o numero ${b}`)
            } else {
                console.log(`o maior entre os três é o numero ${c}`)
            }
        }
    }
}