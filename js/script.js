

let nombre = prompt("¿Como te llamas?");
alert("Hola " + nombre);
let RESULTADO = 0;
let cuantosNumeros;
let numeros = [];
let aux;


do {
	respuesta = prompt(`
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
