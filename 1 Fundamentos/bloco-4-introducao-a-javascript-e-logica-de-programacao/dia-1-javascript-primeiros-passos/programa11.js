const salarioBruto = 1500.10;
let salaryDiscountInss = null;
let auxImpress = ``;
let impress = ``;

salaryDiscountInss = calculaInss(salarioBruto);

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
    } else if (salario <= 1556.94 && salario >0 ){
        inssAliquota = 0.08;
    } else if (salario > 1556.94 && salario <= 2594.22) {
        inssAliquota = 0.09;
    } else if (salario >2594,22){
        inssAliquota = 0.11;
        ativaTeto = true;
    }
    if(ativaTeto){
        if((salario*inssAliquota).toFixed(2) >= 570.88){
            descont = 570.88;
        } else{
            descont = (salario*inssAliquota).toFixed(2);
        }
    } else {
        descont = (salario*inssAliquota).toFixed(2);
    }
    salarioDescontado = (salario - descont).toFixed(2);
    auxImpress += `INSS\nSalário: R$ ${salario}\nDesconto INSS: R$ ${descont}\nSalário com desconto: R$ ${salarioDescontado}`
    console.log(`Salário com o desconto do INSS: R$ ${salarioDescontado}`);
//     return salarioDescontado
}

// Função que calculo o imposto devido ao Imposto de Renda
function calculaIR(salario) {
    
}