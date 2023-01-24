//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//

// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//

//
// fetch('data.json')
// .then(response => response.json())
// .then(data => {
//   let div = document.getElementById("miDiv");
//   for(let i = 0; i < data.length; i++){
//     let p = document.createElement("p");
//     p.innerHTML = data[i].name;
//     div.appendChild(p);
//   }
// });

// import pokemon from '../data/pokemon/pokemon.js';
// // console.log(pokemon);
//
//Se crea función para las barajas
// const Card = () => {
  //Variable que almacena los datos de cada carta
  // const dataItems = pokemon.items;
//   //Variable que duplica las cartas
//   const dobleData = pokemon.concat(dataItems);
// let i = dobleData.length;
//   do {
//     // console.log(i);
//   } while (--i > 0);
  
// }
//  Card();


const App = () => {
  
 
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Pokemon!';


//extraemos la api json con fetch y con map extraemos data que usaremos con un parametro.
fetch('./data/pokemon/pokemon.json')
.then((resp)=> resp.json())
.then((data)=>{
console.log(data.items);

data.items.map((items)=>{
  const content = document.createElement("div");
  content.className = 'Card';
  content.innerHTML = `
  <h2>${items.id}</h2>
  <img src="${items.image}"</img>
  `;
  el.appendChild(content);
});



});



    
  
 
  
  
  
  
    
  

 
  
  
  
  
  return el;
};

export default App;
