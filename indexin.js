function uusiTeht() {
  // Ensimmäisen taskin lisäyksen jälkeen saatetaan näkyville viesti miten poistetaan taskeja listalta.
  document.getElementById("otsikko").style.display = "block";

  // Määritellään muuttujat listan tekoa ja käyttäjän syötteen talteen ottoa varten.
  var lista = document.createElement("li");
  var teksti = document.getElementById("textKentta").value;
  var tp = document.createTextNode(teksti);
  lista.appendChild(tp);
  
  // Tyhjästä tekstikentästä annetaan ilmoitus alert viestillä ja muutetaan tekstikentän väriä
  if (teksti == "") {
    alert("Text field is empty!");
    document.getElementById("textKentta").style.backgroundColor = "red";
  }
  // Onnistuneen käyttäjä syötteen jälkeen lisätään käyttäjän syöte listaan.
 else {
    document.getElementById("udlista").appendChild(lista);
    document.getElementById("textKentta").style.background = "";

  }
  document.getElementById("textKentta").value = "";
}

  // Evenlistener jonka avulla käyttäjä voi klikkaamalla poistaa taskeja.
document.getElementById("udlista").addEventListener("click",function(e) {
  var poista = e.target;
  if (poista.tagName.toUpperCase() == "LI") {
    poista.parentNode.removeChild(poista);
    
  }
}
);


