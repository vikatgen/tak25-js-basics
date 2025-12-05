/*
* OBJEKT => key, value paarid (võtmega kollektsioon)
* Andmetüüp, mida märgime { } märkidega.
* Objekti kasutame omaduste kirjeldamiseks.
* Objektide puhul tähistab "this" võtmesõna objekti, kus me ta välja kutsume.
*
* https://javascript.info/object-basics
* https://javascript.info/keys-values-entries
* */

const carProperties = {
    brand: "Porche",
    color: "Black",
    model: "Cayanne",
    motor: "V6",
    isUsed: false,
    print: function() {
        console.log(this.brand + " " + this.model)
    }
};

console.log(carProperties);
console.log(carProperties.brand);
console.log(carProperties.color);
console.log(carProperties.model);
console.log(carProperties.motor);
carProperties.print();

// Objektile võtmete lisamine
carProperties.kW = 240;
console.log(carProperties.kW);


// Objektist võtmete kustutamine
delete carProperties.color;
console.log(carProperties);

/*
* Built-in objects
* Number, Math, Date, String, Error, Function, Boolean
*
* Built-in objektide küljes on väga palju erinevaid gettereid ja settereid.
*
* Kui me muudame ise andmetüüpe, kutsume seda explicit type casting (Type Casting)
* Kui programmeerimiskeel muudab runtime keskkonnas andmetüüpe, seda kutsume Implicit Type Casting
* Type Casting => andmetüübi konverteerimine teise tüüpi (kui see on võimalik.)
*
* */

const currentDate = Date();
console.log(currentDate);

const randomNumber = Math.random();
console.log(randomNumber);

const numberAsString = "25"; // Kui ei saa konvertida numbriks, siis on väärtus NaN => Not an Number
Number(numberAsString);
console.log(numberAsString);

const stringAsNumber = 25;
String(stringAsNumber);
console.log(stringAsNumber);
