function uusiTeht() {

  document.getElementById("otsikko").style.display = "block";
  var lista = document.createElement("li");
  var teksti = document.getElementById("textKentta").value;
  var tp = document.createTextNode(teksti);
  lista.appendChild(tp);
  
  if (teksti == "") {
    alert("Text field is empty!");
    document.getElementById("textKentta").style.backgroundColor = "red";
  }

 else {
    document.getElementById("udlista").appendChild(lista);
    document.getElementById("textKentta").style.background = "";

  }
  document.getElementById("textKentta").value = "";
}


document.getElementById("udlista").addEventListener("click",function(e) {
  var poista = e.target;
  if (poista.tagName.toUpperCase() == "LI") {
    poista.parentNode.removeChild(poista);
    
  }
}
);


