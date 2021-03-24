/****************************
     SURNAME LIST
****************************/

// 1. Chiedi all’utente il cognome
// 2. Inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
// 3. Stampa la lista ordinata alfabeticamente
// 4. Scrivi anche la posizione "umana"
// 5. Stampa in html


// 1. Chiedi all'utente il cognome
var surname = prompt("What's your last name?").toLowerCase().trim();
console.log("last name: " + surname);

// 2. Inserimento in un array con altri cognomi
var list = ["rossi", "ferrari", "bianchi", "verdi", "fontana"];
list.push(surname);

// 3. Lista ordinata alfabeticamente
console.log(list.sort());

// 4. Posizione "umana" degli elementi 
var numberPosition = (list.indexOf(surname) + 1);
console.log("Your position is the number: " + numberPosition);

// 5. Stampa in html
var items = "";
for (var i = 0; i < list.length; i++) {

    items += "<li>" + list[i] + "</li>";

}

document.getElementById("surname-list").innerHTML = items;
document.getElementById("position").innerHTML = 'Your position is the number: ' + numberPosition;