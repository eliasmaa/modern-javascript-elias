//oppg.1

function funk(a) {

    if (typeof a ==="string") {
        console.log("StringString")
    }

    else {
        console.log("Dette er ikke string i det hele tatt!")    
    }
}
funk(1)

funk("1")

funk("elias")
//svaret blir Ikke string, String, og String. 

//oppg.2

{
    let b = 1
    let c ="1"
    if (typeof b === typeof c) {
        console.log("variablene jeg brukte er av samme type")
    }
    else {
        console.log("Ikkee samme type")
    }
    //hva som sker her er at det ene tallet er typen number, mens den andre er typen string derfor blir det ikke sametype
}
{
    let b = 1
    let c =1
    if (typeof b === typeof c) {
        console.log("variablene jeg brukte er av samme type")
    }
    else {
        console.log("Ikkee samme type")
    }
    //her er begge tallene typen number, har ingenting å si at det er det samme tallet. Derfor blir disse samme type
}
{
    let b = 2
    let c =3
    if (typeof b === typeof c) {
        console.log("variablene jeg brukte er av samme type")
    }
    else {
        console.log("Ikkee samme type")
    }
    //her er det to forksjellige tall som begge er typen number som betyr at de er samme type
}
{
    let b = "2"
    let c ="3"
    if (typeof b === typeof c) {
        console.log("variablene jeg brukte er av samme type")
    }
    else {
        console.log("Ikkee samme type")
    }
    //Her er begge tallene skrevet i "" som betyr at de er bege typen string som betyr at de er samme type
} 
{
    let b = 2
    let c ="3"
    if (typeof b === typeof c) {
        console.log("variablene jeg brukte er av samme type")
    }
    else {
        console.log("Ikkee samme type")
    }
    //Her er et tall typen number og den andre typen string som betyr at de ikke er samme type. Man kunne trodd dette resultatet kom fra at det er to forksjellige tall men det er ikke saken.
}

//oppg.3

//a)
{

    let d = "1"
    if(typeof d === typeof 1) {
        console.log("Dette er et tall!")
    }
    else {
        console.log("Test failed!")
    }
}
{

    let d = 1
    if(typeof d === typeof 1) {
        console.log("Dette er et tall!")
    }
    else {
        console.log("Test failed!")
    }
}
//b)

{
    let e = 10
    let f = "8"
    if(typeof e === "number" && typeof f === "number") {
       if( e > 5 || f > 5) {
            console.log("Jeg fant en variabel som var større enn fem! De hadde verdiene:", e, f)
       }
    }
    else {
        console.log("Variablene er ikke av type number, de er av typen:",typeof e, typeof f  )
    }
}
{
    let e = 10
    let f = 8
    if(typeof e === "number" && typeof f === "number") {
       if( e > 5 || f > 5) {
            console.log("Jeg fant en variabel som var større enn fem! De hadde verdiene:", e, f)
       }
    }
    else {
        console.log("Variablene er ikke av type number, de er av typen:",typeof e, typeof f  )
    }
}
{
    let e = 1
    let f = 2
    if(typeof e === "number" && typeof f === "number") {
       if( e > 5 || f > 5) {
            console.log("Jeg fant en variabel som var større enn fem! De hadde verdiene:", e, f)
       }
    }
    else {
        console.log("Variablene er ikke av type number, de er av typen:",typeof e, typeof f  )
    }
}