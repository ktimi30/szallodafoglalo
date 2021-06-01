window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("btn").addEventListener("click", foglalas, false);
}

function foglalas() {
    if ($("szam") >= 10) {
        window.alert("Hibás telefonszámot adott meg!");
    }
    if ($("felnottek").value < 0) {
        window.alert("A felnőttek száma hibás!");
    }
    if ($("gyerekek").value < 0) {
        window.alert("A felnőttek száma hibás!");
    }
    if ($("szoba") > 8 || $("szoba" < 8)) {
        window.alert("Hibás kódot adott meg!");
    }
    $("foglalas").innerHTML = "Kedves " + $("nev").value + "! A szobafoglalás sikeresen megtörtént!";
}