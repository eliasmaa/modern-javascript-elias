//Oppg.1

const minFunksjon = _ => {
    console.log("Hello world!")


}

minFunksjon();

//Oppg.2
//når funksjonen bare har en parameter kan du droppe ()parantesene rundt den.

const Funksjon2 = para => {

console.log("Dette er 1", para);



}

Funksjon2("parameter");

//Oppg.3

const Funksjon3=(a, b, c) => {

console.log(a, b, c)


}

Funksjon3(1, 2, 3)

//oppg.4

const Funksjon4=(...ting) => {

console.log(ting)


}

Funksjon4(1, 6, 3)

//oppg.5
//Jeg vet ikke mye om hvorfor noen skulle valgt den ene over den andre, untatt at pil funksjon er en kortere måte å skrive funksjon hvis det skal bare være en liten funksjon. Den er også konstant som betyr at du ikke kan bytte på verdien. Dette er noe som kan bli brukt som en pro og con men jeg vt ikke på hvilke måter.
