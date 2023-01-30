const App = () => {
  const el = document.createElement("div");

  el.className = "App";

  //extraemos la api json con fetch y con map extraemos data que usaremos con un parametro.
  fetch("./data/pokemon/pokemon.json")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.items);
//recorremos la data con map y creamos un nuevo parametro  items donde guardamos la data
      data.items.map((items) => {
        const card1 = document.createElement("div");//creamos elemetos en DOM
        card1.className = "Card";
        card1.innerHTML = `
  <h2>${items.id}</h2>
  <img src="${items.image}"</img>
  `;
        el.appendChild(card1);
        const card2 = document.createElement("div");
        card2.className = "Card2";

        card1.appendChild(card2);

        let rotation = 0;
        const card = card1;
        card.addEventListener("click", function () {
          rotation += 180;
          card.style.transform = `rotateY(${rotation}180deg)`;
        });
      });
    });

  return el;
};

export default App;
