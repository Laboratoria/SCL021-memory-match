import App from "./components/App.js";

document.getElementById("root").appendChild(App());

//Vista 2 - sección Fácil
document.getElementById("facil").addEventListener("click", vistados);
function vistados() {
  //document.getElementById('header').style.display = "none";
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("facilSection").style.display = "block";
  //document.getElementById('facilSection').style.display = "block";
  //document.getElementById('medioSection').style.display = "none";
  //document.getElementById('DificilSection').style.display = "block";
  document.getElementById("game").style.display = "block";
  //let facil = 3;
  //document.getElementById('footer').style.display = "block";
}
//Vista 3 - sección Medio
document.getElementById("medio").addEventListener("click", vistatres);
function vistatres() {
  //document.getElementById('header').style.display = "none";
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("medioSection").style.display = "block";
  //document.getElementById('DificilSection').style.display = "block";
  document.getElementById("game").style.display = "block";
  //let medio = 5;
  //document.getElementById('footer').style.display = "block";
}
//Vista 4 - sección Dificil
document.getElementById("dificil").addEventListener("click", vistacuatro);
function vistacuatro() {
  //document.getElementById('header').style.display = "none";
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("dificilSection").style.display = "block";
  document.getElementById("game").style.display = "block";
  //let dificil = 7;
  //document.getElementById('footer').style.display = "block";
}
