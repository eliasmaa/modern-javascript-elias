//oppg1. 
// For: Lar deg velge hvor mange ganger du vil at noe skal runne.
// While: Kjører til det er usant. Brukes hvis du ikke vet hvor mange ganger noe skal runnes.
// Do...While: Kjører engang uten å sjekke så etter det sjekker den.
// for...in: Går igjennom nøkler i et objekt
// for..of   Går igjennom objekter  

//oppg.2
const navneliste = ['Geir', 'Espen', 'Ellen', 'Erik', 'Lars', 'Gunnar', 'Oda', 'Nina', 'Tine', 'Henrik', 'Agnethe'];

for (let i = 0; i < navneliste.length; i = i + 1) {
  console.log(navneliste[i] + " har " + navneliste[i].length + " bokstaver");
}
// bruker for fordi jeg vet hvor mange ganger den skal kjøre.


//oppg.3   
const navneliste2 = ['Geir', 'Espen', 'Ellen', 'Erik', 'Lars', 'Gunnar', 'Oda', 'Nina', 'Tine', 'Henrik', 'Agnethe'];

for (let i = navneliste.length - 1; i >= 0; i--) {
  console.log(navneliste2[i] + " har " + navneliste2[i].length + " bokstaver"); 
}
//jeg går fortsatt for samme løkke for samme grunn nå er den bare baklengs

//oppg.4
function reduceToOddNumber(number){

if(typeof(number) == 'number'){

 number = number / 2;

    
    while (number % 2 === 0) {
      number = number / 2;
    }

    return number;
  }
}

let resultat = reduceToOddNumber(4);  
console.log("Ferdig! Resultatet er", resultat);

//opp.5
//null peiling kjønte ikke loops så godt og hva de forksjellige gjør. men skal lævre meg det senere søke det opp, men nå har jeg ikke tid til det ligger litt bak kjema.
