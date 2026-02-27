//oppg.1

//a
console.log("oppg.1b array brukes for å kunne sortere en liste med objekter eller elementer isteden for å skrive flere linjer av let så kan du bare putte alle i en array, på lik måte som i funksjoner når du har flere parametere. array må ikke ha flere imdexer så lenge den har [] disse")

//b
console.log("oppg.1b Javascripts arrays kan ha flere ulike typer elementer i samme array. andre språk må ofte ha den smme typen elemente i en array. Js sine arrays er mindre klumpete ment for enklere koding uten krøll.")

//oppg.2
//a
const noe = [1, "hallo", false, 6]

//b
const andeby = ["Donald duck", "Onkel skrue", "dolly duck", "ole", "dole", "Doffen", "Della duck", "Gladstone Gander", "Gyro Gearloose", "Flintheart Glomgold" ]
//c
console.log(andeby[1])
console.log(andeby[4])
console.log(andeby[7])

//oppg.3
//a)
console.log("Oppg.3a index i en array er de elementene inni [] på samme måte som parametere er det som er inni () i en funksjon. ")
//b
console.log("oppg.3b første index i en array er nummer 0")
//c
console.log("oppg.3c siste index er en mindre enn hvor mange indexer det er.")
//d
console.log("oppg.3d lengden på arrayen er hvor mange indexer det er. så hvis du har fire indexer er legnden 4.")
//e
console.log("sammenhengen er -1. Nummeret til siste index er lengden av arrayen -1.")

//oppg.4
//a
console.log("hvis du spør om typen av arrayen vil det gi objekt fordi det kan være mange forksjellige typer, men en ting alle deler er at det er et objekt.")
//b
console.log("oppg.4b du kan bruke array.isArray(for å finne ut om noe er en array. er det ikke en array gir det false. er det en array gi det true")
//c
function funksjon(a) {
    if(Array.isArray(a)){
        return "argumentet er en array."
    }
    else{
        return "argumentet er ikke en array."
    }
}

console.log(funksjon(6))
console.log(funksjon([6]))
