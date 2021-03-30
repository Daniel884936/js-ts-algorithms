"use strict";
(function () {
    /*     Leer 10 números enteros, almacenarlos en un vector y
           determinar en qué posiciones se encuentran los números terminados en 4.
     */
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var positionOfLargestNumbersEndingInFourd = function (numbers) {
        if (numbers == null || numbers.length <= 0)
            return -1;
        var numbersEndingInFour = numbers.filter(function (x) {
            var strNum = x.toString();
            if (strNum[strNum.length - 1] === '4')
                return true;
            return false;
        });
        var numPositions = [];
        numbersEndingInFour.forEach(function (currentItem, i) {
            numPositions.push(numbers.indexOf(currentItem));
        });
        return numPositions;
    };
    console.log('08 - posicion de los numeros que terminan en 4: ');
    console.log(positionOfLargestNumbersEndingInFourd(numbers));
})();
