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


