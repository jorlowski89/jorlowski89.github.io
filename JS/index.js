// Zadanie 1
// Pobierz liczbę z użyciem metody prompt i sprawdź, czy jest ona parzysta.

function task1() {
    const value1 = prompt('Zadanie1 - Wpisz cyfrę.');
    const value1Conv = parseInt(value1)
    if (isNaN(value1Conv)) {
        console.log(`Podaj wartość liczbową.`);
    } else if (value1Conv % 2 === 0) {
        console.log(`${value1Conv} - liczba parzysta`);
    } else if (value1Conv % 2 !== 0) {
        console.log(`${value1Conv} - liczba nieparzysta`);
    }
}
task1()


// ------------------------------
// Zadanie 2
// Pobierz liczbę z użyciem metody prompt (lub wpisz ją jako stałą, jeżeli użycie
// metody prompt sprawia Ci trudność) i sprawdź, czy mieści się w przedziale <-
// 35;2) lub (11;27>

function task2() {
    const value2 = prompt("Zadanie2 - Podaj liczbę");
    const value2Conv = parseInt(value2);
    if (value2Conv >= -35 && value2Conv < 2) {
        alert(`Liczba ${value2Conv} mieści się w przedziale <-35;2)`);
    } else if (value2Conv > 11 && value2Conv <= 27) {
        alert(`Liczba ${value2Conv} mieści się w przedziale (11;27>`);
    } else if (isNaN(value2Conv)) {
        alert("Proszę podać wartość liczbową.")
    } else {
        alert(`Liczba ${value2Conv} nie mieści się w żadnym przedziale`);
    }
}
task2();


// ------------------------------
// Zadanie 3
// Pobierz liczbę z użyciem metody prompt i za pomocą instrukcji warunkowej switch wyświetl w konsoli komunikat:
//     • „1” - zdałeś egzamin,
//     • „2” - „zaliczona tylko teoria”,
//     • „3” - „zaliczona tylko praktyka”,
//     • „0” - „egzamin do poprawy”.

function task3() {
    const value3 = prompt("Zadanie3 - Podaj status.");
    const value3Conv = parseInt(value3);
    switch (true) {
        case value3Conv === 1:
            console.log(`„1” - zdałeś egzamin`);
            break;
        case value3Conv === 2:
            console.log(`„2” - „zaliczona tylko teoria”`);
            break;
        case value3Conv === 3:
            console.log(`„3” - „zaliczona tylko praktyka”`);
            break;
        case value3Conv === 0:
            console.log(`„0” - „egzamin do poprawy”`);
            break;
        default:
            console.log(`Podaj prawidłową wartość`);
            break;
    }
}
task3();


// Upewnijcie się, czy pobrana wartość jest na pewno liczbą (z użyciem metody typeof). Jeżeli nie
// jest, proszę przekonwertować ją na liczbę (parseInt oraz parseFloat)