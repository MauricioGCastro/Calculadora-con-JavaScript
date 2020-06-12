document.getElementById("n1").addEventListener("click", n1);
document.getElementById("n2").addEventListener("click", n2);
document.getElementById("n3").addEventListener("click", n3);
document.getElementById("n4").addEventListener("click", n4);
document.getElementById("n5").addEventListener("click", n5);
document.getElementById("n6").addEventListener("click", n6);
document.getElementById("n7").addEventListener("click", n7);
document.getElementById("n8").addEventListener("click", n8);
document.getElementById("n9").addEventListener("click", n9);
document.getElementById("n0").addEventListener("click", n0);
document.getElementById("s").addEventListener("click", s);
document.getElementById("r").addEventListener("click", r);
document.getElementById("m").addEventListener("click", m);
document.getElementById("d").addEventListener("click", d);
document.getElementById("sr").addEventListener("click", sr);


function n1() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n1").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function n2() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n2").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function n3() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n3").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function n4() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n4").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function n5() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n5").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function n6() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n6").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function n7() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n7").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function n8() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n8").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function n9() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n9").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function n0() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("n0").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}

function s() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("s").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function r() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("r").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function m() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("m").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}
function d() {
    let actual = document.getElementById("resultado").innerHTML;
    let sumado = document.getElementById("d").innerHTML;
    document.getElementById(`resultado`).innerHTML = actual + sumado
}

function sr() {
    let actual = document.getElementById("resultado").innerHTML;
    let suma = actual.indexOf("+")
    let resta = actual.indexOf("-")
    let multi = actual.indexOf("x")
    let divi = actual.indexOf("/")
    if (suma !== -1) {
        array = actual.split("+", 2)
        res = parseInt(array[0]) + parseInt(array[1]);
        document.getElementById("resultado").innerHTML = res;
    } else if (resta !== -1) {
        array = actual.split("-", 2)
        res = parseInt(array[0]) - parseInt(array[1]);
        document.getElementById("resultado").innerHTML = res;
    } else if (multi !== -1) {
        array = actual.split("x", 2)
        res = parseInt(array[0]) * parseInt(array[1]);
        document.getElementById("resultado").innerHTML = res;
    } else if (divi !== -1) {
        array = actual.split("/", 2)
        res = parseInt(array[0]) / parseInt(array[1]);
        document.getElementById("resultado").innerHTML = res;
    }
}