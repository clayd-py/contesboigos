var t1 = prompt("Di una fecha(3-3-2003): ")
var t2 = prompt("Di otra fecha(3-3-2003): ")
var t3 = prompt("Di una frase que le dirias a una persona que te gusta: ")
var t4 = prompt("Di un pais: ")

var conteBoig = "Saaabias queeee, Juan Pedro nacio en " + t1 + " y murio en el " + t2 + ". El estaba en la clase dels conills y le gustaba la Sandra, y un dia le dijo, " + t3 + ", la Sandra sin mas remedio lo acepto, se fueron a " + t4 + " y comieron patatas de McDonalds y un conill, uy eso no QUITALO..."
var conteBoigHTML = document.getElementById("conteBoig")
conteBoigHTML.textContent = conteBoig

alert(conteBoig)