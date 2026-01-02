//oppg.1
//hensikten med en funskjon er å kunne enkelt skrive en kode engang også bare skrive den lille funskjonen hver gang du trenger den store koden. blir mye mer ryddig.

//oppg.2
// a) 


foo()

console.log("Etter hello world")

function foo(){
    console.log("Hello World!");
}

// b) et funksjonsskall er en instrukjon for å gjøre en bestemt oppgave, som å kjøre en funksjon.
// c) 
// Hello World!
// Etter hello world



//oppg.3
//En parameter er verdier i en funksjon som puttes i (). Her kan du si at når funksjonen kjøres så skal disse variablene ha disse verdiene. Parameter er bare variabelen da, 
// når du gir parameteren en verdi blir det et argument. De to er samme greie men hver sin del av prosessen.

//oppg.4

fubar("kul")

console.log("Etter på")

function fubar(kul){
    console.log(`Min parameter er ${kul}`);
}

// nameprint(vanskelig)

// console.log("etter")

// function nameprint(grad){
//    console.log(`koding er ${grad}` )

// }

//oppg.5

    nameprint(1, 2)

    console.log("Etter")

    function nameprint(para1, para2) {

     console.log(`Jeg fikk to parametere;${para1} og ${para2}`)

    }

