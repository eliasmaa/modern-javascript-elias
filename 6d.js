//oppg1
function førsteoppg6d(selectedOption) {

    if (typeof selectedOption !== "number")  {
        return "Error"
    }
    else if(typeof selectedOption === "number" && selectedOption !== 1 && selectedOption !== 2 && selectedOption !== 3  ) {
        return "Valget er ikke et gyldig valg. Velg på nyt"
    }
    switch(selectedOption) {
        case 1:
            return "Brukeren startet programmet";
        case 2:
            return "Brukeren vil gjøre en utskrift";
        case 3:
            return "Brukeren vil avslutte programmet"
    }
    
}

console.log(førsteoppg6d(8))
console.log(førsteoppg6d(1))
console.log(førsteoppg6d(2))
console.log(førsteoppg6d(3))
console.log(førsteoppg6d("yo"))

//oppg2

function calculator(a,b,c) {
    if((b === "*" || b === "-" || b === "/" || b === "+" ) && typeof a === "number" && typeof c === "number" ) {
        
        switch(b) {
            case "*":
                return a * c;
            case "-":
                return a - c;
            case "/":
                return a / c;
            case "+":
                return a + c;
        }
    }
    else{
        return "syntax error"
    }
}

console.log(calculator(6, "/", 3))
console.log(calculator(3, "*", 3))
console.log(calculator(6, "-", 3))
console.log(calculator(6, "+", 3))
console.log(calculator(6, 4 ,3))
console.log(calculator(6 / "3"))
