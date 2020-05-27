const erg = document.getElementById("ergebniss");

function clearScreen() {
  erg.innerHTML = "";
}

function add(dieNummern) {
  erg.innerHTML += dieNummern;
}

function calculate() {
  erg.innerHTML = eval(erg.innerHTML);
}
