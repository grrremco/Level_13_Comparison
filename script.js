const age = 42;
const imFemale = true;
const driverStatus = 'BoB';
const name = 'Sarah';
const totalAmmount = 23;


//Deel 1

if (age == 18) {
    console.log("U bent 18 en mag naar binnen");
} else if (age > 18) {
    console.log("U bent ouder dan 18 en mag naar binnen")
} else {
    console.log("Je bent nog geen 18 en mag nog niet naar binnen")
}

//Deel 2

if (imFemale) {
    console.log("U mag naar binnen")
} else {
    console.log("U mag niet naar binnen")
}

//Deel 3

if (driverStatus == 'BoB') {
    console.log('U bent BoB en mag rijden')
} else {
    console.log("U heeft gedronken en mag niet rijden.")
}


//Comparison

//Deel 1

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Helaas, geen korting voor jou")
}

//Deel 2

if (name === 'Abraham' || name === 'Sarah') {
    console.log("Gefeliciteerd! U krijgt van ons een biertje")
} else {
    console.log("Helaas, geen mosterd voor jou")
}

//Deel 3

if (totalAmmount >= 25 && totalAmmount < 50) {
    console.log("Je krijgt een gratis portie (vega)bitterballen!")
} else if (totalAmmount >= 50 && totalAmmount <100) {
    console.log("Je krijgt een gratis portie nachos!")
} else if (totalAmmount >= 100) {
    console.log("Je krijgt een gratis flesje champagne!")
} else {
    console.log("Besteed minimaal 25 en je krijgt van ons een cadeautje!")
}