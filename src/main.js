import App from "./components/App.js";

document.getElementById("root").appendChild(App());
//var dificultad = 0;
//Vista 2 - sección Fácil
document.getElementById("facil").addEventListener("click", vistados);
function vistados() {
  //Incluido Usuario
  let user = document.getElementById("name").value;
  document.getElementById("hiEs").innerText = "Bienvenido, " + user;
  document.getElementById("containerCover1").style.display = "none";
  document.getElementById("easySection").style.display = "block";
  document.getElementById("game").style.display = "block";
  //dificultad = 1;
  //return dificultad;
  //document.getElementById('footer').style.display = "block";
}

//Vista 3 - sección Medio
document.getElementById("medio").addEventListener("click", vistatres);
function vistatres() {
  //Incluido Usuario
  let user = document.getElementById("name").value;
  document.getElementById("hiMs").innerText = "Bienvenido, " + user;
  document.getElementById("containerCover1").style.display = "none";
  document.getElementById("mediumSection").style.display = "block";
  document.getElementById("game").style.display = "block";
  //let medio = 5;
  //document.getElementById('footer').style.display = "block";
  //dificultad = 2;
  //return dificultad;
}
//Vista 4 - sección Dificil
document.getElementById("dificil").addEventListener("click", vistacuatro);
function vistacuatro() {
  //Incluido Usuario
  let user = document.getElementById("name").value;
  document.getElementById("hiHs").innerText = "Bienvenido, " + user;
  document.getElementById("containerCover1").style.display = "none";
  document.getElementById("hardSection").style.display = "block";
  document.getElementById("game").style.display = "block";
  //let dificil = 7;
  //document.getElementById('footer').style.display = "block";
  //dificultad = 3;
  //return dificultad;
}

/*function ganaste() {
    document.getElementById("game").style.display = "none";
        document.getElementById("facilSection").style.display = "none";
        document.getElementById("medioSection").style.display = "none";
        
      document.getElementById("dificilSection").style.display = "none";
       document.getElementById("ganaste").style.display = "block";
  
}*/
