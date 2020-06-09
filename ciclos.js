/*LOS CICLOS
FOR*/
/*Los ciclos nos permiten repetir
instrucciones de manera
sencilla. Podemos hacerlo una
determinada cantidad de veces
o mientras que se cumpla una
condición.*/
/*ESTRUCTURA DE UN CICLO FOR
Consta de 3 partes que definimos dentro de los paréntesis. En
conjunto, nos permiten determinar de qué manera se van a
realizar las repeticiones, y definir las instrucciones que
queremos que se lleven a cabo en cada una de ellas.*/
for (inicio; condición; modificador) {
    //código que se ejecutará en cada repetición
}

/*ESTRUCTURA DE UN CICLO FOR
 */
for (let vuelta = 1; vuelta <= 5; vuelta++) {
    console.log('Dando la vuelta número ' + vuelta);
};
/*Dando la vuelta 1
Dando la vuelta 2
Dando la vuelta 3
Dando la vuelta 4
Dando la vuelta 5*/
/*¡VEAMOS CADA PARTE EN ACCIÓN!*/
/*Inicio
Antes de arrancar el ciclo, se establece el valor inicial de
nuestro contador.*/

//var vuelta = 1; 
for (var vuelta = 1; vuelta <= 5; vuelta++) {
    console.log('Dando la vuelta número ' + vuelta);
};
/*Condición
Antes de ejecutar el código en cada vuelta, se pregunta si la
condición resulta verdadera o falsa.
Si es verdadera, continúa con nuestras instrucciones.
Si es falsa, detiene el ciclo.*/

//vuelta <= 5; 
for (var vuelta = 1; vuelta <= 5; vuelta++) {
    console.log('Dando la vuelta número ' + vuelta);
};

/*Modificador (incremento o decremento)
Luego de ejecutar nuestras instrucciones, se modifica nuestro
contador de la manera que hayamos especificado, en este caso
se le suma 1.*/
//vuelta++
for (var vuelta = 1; vuelta <= 5; vuelta++) {
    console.log('Dando la vuelta número ' + vuelta);
};

/*EL CICLO FOR EN ACCIÓN*/
/*En cada ciclo, se verifica si el valor de vuelta es menor o igual 5,
si es así se ejecuta el console.log() y se incrementa el valor de
vuelta en 1.
Cuando vuelta deje de ser menor o igual a 5, se corta el ciclo.*/
/*Iteración # Valor de vuelta ¿ vuelta <= 5 ? Ejecutamos
1 1 true
2 2 true
3 3 true
4 4 true
5 5 true
6 6 false*/