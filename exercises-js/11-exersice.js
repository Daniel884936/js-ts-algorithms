"use strict";
(function () {
    /*     Leer 10 números enteros, almacenarlos en un vector y determinar
         cuántos números tienen, de los almacenados allí, tienen menos de 3 dígitos.
     */
    var numbers = [1, 2, -88888, 55555, 5, 6, 7, 888888, 9, 10];
    var getLessThanThreeDigits = function (numbers) {
        if (numbers == null || numbers.length <= 0)
            return [];
        var numbersWithLessThanThreeDigits = numbers.filter(function (x) {
            if (x <= 999 && x >= -999)
                return true;
            return false;
        });
        var numPositions = [];
        numbersWithLessThanThreeDigits.forEach(function (currentItem, i) {
            numPositions.push(numbers.indexOf(currentItem));
        });
        return numPositions;
    };
    console.log('11 - posicion en la que se encuentran los numeros con menos de 3 digitos: ');
    console.log(getLessThanThreeDigits(numbers));
})();
