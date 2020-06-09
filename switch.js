/*SWITCH

DEFINIENDO UN SWITCH
El switch, al igual que los otros condicionales, evalúa una
condición y, según el resultado, ejecuta sólo las líneas de código
que correspondan.
Nos propone una sintaxis más legible para esos casos en los
que queremos evaluar que un valor sea igual a alguno de los
casos que proponemos.
También nos permite agrupar casos y ejecutar un mismo
bloque de código para cualquier caso de ese grupo.

ESTRUCTURA DE UN SWITCH
El switch está compuesto por una expresión a evaluar, seguida
de diferentes casos, tantos como queramos, cada uno
contemplando un escenario diferente.*/

switch (expresión) {
    case valorA:
        //código que se ejecuta si valorA es verdadero
        break;
    case valorB:
        //código que se ejecuta si valorB es verdadero
        break;
}

switch (expresión) {
    case valorA:
        //código que se ejecuta si valorA es verdadero
        break;
    case valorB:
        //código que se ejecuta si valorB es verdadero
        break;
}


let edad = 5
    /*Definimos la variable edad y le
        asignamos el número 5.*/
    /*Iniciamos el condicional con la
palabra reservada switch y, entre
paréntesis, la expresión / condición
que queremos evaluar.
En este caso vamos a evaluar qué
valor tiene la variable edad.
*/

switch (edad) {
    case 10:
        console.log('Tiene 10 años')
        break;
        /*Por cada caso escribimos la palabra
reservada case y a continuación el
valor que queremos evaluar.
En este caso, preguntamos si el
valor de la variable edad es 10.
Como este caso NO es verdadero,
Javascript ignora el código de este
caso y pasa a evaluar el siguiente
caso.*/
    case 5:
        console.log('Tiene 5 años')
        break;
}
/*Este caso ES verdadero, por lo
tanto Javascript ejecuta el código
que está asociado: en este caso un
console.log().
La palabra reservada break corta
las siguientes evaluaciones. Si
quisiéramos que a pesar de ser
verdadero este caso Javascript
continúe evaluando los siguientes,
simplemente no la escribimos. */

/*¿Y SI NINGÚN CASO ES VERDADERO?
En ese caso introducimos la palabra reservada default, que
nos permite tener un comportamiento por defecto cuando
ningún caso evalúa como verdadero.*/
switch (expresión) {
    case valorA:
        // código que se ejecuta si valorA es verdadero
        break;
    default:
        // código que se ejecuta si ningún caso es
        verdadero
}
//codigo
let fruta = 'wefwef';
switch (fruta) {
    case 'manzana':
        console.log('Qué rica es la manzana');
        break;
    case 'naranja':
        console.log('¡Me encanta!');
        break;
    default:
        console.log('No conozco esa fruta');
        break;
}

/*90          Definimos la expresión que vamos
a evaluar en el switch.
En este caso queremos preguntar
por el valor de la variable fruta.
*/
/*90,91,92   Este caso es falso, por lo tanto no
se ejecuta su código.*/
/*93,94,95    Este caso también es falso, por lo
tanto no se ejecuta su código.*/
/*96,97,98    Como ningún caso evaluó a
verdadero, se ejecuta el código
dentro del bloque default.*/