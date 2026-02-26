//oppg1
console.log(5 > 3) //true

console.log(5 < 3) //false

console.log(10 > 10)//false

console.log(10 >= 10)//true

console.log(8 <= 12)// true

//oppg.2

console.log(4 >= 5) // false

console.log(7 <= 7) //true

console.log(9 <= 4) //false

console.log(6 > 2) //true

// < > er større enn mindre enn. Den variabelen som blir set på av munnen av > er den større. eller i denne casen den som skal være større. 
// hvis >< har en = etter seg betyr det at den kan enten være lik, eller støøre/mindre. <=

//opp.3

console.log(5 == 5) //true

console.log(5 == "5") //true

console.log(5 === "5") //false

console.log(5 != 4) //true

console.log(5 !== "5") // true

//== og ===
//to erlik sier noe om verdien av variablene. tre erlik sier noe om datatypen til variablene
// != og !==
//! er motsatt så de gjør at != bli at disse to ikke er like. !== gjør det samme bare med datatyper. Dette gjør at svaret blir true hvis de ikke er like.

//oppg.4

console.log(5 > 3 && 10 > 5)//true

console.log(5 > 3 && 10 < 5)//false

console.log(7 >= 7 && 2 < 5)//true

console.log(4 < 2 && 3 > 1) //false
//begge variablene på hver sine side av og må være sanne for at det skal bli sant. 


// oppg.5

console.log(5 > 3 || 10 > 5) //true

console.log(5 > 3 || 10 < 5)//true

console.log(7 < 7 || 2 < 1)//false

console.log(4 < 2 || 3 > 1)//true 
//Bare en side må være sann for at eller skal gi sann. 

//oppg.6

console.log(5 > 3 && 10 > 5 || 2 === 2)//true.    

console.log(4 < 2 && 3 > 1 || 10 === 10)//true.         

console.log(5 === 5 && 3 > 10 || 8 < 12)// true

//og skjer først så det blir ogen eller 2===2 som da blir sant. Paranteser kan bli brukt for å vlege hva som skal skje først. Paranteser løses først så hadde vi tatt parantes rundt eller
//så hadde det vært 5 > 3 og svaret av eller som måtte være sant.