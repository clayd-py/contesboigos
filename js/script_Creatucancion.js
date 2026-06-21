var t1 = prompt("Di una cancion: ");
var t2 = prompt("Di dos frases aleatorias: ");
var t3 = prompt("Inventate un nombre random: ");

// gogogogogogogogogogogogogogogogogogogogogogogogogogo
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
  
  var notacancion = random(1, 2);
  console.log(notacancion);

//vergaonichan
var conteBoig = "Si se que soy un pesado, pero... Hoy haras tu cancion! Primero que ritmo/melodia tendra? La de la cancion " +
 t1 + ". Que buena melodia! Pero la letra? " + t2 + ". Esa letra es fantastica, me encanta! La subiremos a " + t3 + ". " 
var conteBoigHTML = document.getElementById("conteBoig");
//vergacion de la cant

if (notacancion == 1){

    conteBoig = "Si se que soy un pesado, pero... Hoy haras tu cancion! Primero que ritmo/melodia tendra? La de la cancion " +
    t1 + ". Que buena melodia! Pero la letra? " + t2 + ". Esa letra es fantastica, me encanta! La subiremos a " + t3 + ". SI! ES LA CANCION NUMERO 1 DE " + t3 + "!"

}

if (notacancion == 2){

    conteBoig = "Si se que soy un pesado, pero... Hoy haras tu cancion! Primero que ritmo/melodia tendra? La de la cancion " +
    t1 + ". Que buena melodia! Pero la letra? " + t2 + ". Esa letra es fantastica, me encanta! La subiremos a " + t3 + ". JOPE! NO LLEGA NI A LA CANCION NUMERO 1000 DE CANCIONES!"

}

//pedoasdajks dghajshdgas
conteBoigHTML.textContent = conteBoig;
//var patata = "pet pet"
//onichan dalaskiu
//Bozka Bzka me gusta la gasolina pets y chuscos de la adrelania pedo pedo pedo sexy sexy mediafire
alert(conteBoig)

/*
Si se que soy un pesado, pero... Hoy haras tu cancion. Primero que ritmo tendra(Di una cancion que te la sepas).
 Ok. Y la letra? (Haz la letra de una cancion inventada e). Ala como mola la subiremos a (Di una marca digital).
  Bua tiene mas de(Random) Alternativa: ES LA CANCION NUMERO N1 DE (Di una marca digital).
   La otra: JOPE ES LA PERO CANCION NO SALE NI EN EL PODIUM DE 1000 CANCIONES.
*/