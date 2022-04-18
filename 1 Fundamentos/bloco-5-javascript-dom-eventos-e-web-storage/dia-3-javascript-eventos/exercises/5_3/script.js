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
    ulDay.appendChild(li);
  }
}
criaDias();

function botaoFeriado(string) {
  let botaoFeriado = document.createElement("button");
  botaoFeriado.setAttribute("id", "btn-holiday");
  botaoFeriado.innerText = string;
  document.querySelector(".buttons-container").appendChild(botaoFeriado);
}
botaoFeriado("Feriados");
