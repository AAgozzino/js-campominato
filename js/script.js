// Var debug
var celle = 100
var bombe = 16;
var tentativi = celle - bombe;

//FUNZIONE - Generatore numeri casuali da 1 a 100
function numGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
};

//FUNZIONE - Check element in array
function elementInArray(element, array) {
  return array.indexOf(element);
}
// Genero 16 numeri da 1 a 100
//I numeri devono essere tutti diversi
var listaNumRandomPc = [];

for (var i = 0; listaNumRandomPc.length < bombe; i++) {
  var numRandom = numGenerator(1, 100);
  var checkElement = elementInArray(numRandom, listaNumRandomPc);
  if (checkElement == -1) {
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

// && listaNumRandomPc.indexOf(numeroUtente) == -1
while (listaNumUtente.length < tentativi) {
  numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  var checkDouble = elementInArray(numeroUtente, listaNumUtente);
  var checkBomb = elementInArray(numeroUtente, listaNumRandomPc);
  if (numeroUtente < 1 || numeroUtente > 100 || isNaN(numeroUtente) == true) {
    alert("Attenzione: Inserisci un numero tra 1 e 100!!!");
  } else if (checkDouble >= 0) {
    alert("Attenzione: numero già inserito!!!");
  } else if (checkBomb != -1) {
    break;
  }else {
    listaNumUtente.push(numeroUtente);
  };
  i++;
};
console.log(listaNumUtente);

//Comunicare il punteggio == lunghezza lista numeriUtente
  // Se listaNumUtente.length == tentativi -> HAI VINTO
  // Altrimenti -> HAI PERSO - il tuo livello è listaNumUtente.lenght
if (listaNumUtente.length == tentativi) {
  console.log("HAI VINTO!!!");
} else {
  console.log("HAI PERSO - Il tuo livello è: " + listaNumUtente.length);
};
