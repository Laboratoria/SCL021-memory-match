const App = () => {
  // EL ES EL DIV PADRE
  const el = document.createElement("div");

  el.className = "App";

  //extraemos la api json con fetch y con map extraemos data que usaremos con un parametro.
  fetch("./data/pokemon/pokemon.json")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.items);
      //recorremos la data con map y creamos un nuevo parametro  items donde guardamos la data
      data.items.map((items) => {
        // creamos img en DOM e insertamos nodo en html
        const cara = document.createElement("img");
        cara.setAttribute("src", "./img/pokeeee.jpg");
        cara.className = "Card2";
        el.appendChild(cara);

        // funcion para girar IMG con un click
        let rotations = 0;
        const img = cara;
        img.addEventListener("click", function () {
          rotations += 180;
          img.style.transform = `rotateY(${rotations}180deg)`;
        });

        //clonamos img
        var cloneImg = img.cloneNode(true);
        el.appendChild(cloneImg);
        //rotamos div clonados
        let girar = 0;
        const clonI = cloneImg;
        clonI.addEventListener("click", function () {
          girar += 180;
          clonI.style.transform = `rotateY(${girar}180deg)`;
        });
        //creamos DIV DE POKEMONES en DOM
        const atras = document.createElement("div");
        atras.className = "Card";
        atras.innerHTML = `
  <img src="${items.image}"</img>
  `;

        el.appendChild(atras);

        //Rotamos div ATRAS
        let rotation = 0;
        const Card2 = atras;
        Card2.addEventListener("click", function () {
          rotation += 180;
          Card2.style.transform = `rotateY(${rotation}180deg)`;
        });

        //clonamos div ATRAS
        var cloneDiv = atras.cloneNode(true);
        el.appendChild(cloneDiv);
        //rotamos div  ATRAS clonado
        let rotar = 0;
        const clon = cloneDiv;
        clon.addEventListener("click", function () {
          rotar += 180;
          clon.style.transform = `rotateY(${rotar}180deg)`;
        });
      });
    });

  return el;
};

export default App;
