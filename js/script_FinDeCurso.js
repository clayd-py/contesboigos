var t1 = prompt("Di un sentimiento: ")                                          
var t2 = prompt("Dime una lista de comida: ")
var t3 = prompt("Di una comida de la lista de antes + su determinante: ")
var t4 = prompt("Di una tienda + el determinante: ")
var t5 = prompt("Dime otra comida de la lista y el determinante: ")
var t6 = prompt("Di otra otra comida de la lista y el determinante: ")
var t7 = prompt("Elige un numero: ")
var t8 = prompt("Di un refran que llegue al corazon, o no: ")
var t9 = prompt("Di un pais, o pueblo en MAYUSCULAS: ")

var conteBoig = "Estoy " + t1 + ", porque mañana es fin de curso. Lo bueno es que hay un pica-pica y han hecho una lista para ver lo que trae cada uno, esta es la lista: " + t2 + ". Ala supongo que yo traeré " + t3 + ", voy a comprarlo en mi vieja confiable, " + t4 + ", *lo compro episamente*. AL DIA SIGUIENTE. BIEEEEEN!! Hoy ya es el dia del pica-pica! *va al cole episamente*, Hmmm que rico/a " + t5 + " junto con " + t6 + "... Creo que me duele la barriga, *vomita episamente*. LLega la graduacion, sales al escenario y hay " + t7 + " personas mirandote, te dan un diploma y dices: " + t8 + " *aplasusos fuertes, fuertes fuertes*. UN RATO DESPUES. Llegais a la clase y bailais coti x coti y gritan... VIVA " + t9 + ". Tambien bailais Hey boy pump it up, hey girl pump pump it up, pipi pop uh eh pampi pampi pampirup ohh mejicano papi mejicano papi"
var conteBoigHTML = document.getElementById("conteBoig")
conteBoigHTML.textContent = conteBoig

alert(conteBoig)


