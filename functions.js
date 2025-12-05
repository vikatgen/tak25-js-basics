/*
* Funktsioonid - arendaja poolt paika pandud reeglite järgi sisendi (input) manipuleerimine, et saada tahetud väljund (output).
* Funktioonid koosneb märksõnast function, parameetridest ja koodiplokist.
*
* Kui me tahame midagi funktsiooni seest tagastada, siis me peame kasutama return võtmesõna.
* Parameeter on kohahoidja, millele me saame kaasa anda ka algväärtuse.
* Parameetreid me kasutame funktsiooni sees.
*
* */

function calculateMyAge(birthYear = 1992) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

const output = calculateMyAge(2005);
console.log(output);

/*
* Arrow function / noolefunktsioon
*
* Alustan nimetusega, järgnevad parameetrid ning funktsiooni keha.
* Noolefunktsiooni saab kasutada ka shorthand versioonina.
* Shorthand puhul peab funktsioon midagi tagastama. Selle puhul ei kasuta koodiblokki ega return võtmesõna.
* */

const sumTwoIntegers = (integer = 0, integer2 = 0) => {
    return integer + integer2;
};

const shortHandSumCalc = (integer = 0, integer2 = 0) => integer + integer2;

console.log(shortHandSumCalc(6, 6));
console.log(sumTwoIntegers(5, 6));

/*
* REST parameetrid
* kasutame spread operaatorit (...)
* REST parameetrid võtame vastu alati viimasena.
* REST parameetrid on array kujul funktsioonis kättesaadavad.
* */

const muchMorePararametersThanNeeded = (a, b, ...moreParameters) => {
    console.log("a", a);
    console.log("b", b);
    console.log("all other parameters", moreParameters);
}

muchMorePararametersThanNeeded("a", "b", "c", "d", "e", "f");

/*
* IIFE - Faili lugedes automaatselt käivituv koodiplokk.
* */

(function() {
    console.log("See on IIFE (IIFE = Immediately Invoked Function Expression)");
})();