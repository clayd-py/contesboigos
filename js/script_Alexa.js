var t1 = prompt("Di un nombre: ");
var t2 = prompt("Elige una pregunta aleatoria: ");
var t3 = prompt("Di la respuesta de la pregunta anterior: ");
var t4 = prompt("Elige otra pregunta aleatoria: ");
var t5 = prompt("Di la respuesta de la pregunta: ");
// pedos añañin

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
  
  var ontoOlisto = random(1, 8);
  console.log(ontoOlisto);
// conte boigus js js

var conteBoig = t1 + ", sabes que me he comprado? Una alexa! Si mira preguntale cosas: " + t2 + " ALEXA: " +
 t3 + ". Hala como mola! Deberiamos preguntarle mas cosas " + t4 + " ALEXA: " + t5 + ". Esto es genial! Ahora la pregunta del millon! Soy una persona bobita? ALEXA: "
var conteBoigHTML = document.getElementById("conteBoig");
//pedo pet ZA

if (ontoOlisto <= 4){
    //onto
    conteBoig = t1 + ", sabes que me he comprado? Una alexa! Si mira preguntale cosas: " + t2 + " ALEXA: " +
    t3 + ". Hala como mola! Deberiamos preguntarle mas cosas " + t4 + " ALEXA: " +
     t5 + ". Esto es genial! Ahora la pregunta del millon! Soy una persona bobita? ALEXA: Si, eres el mas bobita del mundo!"

} else if (ontoOlisto > 4){
    //listo
    conteBoig = t1 + ", sabes que me he comprado? Una alexa! Si mira preguntale cosas: " + t2 + " ALEXA: " +
    t3 + ". Hala como mola! Deberiamos preguntarle mas cosas " + t4 + " ALEXA: " +
     t5 + ". Esto es genial! Ahora la pregunta del millon! Soy una persona bobita? ALEXA: No, eres extremadamente listo!"
}


//hola
conteBoigHTML.textContent = conteBoig;
//var patata = "pet pet"
//console.log(conteBoig)
alert(conteBoig)



/*
(Di un nombe), sabes que me eh comprado una alexa? Si mira peguntale cosas.(Di una pregunta rara).
 (Di una respues Rara con relacion de la pregunta). Ala como mola, deberiamos peguntarle mas (Di otra pregunta).
   (Otavez di una respues Rara con relacion de la pregunta). Esto es genial ahora la pregunta del millon.
    Soy una persona tonta? (Random) alternativas: Si ees el mas tonto del mundo. No eres estremadamente guapo e inteligente.
*/

