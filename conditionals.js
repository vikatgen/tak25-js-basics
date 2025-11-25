/*
* TINGIMUSLAUSED
*
* Aluseks on tingimus. Tingimus vastab alati booleaniga.
* "Kui oma toa ära koristad, võid arvutis mängida!"
*
* { ... } -> nibudega sulud märgivad ära koodiploki.
* */

const currentYear = 2025;

// Pikk versioon tingimuslausest.
if (currentYear < 2020) {
    console.log("Väiksem");
} else if (currentYear > 2020) {
    console.log("Suurem")
} else {
    console.log("Aasta on " + currentYear)
}

// Lühike versioon tingimuslausest.
let returnSentence;
console.log(returnSentence);
currentYear < 2020 ? returnSentence = "Väiksem" : returnSentence = "Suurem";
console.log(returnSentence);

/*
* Pööratud tingimuslaused.
* ! -> negatiivne tingimus (kui tingimus on true, siis tingimus on false)
* */
const isJanFavoriteCarPorche = true;

if (!isJanFavoriteCarPorche) {
    console.log("Jah, lemmik auto on Porche")
} else {
    console.log("Ei, lemmik auto pole Porche")
}

/*
* SWITCH tingimuslause
*
* Kui tingimusi on palju, siis kasutame alati SWITCH tingimuslauset.
* */

let color = "Brown";

switch(color) {
    case "Red":
        console.log("Ei ole minu auto värv");
        break;
    case "Blue":
        console.log("Ei ole minu värv!");
        break;
    case "Black":
        console.log("Ei ole!")
        break;
    default:
        console.log("Minu auto värv on " + color);
}

/*
* Tingimused saame luua erineva võrdlusega.
* === -> Võrdleb, kas mõlemad pooled on võrdsed ja kas nende andmetüüp on sama.
* == -> Võrdleb pooli ilma andmetüüpi kontrollimata.
* */

console.log("=== " + (1 === 1));
console.log("=== " + ("1" === 1));
console.log("== " + ("1" == 1));