let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log(); 

for(let i =0; i< numbers.length; i++){
    console.log(numbers[i]);
    if(i === numbers.length-1){
        console.log("");
    }
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 
let sum = null;
for(let number of numbers){
    sum += number;
}
console.log(`${sum}\n`);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 

console.log(`${sum/numbers.length}\n`);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(sum/numbers.length > 20){
    console.log(`valor maior que 20\n`);
} else {
    console.log("valor menor ou igual a 20\n");
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o; 

let maior = Number.MIN_VALUE;

for(let i =0; i<numbers.length; i++){
    if(numbers[i] > maior){
        maior = numbers[i];
    }
}
console.log(`${maior}\n`);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 
let naoTem = false;
for(let number of numbers){
    if(number%2 !=0){
        tem = true;
    }
}
if (naoTem){
    console.log("nenhum valor ímpar encontrado\n");
} else{
    console.log("tem pelo um valor ímpar\n");
}

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o; 
let menor = Number.MAX_VALUE;
for(let i=0; i<numbers.length; i++){
    if(numbers[i] < menor){
        menor = numbers[i];
    }
}
console.log(menor+"\n");


// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];

for (let index = 0; index < 25; index++) {
    array[index] = index+1;
    console.log(array[index])
}
console.log("")
// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . 

for (let iterator of array) {
    console.log(iterator/2)
}