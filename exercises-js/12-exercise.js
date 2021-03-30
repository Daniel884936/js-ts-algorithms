"use strict";
(function () {
    /*     Leer 10 números enteros, almacenarlos en un vector y
           determinar a cuánto es igual el promedio entero de los datos del vector
     */
    var numbers = [1, 2, 3, 4, 5, 9, 7, 9, 9, 10];
    var getAverage = function (numbers) {
        var total = numbers.reduce(function (acumulator, currenteValue) { return acumulator + currenteValue; });
        var averege = total / numbers.length;
        return averege;
    };
    console.log('12 - promedio del vector de numeros: ');
    console.log(getAverage(numbers));
})();
