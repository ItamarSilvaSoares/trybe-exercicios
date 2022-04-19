function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const input = document.querySelector("#task-input");
window.onload = function () {
  criaDias();
  botaoFeriado("Feriados");
  botaoEvento("Sexta-feira");
  tarefa("esquilo");
  legendaCor("lightgreen");
  const botao = document.querySelector("#btn-add");
  botao.addEventListener("click", compromissos);
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      // verifaca se tecla pressionada é o enter, se for ativa o evento click no botão
      botao.click();
    }
  });
  input.value = "";
};
function criaDias() {
  const ulDay = document.querySelector("#days");
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let sexta = 4;
  for (const dia of dezDaysList) {
    let li = document.createElement("li");
    li.className = "day";
    if (dia === 24 || dia === 25 || dia === 31) {
      li.className += " holiday";
    }
    if (dia === sexta) {
      sexta += 7;
      li.className += " friday";
    }
    li.innerText = dia;
    li.addEventListener("mouseover", zoom);
    li.addEventListener("mouseout", dZoom);
    li.addEventListener("click", corLegenda);
    ulDay.appendChild(li);
  }
}
function dZoom(event) {
  event.target.style.transform = "scale(1)";
}
function zoom(event) {
  event.target.style.transform = "scale(1.7)";
}
function botaoFeriado(string) {
  let botaoFeriado = document.createElement("button");
  botaoFeriado.setAttribute("id", "btn-holiday");
  botaoFeriado.innerText = string;
  botaoFeriado.addEventListener("click", mudaCor);
  document.querySelector(".buttons-container").appendChild(botaoFeriado);
}
function mudaCor() {
  let holidays = document.querySelectorAll(".holiday");
  for (const holiday of holidays) {
    if (holiday.style.backgroundColor !== "lightgray") {
      holiday.style.backgroundColor = "lightgray";
    } else {
      holiday.style.backgroundColor = "rgb(238, 238, 238)";
    }
  }
}

function botaoEvento(string) {
  let button = document.createElement("button");
  button.addEventListener("click", sexta);
  button.innerText = string;
  document.querySelector(".buttons-container").appendChild(button);
}

const sextasfeiras = [];
function sexta() {
  let sextas = document.querySelectorAll(".friday");
  for (let index = 0; index < sextas.length; index += 1) {
    if (sextas[index].innerText !== "Sexta-feira") {
      if (!sextasfeiras.includes(sextas[index].innerText)) {
        sextasfeiras.push(sextas[index].innerText);
      }
      sextas[index].innerText = "Sexta-feira";
    } else {
      sextas[index].innerText = sextasfeiras[index];
    }
  }
}

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

//     O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function tarefa(string) {
  let tarefa = document.createElement("span");
  tarefa.innerText = string;
  document.querySelector(".my-tasks").appendChild(tarefa);
}

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

//     O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//     O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function legendaCor(stringCor) {
  let legenda = document.createElement("div");
  legenda.style.backgroundColor = stringCor;
  legenda.addEventListener("click", select);
  document.querySelector(".my-tasks").appendChild(legenda);
}

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.

//     Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function select(event) {
  if (!event.target.classList.contains("task")) {
    event.target.classList.add("task");
  }
  if (!event.target.classList.contains("selected")) {
    event.target.classList.add("selected");
  } else {
    event.target.classList.remove("selected");
  }
  console.log(event.target);
}

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

//     Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function corLegenda(event) {
  if (
    event.target.style.color !==
    document.querySelector(".selected").style.backgroundColor
  ) {
    event.target.style.color =
      document.querySelector(".selected").style.backgroundColor;
  } else {
    if (
      document.querySelector(".selected") !== null &&
      event.target.style.color ==
        document.querySelector(".selected").style.backgroundColor
    ) {
      event.target.style.color = "rgb(119, 119, 119)";
    }
  }
}

// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

//     Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
//     Ao pressionar a tecla "enter" o evento também deverá ser disparado.
//     Dica - Propriedade: key .

function compromissos() {
  if (input.value.length !== 0) {
    let li = document.createElement("li");
    li.innerText = input.value;
    document.querySelector(".task-list").appendChild(li);
    input.value = "";
    input.focus();
  } else {
    window.alert("ERRO ao adicinar compromisso");
  }
}
