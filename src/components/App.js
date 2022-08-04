//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
 import pokemon from '../data/pokemon/pokemon.js';
 //console.log(pokemon);
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
  //console.log(baraja);

var barajaDoble = baraja.concat(baraja);

function shuffle() {
  barajaDoble.sort(() => Math.random() - 0.5);
}
shuffle();

const board = document.createElement("div");
board.className = "board";


  //const el = document.createElement("div");
  for (let i = 0; i < barajaDoble.length; i++) {
    const card = document.createElement("div");
    card.className = "card";
    board.appendChild(card);

   //console.log(baraja[i].image)

   const cardBack = document.createElement("div");
    cardBack.className = "cardBack";
    

      
    
    card.appendChild(cardBack);
 

   const backImage = document.createElement("img");
    backImage.className = "pkmn";
    backImage.src = barajaDoble[i].image;
    backImage.id = barajaDoble[i].id;
    cardBack.appendChild(backImage);
   
    const cardFront = document.createElement("div");
    cardFront.className = "cardFront";
    card.appendChild(cardFront);

    const cardImage = document.createElement("img");
    cardImage.alt = "pokeball";
    cardImage.className = "image";
    cardImage.src = "https://img.game.co.uk/assets/features/hubs/pokemon/backCover.png";
    cardFront.appendChild(cardImage);
    cardImage.onclick = () => {
      console.log(baraja[i].image)
      cardImage.classList.add ("hide")
    }
  }
   
   return board;
   
   
   
    /* const el = document.createElement('div');
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



  return el; */
  }
export default App;

