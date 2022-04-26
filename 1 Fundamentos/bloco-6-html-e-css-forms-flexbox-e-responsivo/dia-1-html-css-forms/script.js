const bEnviar = document.querySelector("#enviar-button");
const bLimpar = document.querySelector("#limpar");


bLimpar.addEventListener("click", () => {
  const inputs = document.querySelectorAll("input");
  document.querySelector("textarea").value = "";
  for (let input of inputs) {
    if (input.type !== "button" && input.type !== "submit") {
      input.value = "";
      input.checked = false;
    }
  }
});