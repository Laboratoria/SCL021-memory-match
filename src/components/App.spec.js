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
});
