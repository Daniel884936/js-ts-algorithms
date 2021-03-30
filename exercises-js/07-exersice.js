"use strict";
(function () {
    /*     Leer 10 números enteros, almacenarlos en un vector y determinar
    en qué posiciones se encuentra el número mayor
     */ var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var largestNumberPosition = function (numbers) {
        if (numbers == null || numbers.length <= 0)
            return -1;
        var largest = 0;
        for (var i = 1; i < numbers.length; i++) {
            if (numbers[i] > numbers[largest])
                largest = i;
        }
        return largest;
    };
    console.log('07 - posicion del mayor numero entero: ');
    console.log(largestNumberPosition(numbers));
})();
