function encriptar() {
  var texto = document.getElementById("texto").value.toLowerCase();
  var textoencriptado = texto.replace(/e/gim, "enter");
  var textoencriptado = textoencriptado.replace(/o/gim, "ober");
  var textoencriptado = textoencriptado.replace(/i/gim, "imes");
  var textoencriptado = textoencriptado.replace(/a/gim, "ai");
  var textoencriptado = textoencriptado.replace(/u/gim, "ufat");

  var contenedor = document.getElementById("texto-poner");
  var p = document.createElement("p");

  var frase = document.createTextNode(textoencriptado);
  p.appendChild(frase);
  btnCopiar.disabled = false;
  btnCopiar.style.background = "white";
  btnCopiar.style.color = "black";
  p.id = "valor";
  contenedorestilos(contenedor, p);
  estilosApp();
  document.getElementById("imagen").style.display = "none";

  document.getElementById("estilosbtn").style.height = "30%";
  document.getElementById("estilosbtn").style.width = "100%";

  p.style.width = "100%";
  p.style.textAlign = "left";
  btnCopiar.style.width = "70%";
  btnCopiar.style.margin = "45px auto";

  btnCopiar.style.display = "inherit";
}

function contenedorestilos(contenedor, p) {
  contenedor.style.padding = "20px";
  contenedor.style.textAlign = "left";
  contenedor.style.height = "85%";
  contenedor.style.alignItems = "start";
  contenedor.innerHTML = "";
  contenedor.appendChild(p);
}
function estilosApp() {
  document.getElementById("app").style.flexDirection = "row";
  document.getElementById("app").style.alignItems = "start";
  document.getElementById("app").style.justifyContent = "start";
  document.getElementById("app").style.flexDirection = "column";
}

function desencriptar() {
  btnCopiar.disabled = false;
  btnCopiar.style.background = "white";
  btnCopiar.style.color = "black";
  var texto = document.getElementById("texto").value.toLowerCase();
  var textoencriptado = texto.replace(/enter/gim, "e");
  var textoencriptado = textoencriptado.replace(/ober/gim, "o");
  var textoencriptado = textoencriptado.replace(/imes/gim, "i");
  var textoencriptado = textoencriptado.replace(/ai/gim, "a");
  var textoencriptado = textoencriptado.replace(/ufat/gim, "u");

  var contenedor = document.getElementById("texto-poner");
  var p = document.createElement("p");
  var frase = document.createTextNode(textoencriptado);
  p.appendChild(frase);
  contenedor.innerHTML = "";
  contenedor.appendChild(p);
  p.style.width = "100%";
  p.style.textAlign = "left";
}

var btnEncriptar = document.querySelector("#encriptar");
btnEncriptar.onclick = encriptar;
var btnDesencriptar = document.querySelector("#desencriptar");
btnDesencriptar.onclick = desencriptar;
var btnCopiar = document.querySelector("#copiar");
btnCopiar.onclick = copiar;

function copiar() {
  var contenido = document.getElementById("valor");
  var rango = document.createRange();
  rango.setStart(contenido, 0);
  rango.setEnd(contenido, contenido.childNodes.length);
  var seleccion = window.getSelection();
  seleccion.removeAllRanges();
  seleccion.addRange(rango);
  document.execCommand("copy");
  btnCopiar.style.background = "green";
  btnCopiar.style.color = "white";
  btnCopiar.disabled = true;
}
