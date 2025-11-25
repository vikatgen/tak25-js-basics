/*
* MUUTUJAD
* Tarkvaras on vaja hoida meeles andmeid.
* Andmete meeles hoidmiseks me kasutame muutujaid (ehk koht mälus),
* millele me anname nime, et saaksime hiljem tema poole pöörduda.
*
* Javascript => const vs let.
* const = KONSTANT => väärtused, mida ei saa muuta.
* let = väärtus, mida saab igal ajal muuta.
*
* Üks = on omistamine ehk väärtuse andmine.
* Väärtuseks on andmetüüp. (string, boolean, number).
*
* Muutujate nimede panekul kasutame camelCase kirjaviisi.
*
* JS faile saame jooksutada NODE keskkonnas (terminal => node failinimi.js) või
* browserites kasutades V8 mootorit.
*
* Edasised teemad antud failiga: Hoisting ehk tõstmine, scope ehk muutuja skoop.
* */


// Andmetüüp number (integer, sest täisarv)
const birthYear = 1992;
let age = 30;

// Andmetüüp string.  (Võib kasutada "", '', ``)
const personName = "Gen Vikat";

// Andmetüüp boolean (true / false)
const isHandsome = false;

// Andmetüüp null => tühi väärtus, ehk siis muutujal pole mitte mingisugust väärtust.
// Tühi väärtus on kasulik juhul kui muutujat luues pole teada selle väärtust.
const isTomorrowGoodDay = null;

// let märksõnaga tehtud muutuja väärtuse muutmine.
age = 40;

// Konsooli logimiseks kasutame console.log() meetodit.
console.log(age);

/*
* Muutuja skoobid -> globaalne, funktsiooniskoop ja koodiblokiskoop
*
* Kui muutuja on globaalses skoobis, siis me saame seda muutujat välja kutsuda teistes skoopides (function & block scope.)
* Koodiplokkides defineeritud muutujaid me ei saa kasutadada väljaspool seda koodiploki skoopi.
*
* Hoisting (üles upitama) -> Kui faili jooksutatakse, siis igas koodiplokis tõstetakse seal tehtud muutujad kõige esimeseks.
* */

function printAge() {
    console.log("See on enne muutuja tegemist.")
    let myAge = 67; // Seda defineeritud muutujat me ei saa väljaspool seda funktsiooni kasutada.
    console.log("Aga kui see fail jookseb, siis tõstetakse myAge muutuja kõige esimeseks funktiooni sees (skoobis)");
}

// Siin me ei saa myAge näiteks välja konsoolida (ReferenceError: myAge is not defined), sest globaalne skoop ei tea, mis tehakse antud funtktsiooniskoobis.




