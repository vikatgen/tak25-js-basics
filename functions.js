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
* IIFE - Faili lugedes automaatselt käivituv koodiplokk.
* */

(function() {
    console.log("See on IIFE (IIFE = Immediately Invoked Function Expression)");
})();