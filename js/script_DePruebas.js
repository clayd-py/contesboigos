var t1=prompt("Tu nombre completo: ");
var t2=prompt("Alguien de tu clase: ");
var t3=prompt("Algo random: ");
var conteBoig=("Hola me llamo "+t1+" y te voy a explicar una historia real. Yo estaba jugando con "+t2+" y nos encontramos un "+t3+" andante y no parava de perseguirnos.")
var conteBoigHTML = document.getElementById("conteBoig")
conteBoigHTML.textContent = conteBoig
console.log(t1);
console.log(t2);
// var t3= t1+t2;
// console.log(t3)
//Ahhh losiento hacia cosas ah.
alert(conteBoig)
localStorage.setItem("conteBoig", conteBoig)
