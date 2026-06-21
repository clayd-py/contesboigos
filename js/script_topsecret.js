var t1 = prompt("Digues un sentiment:  ")

var conteBoig = "La Maria avui està " + t1 + " perquè avui és fi de curs. Mai l'han fet un regal com aquest, és per això que avui li entregarem un de mooooooolt ESPECIAL!!!"
var conteBoigHTML = document.getElementById("conteBoig")
""
conteBoigHTML.textContent = conteBoig

alert(conteBoig)