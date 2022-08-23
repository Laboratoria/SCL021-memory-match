//Funcion ganaste
const celebracion = () => {
  sonidovictoria();
};
//SonidoVictoria
export const sonidovictoria = () =>
  new Audio("utilities/sounds/congrats.mp3").play();

export default celebracion;
