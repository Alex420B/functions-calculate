// Skriv "use strict" herunder
"use strict";
function beregnSum(number1, number2) {
    // Funktionen skal beregne summen af de to tal og udskrive resultatet i konsollen, fx: "Summen af 15 og 27 er 42"

    const result = number1 + number2;
    console.log(`${result}`);
}


beregnSum(1, 2);


// Skriv en funktion, der hedder beregnDifference, og som tager to parametre: number1 og number2
// Funktionen skal beregne forskellen mellem de to tal og udskrive resultatet i konsollen, fx: "Forskellen mellem 27 og 15 er 12"

function beregDifference(number1, number2)
{
    const result = number2-number1;
    console.log(`${result}`)
} 

beregDifference(1, 2)

// Kald begge funktioner herunder med to selvvalgte tal, så du selv kan se i konsollen, om dine funktioner virker
