/* Consigna: Crea un algoritmo que solicite al usuario uno o más valores
 ingresados por prompt(),compare las entradas y, en función de ciertas 
 condiciones, muestre por consola o alert() el resultado según los valores 
 ingresados y las condiciones cumplidas. 
 Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee instrucciones condicionales.*/

let counter = 0;
const distanciaAlSol = 144000000;
const totalPreguntas = 3;
const errorPermitido = 30;

alert(
	'La Consola oculta, si logras con ella interactuar, grandes misterios revelará.'
);

alert('Ups, eso fue un pequeño error del sistema. Espero que no te alarmes');

alert(
	'De todas maneras, Hola, yo soy "BullyingBot", en la proxima ventana ingresa tu nombre.'
);

const inputUsuario = prompt('Ingresa tu nombre:');
alert(
	'Hola ' + inputUsuario + ', tu nombre es tipico de alguien que no se baña.'
);
alert(
	'Te voy a hacer ' +
		totalPreguntas +
		' preguntas basicas para saber si estas calificado para seguir en el curso de Javascript'
);
alert(
	'Si no respondes todas correctamente, sos pollo, tu profe no te va a querer ver la proxima clase.'
);

alert('Empezamos?');

console.log('La respuesta es: "blanco"');
const respuestaPrimeraPregunta = prompt(
	'De que color es el caballo blanco de San Martin?'
);

if (respuestaPrimeraPregunta !== 'blanco') {
	alert('Estas un poco distraído amigo, tomate un feca.');
} else if (respuestaPrimeraPregunta == 'blanco') {
	counter += 1;
	console.log('Respuestas correctas: ' + counter + ' de ' + totalPreguntas);
	alert('Hmm, respondiste correctamente.');
}

console.log('La respuesta es: "9"');
const respuestaSegundaPregunta = prompt(
	'A que numero responde esta frase?: "El culo te llueve"'
);

if (respuestaSegundaPregunta != 9) {
	alert('Ah pero estamos mal ehh, esa no era la respuesta.');
} else if (respuestaSegundaPregunta == 9) {
	counter += 1;
	console.log('Respuestas correctas: ' + counter + ' de ' + totalPreguntas);
	alert(
		'Esto es sospechoso, has respondido perfectamente hasta ahora, no estaras consiguiendo las respuestas por otro lado?'
	);
}

alert('Ultima pregunta, estas preparado?');
console.log('La respuesta es: "~144 millones", pero en numeros!');
const respuestaTerceraPregunta = prompt(
	'Cual es la distancia desde la tierra al sol en kilometros?, te dejo responder con un error del 30%'
);

if (
	respuestaTerceraPregunta < distanciaAlSol ||
	respuestaTerceraPregunta > distanciaAlSol
) {
	alert('JAJAJA, Incorrecto, ni yo sabia eso.');
	alert('Respuestas correctas: ' + counter + '/' + totalPreguntas);
} else if (
	respuestaTerceraPregunta >= distanciaAlSol * (1 - errorPermitido / 100) || //multiplica por 0.7 (70%)
	respuestaTerceraPregunta <= distanciaAlSol * (1 + errorPermitido / 100)
) {
	//multiplica por 1.3 (130%)
	counter += 1;
	console.log('Respuestas correctas: ' + counter + ' de ' + totalPreguntas);
	alert(
		'Ah, sos re troll, lo buscaste en wikipedia, aun asi, respondiste corectamente: ' +
			counter +
			' de ' +
			totalPreguntas
	);
}

if (counter == totalPreguntas) {
	alert(
		'Pareciera que sos digno de seguir en ese curso, estoy seguro que me hackeaste para conseguir las respuestas. "Suerte" ' +
			inputUsuario +
			' mas te vale que entres en el Top 10%. ;)'
	);
} else alert('No sos digno bro, volve a tu casa y aproba la primaria.');
