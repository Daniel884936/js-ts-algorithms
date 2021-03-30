"use strict";
/* Cargar un vector de 10 posiciones con los 10 primeros elementos
 de la serie de Fibonacci y mostrarlo en pantalla.
 */
(function () {
    var fibonacciNumbers = function () {
        var fNumbers = [];
        for (var index = 0; index < 10; index++) {
            if (index > 1)
                fNumbers.push(fNumbers[index - 2] + fNumbers[index - 1]);
            else
                fNumbers.push(1);
        }
        return fNumbers;
        ;
    };
    console.log('04- 10 primeros numeros de la serie de fibonacci:');
    console.log(fibonacciNumbers());
})();
