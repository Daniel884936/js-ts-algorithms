"use strict";
(function () {
    /*     Leer 10 números enteros, almacenarlos en un
           vector y determinar cuántas veces está repetido el mayor.
     */
    var numbers = [1, 2, 3, 4, 5, 9, 7, 9, 9, 10];
    var countLargestNumIsRepeat = function (numbers) {
        if (numbers == null || numbers.length <= 0)
            return -1;
        var largestNumPostion = 0;
        for (var index = 1; index < numbers.length; index++) {
            if (numbers[index] > numbers[largestNumPostion]) {
                largestNumPostion = index;
            }
        }
        var largestNumbers = numbers.filter(function (x) { return x === numbers[largestNumPostion]; });
        return largestNumbers.length;
    };
    console.log('09 - numeros de veces que se repite el mayor: ');
    console.log(countLargestNumIsRepeat([1, 2, 5, 5, 5, 4, 5]));
})();
