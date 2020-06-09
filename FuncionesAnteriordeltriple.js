function doble(numero) {
  return 2 * numero;
}

function siguiente(numero) {
  return numero + 1;
}

function siguienteDelDoble(numero) {
   return siguiente(doble(numero));
}
console.log (siguiente ());


//tengo clases
function tengoClases(dia){
	switch (dia){
		case "lunes":
      case "miercoles":
	   case "viernes":
		console.log("tenés clases")
					break;
					default:
		console.log("no tenés clases")
						
	}
}


//fin de semana
//condicionales if ternario y el switch.

let dia="jueves";
function finDeSemana(dia){
	switch (dia){
		case "viernes":
			return console.log("buen finde")
			break;
			case "lunes":
			console.log("buena semana")
				break;
				default:
			console.log ("buen dia")
	}
}
 
 
//for
//funccion loro
function loro(texto){
	for (i=0;i<5;i++){
		console.log(text)
	}
}
 
 
//contando impares
////funccion noparesdecontarimpar


function noParedDeContarImparesHasta(numero){
	let contador =0;
	  for (let i=0 ;i < numero ; i++){
  		if (i%2!=0){
  			contador++
  		}
  	}
  	return contador
} 


//ciclos
//while--do while
//contenemos un while

function count (desde,hasta){
	while(desde<hasta){
		console.log("El número actual es "+ desde + " es menor a "+hasta)
		desde++
	}
}


//Do while
//encontrar el 5

let numero =[]
function encontreUn5(numero){
	let i=0
	do{
		if(numero[i]==5){
			return "se encontró un 5!"
		}
		i++		
	}while(i<=numeros.length)
}
encontreUn5(numero)


//tablas de multiplicar
function tablaDeMultiplicar(numero){
	let i=1;
	while(i<=10){
		console.log(numero+ "*" +i+" = "numeros*i)
		i++
	}
}


///////////