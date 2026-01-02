//oppg.1


{

const i = 10;

console.log(`i = ${i}`);


}
// i = 10
//her får jeg svaret i = 10 fordi i er constant 10, men i console log så er den første i-en skrivd ut som tekst på grunn av hermetegn, mens i nummer to er i en kode som alltid viser verdien.
//verdien er jo da 10 så 1 = 10

//Oppgave 2

const x = 10;

{

console.log(`i = ${x}`);

}
// i =10
//her skjer det samme som sist bare at i ikke er variabel men heller x.


//Oppgave 3

// {

// const y = 10;
// }

// console.log(`y = ${y}`);

// vi får ingen svar fordi krøllparantesen glemmer å ta med console log. Dette gjør sånn at koden ikke vet at const 10 tilhører console loggen. 



//Oppgave 4

let z;

{

z = 10;

//utskrift a) 

console.log(`z = ${z}`);

}

//utskrift b)

console.log(`z = ${z}`)

//ut a er: z = 10
//ut b er: z = 10
//svaret blir det samme og begrunnelsen er lik som hvert andre svar før. Eneste forskjell er at utskrift b er åpen så du kan fortsette å skrive noe etter det. I utskrift a er den lukket 
//med både } og ;


//Oppgave 5

let a;

fubar();

console.log(`a = ${a}`);


function fubar(){

a =2;

}
//denne koden kjører nedover cascading med en exeption, det er at function fubar runner først gjennom fubaren som er under let. Den leter ettet hva fubar skal være også finner den nederst at 
//fubar er a =2; . Derfor får a sin verdi inni console log som blir til a = 2 skrevet ut.



//Oppgave 6

let b = 10;


add(b, 5);

console.log(b);


function add(c, d){

let result = c + d;

console.log(result);

}

// Dette blir to utskrifter: 15, 10.  først så får vi femten fordi b erlik 10. så kommer vi til add som drar oss ned til function linjen som sier c, d. i første add linje 
// i linje 90 ser vi at
// c=b som er 10, og d erlik 5.
//i function så regner vi ut result som c + d. dette blir da 15. også console log for å skrive ut resultat=15
//så går vi opp igjen til linje 90 eller den første ad linjen. siden vi har løst dengår vi ned til neste linje som er console log b så da må vi skrive ut b som er 10. 
// derfor får vi 15 først også 10.

