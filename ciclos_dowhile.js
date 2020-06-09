  /*ESTRUCTURA DEL CICLO DO WHILE

A diferencia del while, el do while primero ejecuta el código y
después evalúa la condición. Eso quiere decir que nuestro código
siempre se ejecutará al menos una vez.
Al igual que el while, el do while ejecutará nuestro código mientras
que la condición sea verdadera.
do {
// bloque de código que se ejecuta al menos una vez
// y cada vuelta si la condición es verdadera
} while (condicion)*/
  do {
      // bloque de código que se ejecuta al menos una vez
      // y cada vuelta si la condición es verdadera
  } while (condicion)


  var diaSemana = 1;
  /*Definimos la variable diaSemana
      y le asignamos el número 1. */
  do {
      /*Iniciamos el ciclo con la palabra
          reservada do.
          Escribimos entre llaves el código
          que queremos que se ejecute.*/
      console.log('Día de la semana N° ' + diaSemana);
      diaSemana++;
      /*El código que escribamos se
       ejecutará al menos una vez.
       También se volverá a ejecutar
       mientras la condición sea
       verdadera.
      */
  } while (diaSemana <= 7)
  /*Finalizamos el ciclo con la
  palabra reservada while.
  A continuación escribimos entre
  paréntesis la condición que
  queremos evaluar en cada vuelta.
  El ciclo se repetirá mientras ésta
  sea verdadera*/
  /*quedaria asi*/
  var diaSemana = 1;
  do {
      console.log('Día de la semana N° ' + diaSemana);
      diaSemana++;
  } while (diaSemana <= 7)
  /*
  Día de la semana N° 1
  Día de la semana N° 2
  Día de la semana N° 3
  Día de la semana N° 4
  Día de la semana N° 5
  Día de la semana N° 6
  Día de la semana N° 7
  */