window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("btn").addEventListener("click", szamitas, false);
}

function szamitas() {
    var erkezes = new Date($("erkezes").value);
    var tavozas = new Date($("tavozas").value);
    var napokSzama = Math.abs(tavozas - erkezes) / (1000 * 60 * 60 * 24);
    var szobakSzama = $("szobaszam").value;
    var felnottSzam = $("felnottek").value;
    var gyerekSzam = $("gyerekek").value;
    var classicVar = $("classic").checked;
    var lakosztalyVar = $("lakosztaly").checked;
    //Hibák
    if (napokSzama > 14) {
        window.alert("Max 2 hétig tartózkodhat hotelünkben!");
    }
    if (napokSzama <= 0 || szobakSzama <= 0 || felnottSzam <= 0 || gyerekSzam < 0) {
        window.alert("Hibás értéket adott meg!")
    }
    //Számolás
    if (classicVar) {
        $("arkiiras").innerText = "A kalkuláció alapján " + ((gyerekSzam * 19000) + (felnottSzam * 24000)) * szobakSzama * napokSzama * 1.5 + " Ft-ba kerülne a nyaralás szállodánkban.";
    } else if (lakosztalyVar) {
        $("arkiiras").innerText = "A kalkuláció alapján " + ((gyerekSzam * 19000) + (felnottSzam * 24000)) * szobakSzama * napokSzama * 2.5 + "Ft-ba kerülne a nyaralás szállodánkban.";
    } else {
        window.alert("Adjon meg szobatípust!");
    }

}