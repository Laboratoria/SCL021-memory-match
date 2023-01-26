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
  const card1 = document.createElement("div");
  card1.className = 'Card';
  card1.innerHTML = `
  <h2>${items.id}</h2>
  <img src="${items.image}"</img>
  `;
  el.appendChild(card1);
  const card2 = document.createElement("div");
  card2.className = 'Card2';




  card1.appendChild(card2);
});



});



    
  
 
  
  
  
  
    
  

 
  
  
  
  
  return el;
};

export default App;