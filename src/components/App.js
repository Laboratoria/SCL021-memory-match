//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 import pokemon from '../data/pokemon/pokemon.js';
 console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

const App = () => {
  const baraja = pokemon.items;
  console.log(baraja);
  const el = document.createElement("div");
  for (let i = 0; i < baraja.length; i++) {
   console.log(baraja[i].image)
   
    //const el = document.createElement('div');
    el.className = 'memory-card';
    const frontFace = document.createElement('img');
    frontFace.className = "front-face";
    frontFace.src = baraja[i].image 
  
    const backFace = document.createElement('img');
    backFace.className = "back-face";
    backFace.src = "https://img.game.co.uk/assets/features/hubs/pokemon/backCover.png"
    el.appendChild(frontFace);
    el.appendChild(backFace);

  }



  return el;
};
export default App;
 
