"use strict";
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    /* Leer 10 enteros, almacenarlos en un vector y
    determinar en qué posición del vector está el mayor número par leído. */
    var largestEvenNumberPosition = function (numbers) {
        if (numbers == null || numbers.length <= 0)
            return -1;
        var largest = 0;
        var evenNumbers = numbers.filter(function (x) { return x % 2 === 0; });
        for (var index = 1; index < evenNumbers.length; index++) {
            if (numbers[index] > numbers[largest])
                largest = index;
        }
        largest = numbers.indexOf(evenNumbers[largest]);
        return largest;
    };
    console.log('02- posicion del numoro mayor:');
    console.log(largestEvenNumberPosition(numbers));
})();
