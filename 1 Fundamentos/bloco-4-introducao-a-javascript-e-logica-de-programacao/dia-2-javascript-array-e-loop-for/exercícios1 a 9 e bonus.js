let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (i === numbers.length - 1) {
        console.log("");
    }
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = null;
for (let number of numbers) {
    sum += number;
}
console.log(`${sum}\n`);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

console.log(`${sum / numbers.length}\n`);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (sum / numbers.length > 20) {
    console.log(`valor maior que 20\n`);
} else {
    console.log("valor menor ou igual a 20\n");
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = Number.MIN_VALUE;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}
console.log(`${maior}\n`);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let naoTem = false;
for (let number of numbers) {
    if (number % 2 != 0) {
        tem = true;
    }
}
if (naoTem) {
    console.log("nenhum valor ímpar encontrado\n");
} else {
    console.log("tem pelo um valor ímpar\n");
}

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = Number.MAX_VALUE;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}
console.log(menor + "\n");

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];

for (let index = 0; index < 25; index++) {
    array[index] = index + 1;
    console.log(array[index]);
}
console.log("");
// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let iterator of array) {
    console.log(iterator / 2);
}
console.log("\n");

// bonus

// 1 - Ordene o array numbers em ordem crescente e imprima seus valores; 

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let inicio = 0;
// let fim = numbers2.length - 1;


 let numbers3 = mergeSort(numbers2);
 

 function mergeSort(array) {
     const meio = array.length / 2;

     if (array.length < 2) {
         return array;
     }
 const direira = array.splice(0,meio);
 return merge(mergeSort(direira), mergeSort(array));
 }

 function merge(direira, esquerda) {
     let arr = [];
     while (direira.length && esquerda.length) {
         if(direira[0] < esquerda[0]){
             arr.push(direira.shift())
         } else {
             arr.push(esquerda.shift())
         }
     }

     return [...arr, ...direira, ...esquerda]
 } // funciona mas está quebrado pois ele apaga o conteúdo do array inicial

// funcion merge sort -> https://stackabuse.com/merge-sort-in-javascript/

console.log("array growing: " + numbers3 );

// 2- Ordene o array numbers em ordem decrescente e imprima seus valores;

numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

numbers2.sort(function(a, b){return b-a});

console.log("array descending: "+ numbers2);

// 3 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo: 

const numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicado = []
for (let index = 0; index < numbers4.length; index+=1) {
    if(index+1 == numbers4.length){
        multiplicado[index] = numbers4[index]*2;
    } else {
        multiplicado[index] = (numbers4[index] * numbers4[index+1]);
    }
}
console.log(multiplicado);