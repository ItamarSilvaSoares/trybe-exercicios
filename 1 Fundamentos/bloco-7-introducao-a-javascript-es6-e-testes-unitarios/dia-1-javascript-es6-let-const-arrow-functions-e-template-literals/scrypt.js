
// PARTE 1

// 1 🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

// Modifique a estrutura da função para que ela seja uma arrow function.
// Modifique as concatenações para template literals. 

  const func = (escopo) => {
        if (escopo === true) {
          let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = `${ifScope}   ótimo, fui utilizada no escopo !`;
          console.log(ifScope);
        } else {
            let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
            console.log(elseScope);
        }
    }
    
          func(true);
    
    //   🚀 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
    
    // Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
    // Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
    
    const oddsAndEvens = [13, 3, 4, 10, 7, 2];
    
    const cres = odds => odds.sort((a,b) => a - b)
    
    console.log(`Os números ${cres(oddsAndEvens)} se encontram ordenados de forma crescente!`); 
    
    // PARTE 2


    // Crie uma função que receba um número e retorne seu fatorial.

    // Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
    // Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

    // Crie uma função que receba uma frase e retorne qual a maior palavra.

    const fat = number => number === 1 ? 1 : number * fat(number - 1);

    console.log(fat(5));

    // Crie uma função que receba uma frase e retorne qual a maior palavra. 

    const maiorP = string => string.split(' ').sort((a, b) => b.length - a.length)[0];

    console.log(maiorP("Antonio foi no banheiro e não sabemos o que aconteceu"));

    // 3 Crie uma página que contenha:

    // Um botão ao qual será associado um event listener;
    // Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
    // Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

//     let clickCount = 0;
//     const bu = document.querySelector('#bu');
//     bu.addEventListener('click', () => {
// clickCount += 1;
// document.querySelector('#count').innerHTML = clickCount;
//     })


    // 4 Crie um código JavaScript com a seguinte especificação:

    // Não se esqueça de usar template literals
    
    //     Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
    //     Exemplo:
    //         String determinada: "Tryber x aqui!"
    //         Parâmetro: "Bebeto"
    //         Retorno: "Tryber Bebeto aqui!"
    //     Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
    //     Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
    //     Exemplo:
    //     "Tryber x aqui!
    //     Minhas cinco principais habilidades são:
    //         JavaScript;
    //         HTML; ...
    //     #goTrybe".

    const replace = (string, x) => string.replace('x', x);

    console.log(replace("Tryber x aqui!",  "Bebeto" ));
    
    const array = ['Java', 'JavaScript', 'HTML', 'CSS', 'GitHub'];
    
    const soV = string => string +=` Minhas cinco principais habilidades são: ${array.sort()}
    #goTrybe`
    
    console.log(soV(replace("Tryber x aqui!",  "Bebeto" )));