// Genero 16 numeri da 1 a 100
//I numeri devono essere tutti diversi
var numRandomPc = [];
var i = 0;

while (numRandomPc.lenght < 16) {
  var numRandom = Math.floor(Math.random() * 100) + 1;
  numRandomPc.push(numRandom);
  i++;
}

console.log(numRandomPc);

//Chiedo all'utente di inserire 84 numeri compresi tra 1 e 100
//I numeri devono essere tutti diversi

//Continuo a chiedere all'utente un numero nuovo finché
// numeroUtente == numeroPC
// lunghezza lista numeriUtente == 84

//Comunicare il punteggio == lunghezza lista numeriUtente
