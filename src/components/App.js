//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
////
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);

import comics from "../data/comics/comics.js";
console.log(comics);
const comicsCard = comics.items;
const doubledCards = comicsCard.concat(comicsCard);

const App = () => {
  //Creación de container y sus atributos
  const el = document.createElement("div");
  el.setAttribute("class", "container");
  el.setAttribute("id", "cardContainer");

  return el;
};
/*apuntes: 
Crear un elemento:  document.createElement("elemento")
Escribir texto en un elemento: element.textContent = "texto"
Escribir  HTML en un elemento: element.innerHTML=codigo HTML
Añadir un elemento al DOM: parent.appendChild(element)
Establece el valor de un atributo en el elemento indicado: Element.setAttribute(name, value) y para 
   obtener el valor actual de un atributo, se utiliza getAttribute()
La propiedad de sólo lectura Element.classList devuelve una colección activa de DOMTokenList de los atributos de clase del elemento.
  Element.classList
*/
/*
const App = () => {
  const el = document.createElement("div");

  el.className = "App";
  el.textContent = "Bienvenido!";
  */

/*const divCards = document.createElement("div");
  divCards.textContent = "Soy hijo de el";

  for (let i = 0; i < 12; i++) {
    const pElement = document.createElement("p");
    pElement.textContent = "p " + i;
    divCards.appendChild(pElement);
  }

  el.appendChild(divCards);* /

  return el;
};*/

export default App;
