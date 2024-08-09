var x = "";
var equ = "";
var y = 0;
var z = 0;

function concat0() {
    x = x += "0";
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function concat1() {
    x = x += "1";
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function concat2() {
    x = x += "2";
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function concat3() {
    x = x += "3";
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function concat4() {
    x = x += "4";
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function concat5() {
    x = x += "5";
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function concat6() {
    x = x += "6";
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function concat7() {
    x = x += "7";
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function concat8() {
    x = x += "8";
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function concat9() {
    x = x += "9";
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function decimal() {
    x = x += ".";
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function del() {
    equ = "";
    x = "";
    y = 0;
    z = 0;
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function bs() {
    x = x.toString();
    x = x.slice(0, (x.length - 1));
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function flip() {
    x = (Number(x) * -1);
    document.getElementById("displayscreen").innerHTML = x;
    document.getElementById("supdisplay").innerHTML = equ;
}

function power2() {
    if (x != 0) {
        equ = x + "<sup>2</sup>"
        y = Math.round((Number(x) ** 2) * 10000000000) / 10000000000
    } else {
        equ = y + "<sup>2</sup>"
        y = Math.round((y ** 2) * 10000000000) / 10000000000
    }
    x = "";
    document.getElementById("displayscreen").innerHTML = y;
    document.getElementById("supdisplay").innerHTML = equ;
}

function add() {
    if (y != 0) {
        equ = y + " + "
    } else if (x != 0) {
        equ = x + " + "
    }
    z = Number(x);
    x = "";
    document.getElementById("displayscreen").innerHTML = y;
    document.getElementById("supdisplay").innerHTML = equ;
}

function sub() {
    if (y != 0) {
        equ = y + " - "
    } else if (x != 0) {
        equ = x + " - "
    }
    z = Number(x);
    x = "";
    document.getElementById("displayscreen").innerHTML = y;
    document.getElementById("supdisplay").innerHTML = equ;
}

function multi() {
    if (y != 0) {
        equ = y + " x "
    } else if (x != 0) {
        equ = x + " x "
    }
    z = Number(x);
    x = "";
    document.getElementById("displayscreen").innerHTML = y;
    document.getElementById("supdisplay").innerHTML = equ;
}

function div() {
    if (y != 0) {
        equ = y + " / "
    } else if (x != 0) {
        equ = x + " / "
    }
    z = Number(x);
    x = "";
    document.getElementById("displayscreen").innerHTML = y;
    document.getElementById("supdisplay").innerHTML = equ;
}
function calc() {
    let oper = (equ.split(" "))[1]
    equ = equ + x + " = "
    if (oper == "+") {
        if (y == 0) {
            y = Math.round((z + Number(x)) * 10000000000) / 10000000000;
        } else {
            y = Math.round((y + Number(x)) * 10000000000) / 10000000000;
        }
    } else if (oper == "-") {
        if (y == 0) {
            y = Math.round((z - Number(x)) * 10000000000) / 10000000000;
        } else {
            y = Math.round((y - Number(x)) * 10000000000) / 10000000000;
        }
    } else if (oper == "x") {
        if (y == 0) {
            y = Math.round((z * Number(x)) * 10000000000) / 10000000000;
        } else {
            y = Math.round((y * Number(x)) * 10000000000) / 10000000000;
        }
    } else if (oper == "/") {
        if (y == 0) {
            y = Math.round((z / Number(x)) * 10000000000) / 10000000000;
        } else {
            y = Math.round((y / Number(x)) * 10000000000) / 10000000000;
        }
    }
    x = "";
    document.getElementById("displayscreen").innerHTML = y;
    document.getElementById("supdisplay").innerHTML = equ;
}

document.getElementById("displayscreen").innerHTML = x;
document.getElementById("supdisplay").innerHTML = equ;