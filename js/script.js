/*
Un alert() espone 5 numeri generati casualmente.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// faccio un array con 5 numeri random
var randomNumber = [];

while(randomNumber.length<5){
    var valore = Math.floor(Math.random()*100 +1);
    if (randomNumber.includes(valore) == false){//if(!randomNumber.includes(valore)) posso scrivere anche cosi e la stessa cosa
        randomNumber.push(valore);
    }
}

// mostro il contenuto dell'array con un alert
var conf = alert('Memorizza questi numeri '+ randomNumber);

var userNumbers = [];
var winNumbers = []

setTimeout(function() {
  for (i = 0; i < 5; i++) {
    var numbers = parseInt( prompt('Inserisci uno dei cinque numeri memorizzati') );
    
    while ( isNaN(numbers) || numbers < 1 || numbers > 100 ) {
      numbers = parseInt( prompt('Prego, inserisci un numero valido da 1 a 100') );
    };

    if ( !userNumbers.includes(numbers) ) {
      userNumbers.push(numbers);
    }
    
    if ( randomNumber.includes(numbers) ) {
      winNumbers.push(numbers);
    }
  };

  console.log('Numeri da memorizzare: ' + randomNumber);
  console.log('I numeri che hai inserito sono: ' + userNumbers);
  
  if (winNumbers.length == 0) {
    alert('Hai indovinato 0 numeri! GAME OVER');
    console.log('Hai indovinato 0 numeri! GAME OVER');
  }
  else {
    alert('Hai indovinato: ' + winNumbers.length + ' numeri.');
    console.log('Hai indovinato ' + winNumbers.length + ' numeri.');
  }
  
}, 30000);

// Funzioni
function randomNumbers(max) {
  return Math.floor( Math.random() * max ) + 1;
};