// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.


const nomeEmail = (name) =>{
    const email = name.split(' ').join('_')
return {name,
    email:`${email}@trybe.com`};
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(nomeEmail));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const random = () => Math.floor(Math.random() * 6);


const sorteio = (number, func) => number === func() ? "Parabéns você ganhou" : "Tente novamente";


console.log(sorteio(3, random));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compa = (right, student) => {
   if (student === right) {
       return 1;
   } if (student === 'N.A') {
       return 0;
   }
   return - 0.5;
}
const pontua = (right, student, callback) => {
    let pontos = 0;
    for (let index = 0; index < right.length; index += 1 ){
        pontos = callback(right[index], student[index]);
    }
    return `Resultado final: ${pontos} pontos`
}
console.log(pontua(RIGHT_ANSWERS, STUDENT_ANSWERS, compa));




//   1 - Crie uma função que retorna o dano do dragão.

//   O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).


const damageD = (dragon) => {
    const max = dragon.strength;
    return Math.floor(Math.random() * (max - 15 + 1)) + 15;
}

// 2 - Crie uma função que retorna o dano causado pelo warrior.

// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const damageW = (warrior) => {
    const min = warrior.strength;
    const max = min * warrior.weaponDmg;
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const damageM = (mage) => {
    const turnStats = {
        manaSpent: 0,
        damageDealt: 'Not enough mana...',
      };
    if (mage.mana > 15) {
        const min = mage.intelligence;
        const max = min * 2;
        turnStats.damageDealt = Math.floor(Math.random() * (max - min + 1)) + min;
        turnStats.manaSpent = 15
    }
    return turnStats;
} 


const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };

  
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };

  
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  

  const battleMembers = { mage, warrior, dragon};

 
    console.log(Object.values(battleMembers));
    
    // 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.
    
    //   2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

    // 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.

    // 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.
    const gameActions = {
        warriorTurn: (callback) => {
            const damageW = callback(warrior);
            warrior.damage = damageW;
            dragon.healthPoints -= damageW;
        },
        mageTurn: (callback) => {
            const damageM = callback(mage);
            mage.damage = damageM.damageDealt;
            mage.mana -= damageM.manaSpent;
            dragon.healthPoints -= damageM.damageDealt;
        },
        dragonTurn: (callback) => {
            const damageD = callback(dragon);
            dragon.damage = damageD;
            mage.healthPoints -= damageD;
            warrior.healthPoints -= damageD;
        },
        endTurn: () => battleMembers,
      };
gameActions.dragonTurn(damageD);
gameActions.mageTurn(damageM);
gameActions.warriorTurn(damageW);
console.log(gameActions.endTurn());