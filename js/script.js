/* STEPS esercizio:

1- Chiedere numero dei chilometri da percorrere
2- Chiedere l'età del passeggero
3- Calcolo prezzo del biglietto (0.21 *n km)
4- Condizione: applicare sconto del 20% per età < 18
5- Condizione: applicare sconto del 40% per età > 65
6- Stampare prezzo con max 2 decimali

*/

// STEPS 1-2:

var distance = parseInt(prompt('Quanti chilometri devi percorrere?'));

var age = parseInt(prompt("Età del passeggero?"));


// STEP 3: 

var fullPrice = distance * 0.21;

// STEP 4-5:


var discount20 = (fullPrice * 20) / 100; 
var discount40 = (fullPrice * 40) / 100;

var price;
var price;

if (age < 18) {
    price = fullPrice - discount20;
}

else if (age > 65) {
    price = fullPrice - discount40;    
} 

else {
    price = fullPrice;
}


// STEP 6:

document.getElementById('ticketPrice').innerHTML = price.toFixed(2);

// console check:

console.log("Distanza in KM:" + " " + distance);
console.log("Età cliente:" + " " + age);
console.log("Prezzo intero:" + " " + fullPrice);
console.log("Sconto 20%:" + " " + discount20);
console.log("Sconto 40%:" + " " + discount40);
console.log("Prezzo finale:" + " " + price);
