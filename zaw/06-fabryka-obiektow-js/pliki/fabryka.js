// Fabryka telewizorów i zwierząt — uzupełnij miejsca oznaczone TODO.
// Wyniki zobaczysz w konsoli przeglądarki (F12), po otwarciu index.html.

function createTv(brand, screenSize, color) {
    const colors = ["white", "black", "silver"];

    // walidacja koloru
    if (!colors.includes(color)) {
        return null;
    }

    // TODO (krok 2): przekątna od 24 do 85 cali, inaczej return null

    // TODO (krok 1): zwróć obiekt z właściwościami brand, screenSize, color
    //                w skróconym zapisie (klamra w tej samej linii co return!)
}

console.log(createTv("Lumo", 42, "black"));  // powinien być obiekt
console.log(createTv("Lumo", 42, "pink"));   // powinno być null
console.log(createTv("Lumo", 100, "white")); // po kroku 2: null


// TODO (krok 3): napisz fabrykę createPet(name, species, age)
// - dozwolone gatunki: "kot", "pies", "chomik"
// - wiek co najmniej 0
// - złe dane: return null, dobre: obiekt { name, species, age }


// TODO (krok 4): utwórz tablicę kilku wywołań createPet (jedno z błędnymi danymi)
// i za pomocą filter zostaw tylko obiekty różne od null
