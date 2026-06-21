function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

var hasganado;
var numdelegado = random(1, 10);
console.log(numdelegado);



var t1=prompt("Di un traje: ");
var t2=prompt("Di un discurso: ");
var t3=prompt("Di un numero del uno al diez: ");
var conteBoig=("Hola, que? Quieres ser delegado? A bueno, lo intentaremos. Primero vistete bien, anda que bien ese " + t1 + " te queda genial y es elegante. Ahora que discurso haras? A ver voy a escucharte: " + t2 + ". Ohh! Me han emocionado esas bonitas palabras, creo que ganaras, haver eso espero: ")
var conteBoigHTML = document.getElementById("conteBoig")
//pedos sexy
if (t3 == numdelegado) {
  hasganado = true;
  var conteBoig=("Hola, que? Quieres ser delegado? A bueno, lo intentaremos. Primero vistete bien, anda que bien ese " + t1 + " te queda genial y es elegante. Ahora que discurso haras? A ver voy a escucharte: " + t2 + ". Ohh! Me han emocionado esas bonitas palabras, creo que ganaras, haver eso espero: GENIAL HAS GANADO ERES EL DELEGADO!")
}else{
  hasganado = false;
  var conteBoig=("Hola, que? Quieres ser delegado? A bueno, lo intentaremos. Primero vistete bien, anda que bien ese " + t1 + " te queda genial y es elegante. Ahora que discurso haras? A ver voy a escucharte: " + t2 + ". Ohh! Me han emocionado esas bonitas palabras, creo que ganaras, haver eso espero: Vaya... No has ganado. :( No pasa nada el siguiente curso te ira mejor lo se! :)")
}
conteBoigHTML.textContent = conteBoig
// var t3= t1+t2;
// console.log(t3)
alert(conteBoig)
localStorage.setItem("conteBoig", conteBoig)

