// Kasa biletowa
const wiek = Number(prompt('Podaj wiek pasażera'));
let cenaBiletu;

// Krok 3 (na końcu): najpierw sprawdź, czy wiek ma sens
// TODO: jeśli wiek nie jest liczbą (Number.isNaN) albo jest ujemny -> "Niepoprawny wiek"

// Krok 1
// TODO: łańcuch if / else if / else:
//   wiek < 6   -> 0 zł
//   wiek < 12  -> 3 zł
//   wiek < 18  -> 4 zł
//   pozostali  -> 6 zł

// Krok 2
// TODO: dopisz bilet seniora: wiek >= 65 -> 2 zł (pomyśl, gdzie wstawić ten warunek)


console.log(`Wiek: ${wiek}, cena biletu: ${cenaBiletu} zł`);
