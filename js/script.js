// Var debug
var bombe = 10
var tentativi = 5
// Genero 16 numeri da 1 a 100
//I numeri devono essere tutti diversi
var listaNumRandomPc = [];

for (var i = 0; listaNumRandomPc.length < bombe; i++) {
  var numRandom = Math.floor(Math.random() * 100) + 1;
  if (listaNumRandomPc.indexOf(numRandom) == -1) {
    listaNumRandomPc.push(numRandom);
  };
  console.log(numRandom);
};
console.log(listaNumRandomPc);


//Continuo a chiedere all'utente un numero tra 1 e 100 finché
// numeroUtente == numeroPC
// lunghezza lista numeriUtente == 84
  //I numeri devono essere tutti diversi
  //I numeri devono essere compresi tra 1 e 100
var listaNumUtente = [];
var numeroUtente
var i = 0;

while (listaNumUtente.length < tentativi && listaNumRandomPc.indexOf(numeroUtente) == -1) {
  numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  if (numeroUtente < 1 || numeroUtente > 100) {
    alert("Attenzione: Inserisci un numero tra 1 e 100!!!");
  } else if (listaNumUtente.indexOf(numeroUtente) >= 0) {
    alert("Attenzione: numero già inserito!!!");
  } else {
    listaNumUtente.push(numeroUtente);
  };
  i++;
};
console.log(listaNumUtente);

//Comunicare il punteggio == lunghezza lista numeriUtente
  // Se listaNumUtente.length == tentativi -> HAI VINTO
  // Altrimenti -> HAI PERSO - il tuo livello è listaNumUtente.lenght -1
var livello = listaNumUtente.length - 1;
if (livello == tentativi) {
  console.log("HAI VINTO!!!");
} else {
  console.log("HAI PERSO - Il tuo livello è: " + livello);
};
