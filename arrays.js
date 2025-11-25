/*
* ARRAY
*
* Indekseeritud massiiv.
* Massiivi tunneme ära [...] märgiste järgi. [1, 2, 3]
* Indektseerimine hakkab 0st.
* Massiivi saab panna erinevad andmetüübid kokku.
* Massiividele on JS keelde sisseehitatud meetodid.
*
* */

const students = ["Jan", "Kevin", "Karl", "Mika", "Kalmet"];
console.log(students[3]); // Too mulle massiivist indeksiga 3 element.
console.log(students.length); // Mitu elementi antud massiivi sees on.
console.log(students.join()); // Paneb massiivi kokku stringina, mis on eraldatud komadega.
students.push("Kurt"); // Elemendi lisamine massiivi (viimaseks)
students.unshift("Annika"); // Elemendi lisamine massiivi (esimeseks)
students.sort(); // Sorteerib massiivi tähestiku järjekorras

console.log(students);