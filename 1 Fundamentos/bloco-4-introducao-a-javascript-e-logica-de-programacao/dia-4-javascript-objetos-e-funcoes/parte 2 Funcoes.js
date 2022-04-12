// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
console.log("\n" + verificaPalindrome("arinra") + "\n");

function verificaPalindrome(string) {
  for (let index = 0; index < string.length / 2; index += 1) {
    if (string[index] !== string[string.length - 1 - index]) {
      return false;
    }
  }
  return true;
}

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function criaAray() {
  let array = [];
  for (let index = 0; index < 6; index++) {
    array.push(Math.floor(Math.random() * 60) + 1);
  }
  return array;
}

let array = criaAray();

function maiorValor(array) {
  let maiorNumber = array[0];
  let numberMaiorIndex = null;
  for (const key in array) {
    if (array[key] > maiorNumber || array[key] === maiorNumber) {
      maiorNumber = array[key];
      numberMaiorIndex = key;
    }
  }
  return numberMaiorIndex;
}

console.log(array);
console.log(maiorValor(array) + "\n");

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(array) {
  let maiorNumber = array[0];
  let numberMaiorIndex = null;
  for (const key in array) {
    if (array[key] < maiorNumber || array[key] === maiorNumber) {
      maiorNumber = array[key];
      numberMaiorIndex = key;
    }
  }
  return numberMaiorIndex;
}

console.log(array);
console.log(menorValor(array));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function maiorNome(nomes) {
  let maiorNome = nomes[0];
  for (let index = 0; index < nomes.length; index++) {
    if (nomes[index].length > maiorNome.length) {
      maiorNome = nomes[index];
    }
  }
  return maiorNome;
}
console.log("\n" + nomes);
console.log(maiorNome(nomes) + "\n");

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let numeros = [2, 3, 3, 5, 8, 2, 3];

function numberRepeated(numbers) {
  let contador = 0;
  let repetido = 0;
  for (let index = 0; index < numbers.length; index++) {
    let aux = 0;
    for (let index2 = 0; index2 < numbers.length - 1; index2++) {
      if (numbers[index] === numbers[index2]) {
        aux += 1;
      }
    }
    if (aux > contador) {
      contador = aux;
      repetido = numbers[index];
    }
  }
  return repetido;
}

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorio(number) {
  if (number <= 0) {
    console.log(`Erro numero não da clase dos naturais`);
  } else {
    let soma = 0;
    for (let index = 1; index <= number; index++) {
      soma += index;
    }
    return soma;
  }
}

console.log(somatorio(5) + "\n");

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(word, ending) {
  if (ending.length < word.length) {
    for (let index = 0; index < ending.length; index++) {
      if (word[word.length - ending.length + index] !== ending[index])
        return false;
    }
    return true;
  } else return `A palavra ${ending} é maior, ou igual que a palavra  ${word}`;
}

console.log(verificaFimPalavra("trybe", "be"));
