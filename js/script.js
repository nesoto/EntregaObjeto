let RESULTADO = 0;
let cuantosNumeros;
let numeros = [];
let aux;
let nombre = prompt("Hola! ¿Como te llamas?");
let apellido = prompt("¿Cual es tu apellido?");
let edad = Number(prompt("¿Y tu edad?"));

let usuario = new Usuario(nombre, apellido, edad);


if (usuario.getedad() >= 18){
	alert(`Bienvenido/a ${usuario.getnombre()} ${usuario.getapellido()}`);
}else{
	alert("No puedes entrar, eres menor de edad.");
	exit;
}


do {
	respuesta = prompt(usuario.getnombre() + " " + usuario.getapellido() + `
	¿Te gustaría sumar o multiplicar?
	-Sumar
	-Multiplicar`);
	aux = toLowerCase(respuesta);
} while (aux != "sumar" && aux != "multiplicar");


switch(aux){
	case "sumar":
		cuantosNumeros = Number(prompt("¿Cuantos numeros quieres sumar?"));
		numeros = recibenumero(cuantosNumeros);
		RESULTADO = sumar(numeros);
		break;
	case "multiplicar":
		cuantosNumeros = Number(prompt("¿Cuantos numeros quieres multiplicar?"));
		numeros = recibenumero(cuantosNumeros);
		RESULTADO = multiplicar(numeros);
		break;
	default:
		break;

}

alert("El resultado es: " + RESULTADO);

alert("¡Gracias por utilizarme!");


//////////////////////////////////Entregas Anteriores/////////////////////////////////////////////
/*if (respuesta == "Si" || respuesta == "si"){
	cuantosNumeros = Number(prompt("¿Cuantos numeros me vas a dar?"));
	
	numeros = recibenumero(cuantosNumeros);
	RESULTADO = sumar(numeros);

	alert("Gracias! El resultado es " + RESULTADO);
}else if( respuesta == "No" || respuesta == "no"){
	RESULTADO = 0;
	alert("Esta bien :C");
}*/

///////////////////////////////////////////FUNCIONES/////////////////////////////////////////////

function toLowerCase(string){
	return string.toLowerCase();  
}

function sumar(numeros){
	let resultado = 0;
	for (let i=0; i<numeros.length; ++i){
		resultado += numeros[i].valueOf();
	}
	return resultado;
	
}

function multiplicar(numeros){
	let resultado = numeros[0];
	if (numeros.length > 1){
		for (let i=1; i<numeros.length; ++i){
			resultado *= numeros[i];
		}
		return resultado;
	}else{
		return resultado;
	}
}

function recibenumero(cantidad){
	for (let i=0; i<cantidad; ++i){
		numeros[i] = Number(prompt("Dame un numero"));
	}
	return numeros;
}

function Usuario(nombre, apellido, edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;

	this.getnombre = function(){
		return this.nombre;
	}

	this.getapellido = function(){
		return this.apellido;
	}

	this.getedad = function(){
		return this.edad;
	}
}