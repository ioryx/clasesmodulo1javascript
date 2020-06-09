/*LOS CICLOS
WHILE / DO WHILE*/
/*Los ciclos nos permiten repetir
instrucciones de manera
sencilla. Podemos hacerlo una
determinada cantidad de veces
o mientras que se cumpla una
condición.*/

/*1.
WHILE*/
/*El ciclo while ejecutará nuestro código mientras la condición que
especifiquemos se cumpla.
Consta de dos partes: la condición y el bloque de código que
queremos ejecutar mientras que la condición establecida evalúe como
verdadera.*/
while (condicion) {
    // bloque de código que se ejecuta
    // si la condición es verdadera
}

let contador = 0;
/*Definimos la variable contador y le
asignamos como valor el número 0.*/
while (contador <= 4)
/*Iniciamos el ciclo con la palabra
reservada while y entre paréntesis,
la expresión / condición que
queremos evaluar.
Mientras sea verdadera, se
ejecutará el código que definamos
entre las llaves { }.
*/
{
    console.log('Contador: ' + contador);
    /*También vamos a mostrar por
     consola cuánto vale contador en
     ese momento*/
    contador++;
    /*En cada repetición, vamos a
     incrementar en 1 el valor que tenga
     asignada la variable contador.*/
}

/*En cada vuelta, se vuelve a evaluar
la condición que definimos.
Mientras sea verdadera, se
ejecutará el bloque de código que
definamos.*/
/*¿CÓMO SE VE EN CONSOLA?
 */
/*Contador: 0
Contador: 1
Contador: 2
Contador: 3
Contador: 4*/