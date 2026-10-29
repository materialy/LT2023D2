// Playlista: obiekt z tablicą piosenek. Uzupełnij metody oznaczone TODO.
// Wynik oglądaj w konsoli przeglądarki (F12 → Console).

const playlist = {
    name: 'Hity Kota Filemona',
    songs: [],    // tu trafią obiekty { title, artist }

    // TODO 1: addSong(title, artist) tworzy obiekt piosenki
    // i dodaje go na koniec tablicy songs.

    // TODO 2: showSongs() wypisuje każdą piosenkę w formacie:
    // Mruczando - Kot Filemon
    // Gdy lista jest pusta, wypisuje: Playlista jest pusta

    // TODO 3: showByArtist(artist) wypisuje tylko tytuły
    // piosenek podanego wykonawcy (użyj filter).

    // TODO 4: getNumSongs() ZWRACA liczbę piosenek (return),
    // a clearSongs() usuwa wszystkie piosenki z listy.
};

// Odkomentuj, gdy napiszesz metody:
// playlist.showSongs();                      // Playlista jest pusta
// playlist.addSong('Mruczando', 'Kot Filemon');
// playlist.addSong('Deszczowy parapet', 'Zespół Bajt');
// playlist.addSong('Kocie łapki', 'Kot Filemon');
// playlist.showSongs();
// playlist.showByArtist('Kot Filemon');      // Mruczando, Kocie łapki
// console.log(playlist.getNumSongs());       // 3
// playlist.clearSongs();
// console.log(playlist.getNumSongs());       // 0
