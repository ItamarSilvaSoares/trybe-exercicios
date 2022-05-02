
const bEnviar = document.querySelector("#enviar-button");
const bLimpar = document.querySelector("#limpar");

function enableSubmit() {
  const agreement = document.querySelector('#termos-check');
  bEnviar.disabled = !agreement.checked;
}

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    if (userInput.type !== 'submit' && userInput.type !== 'button'){
      userInput.value = '';

    }
    userInput.checked = false;
  }
  textArea.value = '';
}

function handleSubmit(event) {
  // event.preventDefault();
}

window.onload = function() {
  // bLimpar.addEventListener('click', clearFields);
  bEnviar.addEventListener('click', handleSubmit);
  const agreement = document.querySelector('#termos-check');
  agreement.addEventListener('change', enableSubmit);
};