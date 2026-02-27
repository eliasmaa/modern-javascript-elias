//oppg.1 
//Return sender verdien tilbake til kallet.


//oppg2

function funk(a, b) {
    if(typeof a === "number" && typeof b === "number") {
        return a + b
    }
}

let resultat = funk(3, 4);
console.log(resultat);

//oppg.3

function funkycold(a, b) {
    if(typeof a === "string" && typeof b === "string"){
        console.log("Utskrift til konsol:", a, b)
    }
    else{
        console.log("error, Jeg skriver bare ut tekst.")
    }
}
funkycold("en", "to")
funkycold(1, "to")
//oppg.4

function funkycoldmedina(a, b, c) {
    if(typeof a === "number" && typeof c === "number" && (b === "+" || b === "-" || b=== "*" || b=== "/")) {
    if(b === "+"){
        return a + c
    } 
    if(b === "-"){
        return a - c
    }
    if(b === "*"){
        return a * c
    }
    if(b === "/"){
        return a / c
    }
    }
    else{
        if((b !== "+" && b !== "-" && b !== "*" && b !== "/")){
            console.log("[operatørargumentet] er ikke en gyldig operasjon. Programmet terminerer!")
        }
        else if(a !== "number" && b === "number" || a === "number" && b !== "number" ){
            console.log("[feil-argument] er ikke et tall! Kan ikke utføre [operatørargumentet]. Programmet terminerer!")
        }
        else if(a !== "number" && b !== "number"){
            console.log("[feil-argument1] og [feil-argument2] er ikke tall! Programmet terminerer!")
        }
    }

}
resultatet = funkycoldmedina(1, "+", 2)
console.log(1,"+",2,"=",resultatet)
//////////
resultatet = funkycoldmedina(1, "-", 2)
console.log(1,"-",2,"=",resultatet)
////////////




