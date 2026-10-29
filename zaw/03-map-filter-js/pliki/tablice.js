// Dane do ćwiczeń
const ceny = [12, 45, 8, 30, 5];
const wieki = [18, 12, 25, 19, 7, 16];
const imiona = ['Filemon', 'Bonifacy', 'Mruczek', 'Puszek'];

// Krok 1
// TODO: map - dolicz do każdej ceny 5 zł za dostawę
const zDostawa = [];   // <- zamień [] na wywołanie map
console.log('Ceny z dostawą:', zDostawa);

// Krok 2
// TODO: filter - wybierz osoby niepełnoletnie (wiek < 18)
const niepelnoletni = [];   // <- zamień [] na wywołanie filter
console.log('Niepełnoletni:', niepelnoletni);

// Krok 3
// TODO: filter + map - imiona dłuższe niż 6 liter, zapisane WIELKIMI literami
const dlugie = [];
console.log('Długie imiona:', dlugie);

// Sprawdź też, że oryginalne tablice się nie zmieniły:
console.log(ceny, wieki, imiona);
