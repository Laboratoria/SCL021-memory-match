import App from "./App.js";

/*describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});*/

//Test de app
describe("App", () => {
  it("should render without crashing", () => {
    const cardContainer = App();
    expect(cardContainer instanceof HTMLElement).toBe(true);
  });

  it("número de cartas en el juego", () => {
    let cards = App().getElementsByClassName("card");
    expect(cards).toHaveLength(14);
  });

  it.only("Cuando le den click a una cata se le debe agregar las clases flip y flipped", () => {
    // DADO - context necesario para realizar prueba (mocks, agregar elementos al DOM...)
    const root = document.createElement("div");
    root.id = "root";
    document.body.append(root);
    document.getElementById("root").appendChild(App());

    // CUANDO - la ejecucion del codigo que estamos probando
    const card = document.querySelector(".card");
    card.click();

    // ENTONCES - los resultados esperados (expects)
    const cardHasFlipClass = card.classList.contains("flip");
    const cardHasFlippedClass = card.classList.contains("flipped");
    expect(cardHasFlipClass).toBe(true);
    expect(cardHasFlippedClass).toBe(true);
  });

  it("Cuando le den click a dos cartas con el mismo id se deben quedar con la clase flip", () => {});

  it("Cuando le den click a dos cartas con el diferente id se les debe quitar clase flip y flipped", () => {});

  it("Cuando le den click al boton facil deben ver las cartas", () => {});
});
