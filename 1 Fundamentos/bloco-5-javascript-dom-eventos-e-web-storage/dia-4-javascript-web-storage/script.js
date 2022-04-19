const config = document.querySelector(".dropbtn");
config.addEventListener("mouseover", menu);

window.onload = function () {
  const cores = ["white", "#0D0D0D", "#4C4C4C", "#1A1A1A"];
  const li = document.createElement("li");
  for (index = 0; index < cores.length; index += 1) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = cores[index];
    div.addEventListener("click", colorBackground);
    li.appendChild(div);
  }
  document.querySelector(".conf").appendChild(li);
};
// mudar cor de fundo
function colorBackground(event) {
  document.body.style.backgroundColor = event.target.style.backgroundColor;
  if (event.target.style.backgroundColor !== "white") {
    document.querySelector(".imagem").style.boxShadow = "0 0 15px lightgray";
    console.log(document.querySelector(".imagem").style.boxShadow.color);
  } else {
    document.querySelector(".imagem").style.boxShadow = "0 0 15px";
  }
}

function menu() {
  let tes = document.createElement("li");
  tes.innerText = "asdaad";
  document.querySelector(".conf").appendChild(tes);
  document.querySelector(".aside").style.visibility = "visible";
}
