var t1 = prompt("Dime un nombre: ");
var t9 = prompt("Dime otro nombre: ");
var t2 = prompt("Una idea de un video: ");
var t3 = prompt("Que pasa en el video: ");
var t4 = prompt("Di otra idea de un video pls: ");
var t5 = prompt("Que pasa en el video x2: ");
var t6 = prompt("Dime un numero :D: ");
var t7 = prompt("Otro numerin: ");
var t8 = prompt("Di un objeto: ");

// pedos añañin
var conteBoig = "Bueno tienes muchas cosas que hacer pero, hoy vamos a crear un canal de youtube! Que nombre te pondras? Yo creo que te deberias llamar " +
 t1 + ". Bueno si tu te quieres llamar " + t9 + "... Respeto tu decision :D! De que haras tu primer video? De " + t2 + "? Parece divertido, pero que pasa? " + 
 t3 + ". Ha tenido " + t6 + " likes! Has ganado " + t7 + " subscriptores! Nos va muy bien! Bueno de que sera el siguiente video? De " +
  t4 + ". Ya, es buena, pero que pasa? " + t5 + ". Es bueno! Y has ganado " + t7 + " " + t8 + ". Es lo que querian los subscriptores!"
var conteBoigHTML = document.getElementById("conteBoig");
//pedo pet ZA

//holMi pimere chaba recuerdo el dia en que en chamba jo me enamore CHAMBA ILIOLLAS UTO y sobretodo UTO
conteBoigHTML.textContent = conteBoig;

//console.log(conteBoig)
alert(conteBoig)

/*
Titulo: A ser youtubers se a dicho:  Bueno tienes muchas cosas que hacer pero ,hoy vamos a crear un canal de youtube haber me pondre (Ponte un nombre de youtuber),
 queda sexy. hare un video de (Idea de un video) si eso estara bien. (di lo que secede en el video-idea).
  oh tuvo ( di un numero) de likes y e ganado (di otro numero pls) de subs. Genial el siguiente video sera de...
   (Ide de un video v2) ya ya esta echo, porfin.. (di lo que secede en el video-idea v2) E ganado 
   (d un objeto) Es lo que querian los subs. 
*/