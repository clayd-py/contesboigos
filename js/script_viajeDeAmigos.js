function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var t1 = prompt("Di un dia de la semana: ")
var t2 = prompt("Di una ciudad: ")
var t3 = prompt("Di un premio: ")
var t4 = prompt("Di todos tus amigos/compañeros: ")

var amigosSeparados = t4.split(" ")
var numeroAmigo = random(0, amigosSeparados.length);
var t5 = amigosSeparados[numeroAmigo]

var t6 = prompt("Di un numero: ")
var t7 = prompt("Di un monstruo PELIGROSO: ")

var conteBoig = "Era un " + t1 + " y vas al parque con tu amigo/a y veis tik tok, de repente os sale que en el norte de " + t2 + " hay un/a " + t3 + ". Entrais en el canal de Pongamoslo a Prueba pero no estaba, era taaaaaan misterioso que decidiis ir de ruta. OSTRAS se me olvidava de deciros que voy con " + t4 + ". Vale " + t5 + " tiene una brujula, la brujula es una herramienta sorpresa que nos ayudara más tarde, mientras ibamos habia unos pocos zombies como " + t6 + ". Mientras caminabamos encontramos un " + t7 + ", pero " + t5 + " simplemente le tiró la brujula y se murió, jope, yo queria acción... Pero bueno encontrasteis el/la " + t3 + ". Adiosssss!"
var conteBoigHTML = document.getElementById("conteBoig")
conteBoigHTML.textContent = conteBoig

alert(conteBoig)

