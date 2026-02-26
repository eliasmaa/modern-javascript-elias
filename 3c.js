// Elev Elevesen - Oppgavesett 3c Operatorer og datatyper 
console.log("Elev Elevesen - Oppgavesett 3c Operatorer og datatyper");

//oppg2
console.log(5 + 5);

console.log(10 + 20);
//her legges sammen to og to numbers som skaper en ny verdi. siden det er bare tall i parantesen legges det sammen på vanlig matte måte. 
// Her blir det 10 og 30

//oppg3
console.log("5" + "5");

console.log("Hei " + "verden")
//her siden femerne er i "" blir de til strings og strings legges ved siden av hverandre i console.log så da blir det femfem fordi string er bokstaver.
// I den andre ser vi to strings som har tekst da blir de til Heiverden.

//oppg4
console.log("5" + 5);

console.log(5 + "5");

console.log("Tall: " + 5 + 5);

console.log("Sum: " + (5 + 5));
//siden et tall er string og det andre er number kan de ikke plusses sammen normalt, så da blir de to første fem5, eller 5fem.
// Forskjellen på "" og uten er at med så blir de til string og må skrives med bokstaver.
//I den tredje ser vi en string med bokstaver og to tall i en parantes, ingen fler. Da får ikke number lov til å følge matte regler og må følge reglene av string ved å sette etter hverandre.
//Siden de ikke er string selv må de ikke skrives i bokstaver da. Svaret i nummer tre blir da Tall55
//I den siste er 5+5 i en egen parantes i felles parantesen med stringen. Alltid må den innerste parantesen løses først så derfor får femerne lov til å følge matte regler å ålusse sammen til 10.
//Dette skjer fordi Stringen er ikke med i equationen enda. I den fjerde og siste blir svaret Sum10


//oppg5


// console.log("10" - "5");

// console.log("10" * "2");

// console.log("10" / "2");

// console.log("10" - 3);

// console.log("10" * 3);

// console.log("10" / 3);
//string tallene reverterer tilbake til numbers også kan de løses som normal matte. dette skjer på hver av disse consolelogsa selvom bare en er en string.


//oppg6

//console.log("Hei" - "der");

// console.log("Hei" * 3);

// console.log("Hei" / 2);

//Hva skjer når du prøver å bruke matematiske operatorer på tekst som ikke er tall? Hva betyr verdien NaN?
// Du vil få error NAN. NaN betyr not a number




//oppg7

let a = 10;

a += 5;

console.log(a);


let b = "Hei";

b += " verden";

console.log(b);

//Hva gjør += når variabelen er et tall, og hva gjør den når variabelen er tekst?
// med tall så legger den på seg så så mye ekstra, mens med tekst setter den på den nye teksten i den gamle = hei verden

//oppg8


//Lag egne eksempler der du kombinerer tall og tekst med +, -, * og /. Noter hva som skjer, og forklar hvorfor du tror resultatet blir som det blir.

let hallo = "hei"
console.log("3"+hallo-1)
// her får man nan som er not a number