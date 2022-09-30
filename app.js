//Incremento

//Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).

/*
const numero = Number(prompt("Por favor ingresa un número"));
const incremento = Number(prompt("Por favor ingresa un primer incremento"));
const incremento2 = Number(prompt("Por favor ingresa un segundo incremento"));
const incremento3 = Number(prompt("Por favor ingresa un tercer incremento"));
const incremento4 = Number(prompt("Por favor ingresa un cuarto incremento"));
const incremento5 = Number(prompt("Por favor ingresa un quinto incremento"));

alert(`Incremento 1) Total: ${numero + incremento}, Incremento 2) Total: ${numero + incremento + incremento2}, Incremento 3) Total: ${numero + incremento + incremento2 + incremento3}, Incremento 4) Total: ${numero + incremento + incremento2 + incremento3 + incremento4}, Incremento 5) Total: ${numero + incremento + incremento2 + incremento3 + incremento4 + incremento5}`)
*/

const numero = Number(prompt("Por favor ingresa un número"));
const incremento = Number(prompt("Por favor ingresa una cantidad a ir incrementando"));
const incrementoDos = numero + incremento;
const incrementoTres = incrementoDos + incremento;
const incrementoCuatro = incrementoTres + incremento;
const incrementoCinco = incrementoCuatro + incremento;
const incrementoSeis = incrementoCinco + incremento;
alert(`Empezando con ${numero} e incrementando ${incremento},
"Incremento 1) Total: ${incrementoDos}"`); 
alert(`"Incremento 2) Total: ${incrementoTres}"`);
alert(`"Incremento 3) Total: ${incrementoCuatro}"`);
alert(`"Incremento 4) Total: ${incrementoCinco}"`);
alert(`"Incremento 5) Total: ${incrementoSeis}"`);


