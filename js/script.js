// Genero 16 numeri da 1 a 100
//I numeri devono essere tutti diversi
var listaNumRandomPc = [];

for (var i = 0; listaNumRandomPc.length < 10; i++) {
  var numRandom = Math.floor(Math.random() * 100) + 1;
  if (listaNumRandomPc.indexOf(numRandom) == -1) {
    listaNumRandomPc.push(numRandom);
  };
  console.log(numRandom);
};
console.log(listaNumRandomPc);


//Chiedo all'utente di inserire 84 numeri compresi tra 1 e 100
//I numeri devono essere tutti diversi
var listaNumUtente = [];
var numeroUtente
var i = 0;

while (listaNumUtente.length < 5 && listaNumRandomPc.indexOf(numeroUtente) == -1) {
  numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  listaNumUtente.push(numeroUtente);
  i++;
};
console.log(listaNumUtente);

//

// do {
//   numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
//   listaNumUtente.push(numeroUtente);
//   i++;
// } while (listaNumUtente.length < 5 || listaNumRandomPc.includes(numeroUtente) == false);

//Continuo a chiedere all'utente un numero tra 1 e 100 finché
// numeroUtente == numeroPC
// lunghezza lista numeriUtente == 84

//Comunicare il punteggio == lunghezza lista numeriUtente
