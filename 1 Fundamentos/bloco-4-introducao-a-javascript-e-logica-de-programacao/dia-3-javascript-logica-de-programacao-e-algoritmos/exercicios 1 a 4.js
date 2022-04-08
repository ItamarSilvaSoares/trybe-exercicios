// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
let i = 1;
console.log("programa " + (i++))
let fatorial = 1;
const numeroFatorar = 10;
for (let index = 1; index <= numeroFatorar; index+=1) {
    fatorial *= index;
}
console.log(`O fatorial de ${numeroFatorar} é: ${fatorial}\n`);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
console.log("programa " + (i++))

let word = 'banana';
let resultado = "";
for (let index = word.length-1; index >= 0; index-=1) {
    
    resultado +=word[index];
}
console.log(`A palavra ${word} invertida fica: ${resultado}\n`);

// 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. 
console.log("programa " + (i++))

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = "";
let menor = array[0];

for (let index = 0; index < array.length; index++) {
    if(array[index].length > maior.length){
        maior = array[index];
    }
    if(array[index].length < menor.length){
        menor = array[index];
    }
}

console.log(`A menor palavra do array é: ${menor}, e a maior é: ${maior}\n`);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. 

console.log("programa " + (i))
let maiorPrimo = 1;
for(let numero = 1; numero <= 50; numero+=1 ){
    let contador = 0;
    for(let testador = 1; testador<=50; testador+=1){
        if(numero % testador == 0){
            contador +=1;
        }
    }
    if (contador === 2 && numero > maiorPrimo){
        maiorPrimo = numero;
    }
}
console.log(`O maior primo entre 1 a 50 é ${maiorPrimo}`);