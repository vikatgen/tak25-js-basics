/*
* KORDUSLAUSED -> TSÜKKEL
*
* Kordame koodiplokki, kuni tingimus on täidetud.
* Kordamist saame teha üle massiivide ning objektide.
* for loop on indeksi põhine. Kui tingimus on true, siis kordame koodiploki, peale mida suurendame indeksit ühe võrra.
* */

const students = ["Jan", "Kevin", "Karl", "Mika", "Kalmet"];

for(let index = 0; index < students.length; index++) {
    console.log(students[index]);
}

/*
* continue / break
* Kui tingimused on õiged, saame õelda, et jäta see iteratsioon vahele, järgmine indeks läheb käiku.
* */

console.log("Continue ------------------------------------");

for(let index = 0; index < students.length; index++) {
    if(students[index] === "Mika") {
        console.log("Mika ei ole meie klassis!");
        continue; // Jätame selle iteratsiooni vahele. Võtame järgmise indeksi.
    }

    console.log(students[index]);
}

console.log("Break ------------------------------------");

for(let index = 0; index < students.length; index++) {
    if(students[index] === "Mika") {
        console.log("Mika ei ole meie klassis!");
        break; // Kui tingimus on true, siis katkestame kogu tsükli.
    }

    console.log(students[index]);
}

/*
* for...of tsükkel
* */

console.log("For...of ------------------------------------");

for(const student of students) {
    console.log(student);
}