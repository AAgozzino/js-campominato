// Var debug - livello
var livello = parseInt(prompt("Scegli il tuo livello di difficoltà inserendo 0, 1 o 2"));
var celle;
var bombe = 16

switch (livello) {
  case 0:
    celle = 100;
    break;
  case 1:
    celle = 80;
    break;
  case 2:
    celle = 50;
    break;
  default:
    celle = 17;
};

var tentativi = celle - bombe;

//FUNZIONE - Generatore numeri casuali da 1 a 100
function numGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//FUNZIONE - Check element in array
function elementInArray(element, array) {
  var trovato = false;
  var i = 0;
  while (i < array.length && trovato == false) {
    if (array[i] == element) {
      trovato = true;
    }
    i++
  }
  return trovato;
}

// Genero 16 numeri da 1 a 100
//I numeri devono essere tutti diversi
var listaNumRandomPc = [];

for (var i = 0; listaNumRandomPc.length < bombe; i++) {
  var numRandom = numGenerator(1, celle);
  var checkElement = elementInArray(numRandom, listaNumRandomPc);
  if (checkElement == false) {
    listaNumRandomPc.push(numRandom);
  };
  console.log(numRandom);
};
console.log(listaNumRandomPc);


//Continuo a chiedere all'utente un numero tra 1 e 100 finché
// lunghezza lista numeriUtente == 84
  //I numeri devono essere tutti diversi
  //I numeri devono essere compresi tra 1 e 100
  // numeroUtente == numeroPC -> break
var listaNumUtente = [];
var numeroUtente;
var bombaEsplosa = false

while (listaNumUtente.length < tentativi && bombaEsplosa == false) {
  numeroUtente = parseInt(prompt("Inserisci un numero da 1 a " + celle));
  var checkInArray = elementInArray(numeroUtente, listaNumUtente);
  var checkBomb = elementInArray(numeroUtente, listaNumRandomPc);
  if (numeroUtente < 1 || numeroUtente > celle || isNaN(numeroUtente) == true) {
    alert("Attenzione: Inserisci un numero tra 1 e " + celle);
  } else if (checkInArray == true) {
    alert("Attenzione: numero già inserito!!!");
  } else if (checkBomb == true) {
    bombaEsplosa = true
  }else {
    listaNumUtente.push(numeroUtente);
  };
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
