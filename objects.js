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
* */

const currentDate = Date();
console.log(currentDate);

const randomNumber = Math.random();
console.log(randomNumber);

const numberAsString = "25";
console.log(Number(numberAsString));
