const nota = -1

notEmPorcentagem(nota)

function notEmPorcentagem(nota) {
    if (nota < 0 || nota > 100) {
        console.log(`Erro Nota inválida`)
    } else if (nota >= 90) {
        console.log(`Conceito A`)
    } else if (nota >= 80 && nota < 90) {
        console.log(`Conceito B`)
    } else if (nota >= 70 && nota < 80) {
        console.log(`Conceito C`)
    } else if (nota >= 60 && nota < 70) {
        console.log(`Conceito D`)
    } else if (nota >= 50 && nota < 60) {
        console.log(`Conceito E`)
    } else if (nota < 50 && nota >= 0) {
        console.log(`Conceito F`)
    }

}