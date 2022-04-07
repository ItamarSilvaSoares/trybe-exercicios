const salarioBruto = 1500.10;
let salaryDiscountInss = null;
let auxImpress = ``;
let impress = ``;

calculaIR(parseFloat(calculaInss(salarioBruto)));

// function imprimir() {
//     let vez = 1;
//     if(vez === 1){
//         for (let i =0; i<10; i++){
//             impress += "*";
//         }
//     }
//     impress += `\n` + auxImpress;
// }


console.log(impress)
// Função que calcula o desconto do INSS
function calculaInss(salario) {
    let ativaTeto = false;
    let inssAliquota = null;
    let descont = null;
    let salarioDescontado = null;
    if (salario <= 0) {
        console.log(`ERRO salario inválido`)
    } else if (salario <= 1556.94 && salario > 0) {
        inssAliquota = 0.08;
    } else if (salario > 1556.94 && salario <= 2594.22) {
        inssAliquota = 0.09;
    } else if (salario > 2594, 22) {
        inssAliquota = 0.11;
        ativaTeto = true;
    }
    if (ativaTeto) {
        if ((salario * inssAliquota).toFixed(2) >= 570.88) {
            descont = 570.88;
        } else {
            descont = (salario * inssAliquota).toFixed(2);
        }
    } else {
        descont = (salario * inssAliquota).toFixed(2);
    }
    salarioDescontado = (salario - descont).toFixed(2);
    auxImpress += `INSS\nSalário: R$ ${salario}\nDesconto INSS: R$ ${descont}\nSalário com desconto: R$ ${salarioDescontado}`
    console.log(typeof salarioDescontado);
    console.log(`Salário com o desconto do INSS: R$ ${salarioDescontado}`);
    return salarioDescontado
}

// Função que calculo o imposto devido ao Imposto de Renda
function calculaIR(salario) {
    let irAliquota = null;
    let parcelaReduzir = null;
    let salarioDescontado = null;
    let valorIr = null
    if (salario <= 0) {
        console.log(`ERRO salario inválido`)
    } else if (salario > 0 && salario <= 1903.98) {
        console.log("Isento de imposto de renda ")
    } else if (salario > 1903.98 && salario <= 2826.65) {
        irAliquota = 0.075;
        parcelaReduzir = 142.80;
    } else if (salario > 2826.65 && salario <= 3751.05) {
        irAliquota = 0.15;
        parcelaReduzir = 354.80;
    } else if (salario > 3751.05 && salario <= 4664.68) {
        irAliquota = 0.225;
        parcelaReduzir = 636.12;
    } else if (salario > 4664.68) {
        irAliquota = 0.275;
        parcelaReduzir = 869.36;
    }
    valorIr = salario * irAliquota - parcelaReduzir;
    salarioDescontado = salario - valorIr;
    console.log(`Salário com o desconto do IR: R$ ${salarioDescontado}`)
}