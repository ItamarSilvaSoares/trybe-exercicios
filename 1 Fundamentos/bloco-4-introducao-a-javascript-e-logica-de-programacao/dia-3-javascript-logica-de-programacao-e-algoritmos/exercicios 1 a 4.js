// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
let i = 1;
console.log("programa " + i++);
let fatorial = 1;
const numeroFatorar = 10;
for (let index = 1; index <= numeroFatorar; index += 1) {
    fatorial *= index;
}
console.log(`O fatorial de ${numeroFatorar} é: ${fatorial}\n`);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
console.log("programa " + i++);

let word = "banana";
let resultado = "";
for (let index = word.length - 1; index >= 0; index -= 1) {
    resultado += word[index];
}
console.log(`A palavra ${word} invertida fica: ${resultado}\n`);

// 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
console.log("programa " + i++);

let array = ["java", "javascript", "python", "html", "css"];

let maior = "";
let menor = array[0];

for (let index = 0; index < array.length; index++) {
    if (array[index].length > maior.length) {
        maior = array[index];
    }
    if (array[index].length < menor.length) {
        menor = array[index];
    }
}

console.log(`A menor palavra do array é: ${menor}, e a maior é: ${maior}\n`);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

console.log("programa " + i);
let maiorPrimo = 1;
for (let numero = 1; numero <= 50; numero += 1) {
    let contador = 0;
    for (let testador = 1; testador <= 50; testador += 1) {
        if (numero % testador == 0) {
            contador += 1;
        }
    }
    if (contador === 2 && numero > maiorPrimo) {
        maiorPrimo = numero;
    }
}
console.log(`O maior primo entre 1 a 50 é ${maiorPrimo}\n`);
i = 1;
// bonus

// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

bonus1();
bonus2();
bonus3();
bonus4();
bonus5();

function bonus1() {
    console.log("programa bônus " + i++);
    let n = 5;
    let saida = "";
    if (n > 1) {
        for (let linha = 1; linha <= n; linha += 1) {
            for (let coluna = 1; coluna <= n; coluna++) {
                saida += "*";
            }
            saida += "\n";
        }
    }
    console.log(saida + "\n");
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:


function bonus2() {
    console.log("programa bônus " + i++);
    let n = 5;
    let saida = "";
    if (n > 1) {
        for (let linha = 1; linha <= n; linha += 1) {
            for (let coluna = 1; coluna <= linha; coluna++) {
                saida += "*";
            }
            saida += "\n";
        }
    }
    console.log(saida + "\n");
}

function bonus3() {
    console.log("programa bônus " + i++);
    // let n = 5;
    // let saida = "";
    // if (n > 1) {
    //     for (let linha = 1; linha <= n; linha += 1) {
    //         for (let coluna = 1; coluna <= n-linha; coluna++) {
    //             saida += " ";
    //         }
    //         for (let coluna = 1; coluna <= linha; coluna++) {
    //             saida += "*";
    //         }
    //         saida += "\n";
    //     }
    // }
    // console.log(saida + "\n");

    let n = 5;
    let symbol = '*';
    let inputLine = '';
    let inputPosition = n;

    for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
        for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
            if (columnIndex < inputPosition) {
                inputLine = inputLine + ' ';
            } else {
                inputLine = inputLine + symbol;
            }
        }
        console.log(inputLine);
        inputLine = '';
        inputPosition -= 1;
    };

}

function bonus4() {
    console.log("programa bônus " + i++);
    let n = 5;
    let symbol = '*';
    let inputLine = '';
    let midOfMatrix = (n+1) /2
    let controlLeft = midOfMatrix;
    let controlRight = midOfMatrix;

    for (let lineIndex = 0; lineIndex < midOfMatrix; lineIndex += 1) {
        for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
            if (columnIndex >= controlLeft && columnIndex <= controlRight) {
                inputLine = inputLine + symbol;
            } else {
                inputLine = inputLine + " ";
            }
        }
        console.log(inputLine);
        inputLine = '';
        controlRight += 1;
        controlLeft -= 1;
    };
}

function bonus5() {
    console.log("programa bônus " + i++);
    let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
}