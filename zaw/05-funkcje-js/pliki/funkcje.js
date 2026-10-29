// Krok 1: dokończ funkcję z lekcji
function najwiekszaLiczba(tablica) {
    if (tablica.length === 0) {
        return null;
    }
    // TODO: zapamiętaj pierwszy element w zmiennej let najwieksza

    // TODO: pętlą for...of przejdź po tablicy i podmieniaj najwieksza na większą liczbę

    // TODO: po pętli zwróć najwieksza (return)
}

console.log(najwiekszaLiczba([10, 4, 20, 15, 1, 100, 2]));   // ma być 100
console.log(najwiekszaLiczba([-5, -2, -9]));                 // ma być -2
console.log(najwiekszaLiczba([]));                           // ma być null


// Krok 2
// TODO: funkcja srednia(tablica): średnia liczb albo null dla pustej tablicy

// console.log(srednia([2, 4, 6]));   // ma być 4
// console.log(srednia([]));          // ma być null


// Krok 3
const wieki = [18, 12, 25, 19, 7];
// TODO: funkcja strzałkowa czyPelnoletni(wiek) -> true / false

// console.log(wieki.filter(czyPelnoletni));   // ma być [18, 25, 19]
