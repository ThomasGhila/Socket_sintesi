function preload() {
  audio = new Audio("assets/AphexTwin.mp3");
}

// tieni traccia dell'indice dell'array
let arrayIndex = 0;
// array domande
const domande = [pageA];
// initialize socket variable on client
const socket = io();

// ascolta il saluto del server
socket.on("greetings", (message) => {
  // stampa il messaggio in console
  console.log(message);
});
domande[arrayIndex]();
// audio.play();

// cambio domanda quando si preme un bottone
socket.on("buttonPressed", () => {
  audio.pause();
  audio.currentTime = 0;

  if (arrayIndex === domande.length - 1) {
    arrayIndex = 0;
  } else {
    arrayIndex++;
  }
  console.log("nuova domanda", domande[arrayIndex]);
  domande[arrayIndex]();
  audio.play();
});
