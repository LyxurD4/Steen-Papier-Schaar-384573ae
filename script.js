document.getElementById("speler").innerHTML = "Speler 1:";

let keuzeSpeler1 = null;
let keuzeSpeler2 = null;

function speler1(keuzeS1) {
    document.getElementById("speler").innerHTML = "Speler 2:";
    document.getElementById("speler1Div").style.display = "none";
    document.getElementById("speler2Div").style.display = "block";
    return keuzeSpeler1 = keuzeS1;
}

function speler2(keuzeS2) {
    document.getElementById("speler").innerHTML = null;
    document.getElementById("speler1Div").style.display = "none";
    document.getElementById("speler2Div").style.display = "none";
    keuzeSpeler2 = keuzeS2;

    if(keuzeSpeler1 === keuzeSpeler2) {
        document.getElementById("target").innerHTML = "Gelijkspel!";
    } else if(keuzeSpeler1 === "steen" && keuzeSpeler2 === "schaar") {
        document.getElementById("target").innerHTML = "Speler 1 wint!";
    } else if(keuzeSpeler1 === "steen" && keuzeSpeler2 === "papier") {
        document.getElementById("target").innerHTML = "Speler 2 wint!";
    } else if(keuzeSpeler1 === "schaar" && keuzeSpeler2 === "steen") {
        document.getElementById("target").innerHTML = "Speler 2 wint!";
    } else if(keuzeSpeler1 === "schaar" && keuzeSpeler2 === "papier") {
        document.getElementById("target").innerHTML = "Speler 1 wint!";
    } else if(keuzeSpeler1 === "papier" && keuzeSpeler2 === "steen") {
        document.getElementById("target").innerHTML = "Speler 1 heeft gewonnen";
    } else if(keuzeSpeler1 === "papier" && keuzeSpeler2 === "schaar") {
        document.getElementById("target").innerHTML = "Speler 2 heeft gewonnen";
    }
}