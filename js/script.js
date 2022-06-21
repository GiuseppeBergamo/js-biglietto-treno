console.log("JS OK")


/*
1- chiedo numero km
2- chiedo età
3- calcolare il prezzo del biglietto
4- se minorenne, sconto del 20%
5- se over 65, sconto del 40%
6- output prezzo 
*/


const finalPrice = document.getElementById("final-price");

const numberKm = prompt("Quanti km vuoi percorrere?");
console.log(numberKm);

const age = prompt("Quanti anni hai?");
console.log(age);

let price = (numberKm * 0.21).toFixed(2);
console.log(price);

let minorPrice = (price / 100) * 20;


let overPrice = (price / 100) * 40;




if (age < 18) {
    price = (price - minorPrice).toFixed(2);
    console.log(price);


} else if (age > 65) {
    price = (price - overPrice).toFixed(2);
    console.log(price);

} else if (age > 18 && age < 65) {
    price = price;

}

finalPrice.innerHTML = `Il prezzo del tuo biglietto è: <strong>${price}</strong>!`;