// Postać z gry. Uzupełnij metody oznaczone TODO.
// Wynik oglądaj w konsoli przeglądarki (F12 → Console).

let hero = {
    name: 'Rycerz Bajtek',
    hp: 100,      // punkty życia
    level: 1,

    // TODO 1: metoda introduce() wypisuje:
    // Jestem Rycerz Bajtek, poziom 1, życie 100
    // Użyj this, nie wpisuj danych na sztywno.

    // TODO 2: metoda levelUp() zwiększa level o 1 i wypisuje:
    // Awans! Poziom 2

    // TODO 3: metoda takeDamage(amount = 10) zmniejsza hp o amount.
    // Gdy hp spadnie do 0 lub niżej: ustaw hp na 0 i wypisz "Koniec gry".
    // W przeciwnym razie wypisz np.: Zostało 90 punktów życia
};

// Odkomentuj po kolei, gdy napiszesz metody:
// hero.introduce();
// hero.levelUp();
// hero.takeDamage();
// hero.takeDamage(95);
// hero.introduce();
