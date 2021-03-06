const config = document.querySelector(".dropbtn");
config.addEventListener("mouseover", menu);
const ul = document.querySelector(".conf");
document.querySelector(".aside").addEventListener("mouseleave", fechaMenu);

window.onload = function () {
  //criar as caixas com as cores de fundos
  const cores = ["white", "#0D0D0D", "#4C4C4C", "#1A1A1A"];
  const li = document.createElement("li");
  for (index = 0; index < cores.length; index += 1) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = cores[index];
    div.addEventListener("click", colorBackground);
    li.appendChild(div);
  }
  ul.appendChild(li);
  crieteOpt();
  ranger();
  criarInput();
  criaOpt();
};
// estilo fonts
function criaOpt(params) {
  const nomeFonts = ["Montserrat", "Arial", "Ubuntu"];
  const p = document.createElement("label");
  ul.appendChild(p);
  for (index = 0; index < nomeFonts.length; index += 1) {
    const li = document.createElement("li");
    li.innerText = nomeFonts[index];
    li.style.fontFamily = nomeFonts[index];
    li.style.display = "inline-block";
    li.style.padding = "10px";
    li.style.fontSize = "1.5em";
    li.addEventListener("click", mudafont);
    ul.appendChild(li);
  }
}
// muda font
function mudafont(event) {
  document.querySelector(".cont-artigos").style.fontFamily =
    event.target.style.fontFamily;
  console.log(event.target.value);
}

// espaçamento das linhas
function criarInput() {
  const li = document.createElement("li");
  const p = document.createElement("label");
  const range = document.createElement("input");
  range.setAttribute("id", "size");
  p.setAttribute("for", "size");
  p.innerText = "Espaçamento";
  range.type = "range";
  range.min = 1;
  range.max = 3;
  range.step = 0.1;
  range.value = 1.5;
  range.addEventListener("input", space);
  li.appendChild(p);
  li.appendChild(range);
  ul.appendChild(li);
}

// muda espaçamento
function space(event) {
  document.querySelector(".cont-artigos").style.lineHeight = event.target.value;
}

// color fonts
function crieteOpt() {
  const p = document.createElement("label");
  const cores = ["#D0D0D0", "black", "#D8774C"];
  ul.appendChild(p);
  p.innerText = "Colors Font";
  for (index = 0; index < cores.length; index += 1) {
    const li = document.createElement("li");
    li.innerText = "Abc";
    li.style.display = "inline-block";
    li.style.color = cores[index];
    li.style.padding = "10px";
    li.style.background = "gray";
    li.style.fontWeight = "bold";
    li.addEventListener("click", colorFont);
    ul.appendChild(li);
  }
}
// muda cor fontes
function colorFont(event) {
  document.querySelector(".cont-artigos").style.color =
    event.target.style.color;
}

// seletor do tamanho da fonte
function ranger() {
  const li = document.createElement("li");
  const p = document.createElement("label");
  const range = document.createElement("input");
  range.setAttribute("id", "size");
  p.setAttribute("for", "size");
  p.innerText = "Font Size";
  range.type = "range";
  range.min = 1;
  range.max = 2;
  range.step = 0.1;
  range.value = 1;
  range.addEventListener("input", fontSize);
  li.appendChild(p);
  li.appendChild(range);
  ul.appendChild(li);
}

//muda tamanho fonte
function fontSize(event) {
  let num = event.target.value.toString() + "em";
  document.querySelector(".cont-artigos").style.fontSize = num;
}

// mudar cor de fundo
function colorBackground(event) {
  document.body.style.backgroundColor = event.target.style.backgroundColor;
  if (event.target.style.backgroundColor !== "white") {
    document.querySelector(".imagem").style.boxShadow = "0 0 15px lightgray";
    document.body.style.boxShadow = "0 0 8px rgb(255, 255, 255, 0.35)";
  } else {
    document.querySelector(".imagem").style.boxShadow = "0 0 15px";
    document.body.style.boxShadow = "0 0 8px";
  }
}

// mostrar o menu
function menu() {
  document.querySelector(".aside").style.visibility = "visible";
}

function fechaMenu() {
  document.querySelector(".aside").style.visibility = "hidden";
}
