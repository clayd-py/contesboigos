var t1 = prompt("Di un nombre: ");
var t2 = prompt("Dime personas que existan: ");
var t3 = prompt("Di un objeto: ");
var t4 = prompt("Escoje un objeto, persona random: ");
var t5 = prompt("Si o no :> : ");

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
  
  var notaproducto = random(1, 10);
  console.log(notaproducto);

// SOOOOOOO
var conteBoig = "Crearas una marca de electronica, como se llamará? " + t1 + ". Buen nombre! Pero quienes seran tus empleados? " + 
t2 + ". Guau que buenos empleados. Crearas un " + t3 + ". Vale tendra un procesador " + t4 + ", es de los buenos! Sera flip(se doblara?)? " + 
t5 + "? Genial has acabado! "
var conteBoigHTML = document.getElementById("conteBoig")

if (notaproducto > 5){

    var conteBoig = "Crearas una marca de electronica, como se llamará? " + t1 + ". Buen nombre! Pero quienes seran tus empleados? " + 
    t2 + ". Guau que buenos empleados. Crearas un " + t3 + ". Vale tendra un procesador " + t4 + ", es de los buenos! Sera flip(se doblara?)? " + 
    t5 + "? Genial has acabado! La nota ha sido: " + notaproducto + ". Que bien! Es muy buen producto!"

}else if(notaproducto <= 5){
    var conteBoig = "Crearas una marca de electronica, como se llamará? " + t1 + ". Buen nombre! Pero quienes seran tus empleados? " + 
    t2 + ". Guau que buenos empleados. Crearas un " + t3 + ". Vale tendra un procesador " + t4 + ", es de los buenos! Sera flip(se doblara?)? " + 
    t5 + "? Genial has acabado! La nota ha sido: " + notaproducto + ". Bueno, no pasa nada el siguiente producto te ira mejor! :)"
}

conteBoigHTML.textContent = conteBoig
alert(conteBoig)

/* Crearas una marca de electronica, como se llamara? (El nombre de una marca inventada), vale y a quien epleas?ç
 (Di unos cuantos nombres de famosos). Wow que buenos. I creaas un (Di un electrodomestico (Movil, table, nevera...))
  vale tendra un prozesador (Di algo random), es de los buenos y sera Flip (solo di que si o no) genial ya as acabado
   lo venderemos. Y a quedado (di un numero del 1 al 10) Y eso lo elegimos despues */

//Que-so.A-rroz.
//Mis Ulos en Elotas