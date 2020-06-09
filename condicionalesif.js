/*LOS
CONDICIONALES
IF / ELSE IF / ELSE*/
/*CONDICIONAL SIMPLE*/
if (condición) {
    // código a ejecutar si la condición es verdadera
}
/*CONDICIONAL CON BLOQUE ELSE*/
if (condición) {
    // código a ejecutar si la condición es verdadera
} else {
    // código a ejecutar si la condición es falsa
}


/*CONDICIONAL CON BLOQUES ELSE IF*/
if (condición) {
    // código a ejecutar si la condición es verdadera
} else if (otracondición) {
    // código a ejecutar si la otra condición es verdadera
} else {
    // código a ejecutar si la condición es falsa
}

let edad = 19;
/*Declaramos la variable edad y le
asignamos el número 19.*/
let acceso = '';
/*Declaramos la variable acceso y le
asignamos un string vacío, con la
intención de asignarle un nuevo valor
según el resultado que arrojen los
condicionales declarados a
continuación.
*/
if (edad < 16) {
    acceso = 'prohibido';
    /*Iniciamos el condicional. Nuestra
     primera condición evalúa si edad es
     menor a 16.
     En caso de ser verdadera, le
     asignamos el string 'prohibido' a la
     variable acceso.
     En este caso, la condición es falsa,
     por lo tanto Javascript pasa a
     evaluar la siguiente condición.
    */
    /*Declaramos un bloque else if para
contemplar una segunda condición:
Esta condición va a ser compuesta y
va a requerir:
- que edad sea mayor o igual a 16
- que edad sea menor o igual a 18
La condición nuevamente es falsa,
por lo tanto Javascript continúa
leyendo el condicional.
*/
} else if (edad >= 16 && edad <= 18) {
    acceso = 'permitido sólo acompañado de un mayor';
} else {
    acceso = 'permitido';
}
/*Como ninguna de las condiciones
anteriores era verdadera, se ejecuta
el código dentro del else.
Por lo tanto, ahora la variable acceso
es igual al string 'permitido'.
*/
let edad = 19;
let acceso = '';
if (edad < 16) {
    acceso = 'prohibido';
} else if (edad >= 16 && edad <= 18) {
    acceso = 'permitido sólo acompañado de un mayor';
} else {
    acceso = 'permitido';
} //queda asi