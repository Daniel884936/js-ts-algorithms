"use strict";
(function () {
    /* Leer 10 enteros, almacenarlos en un
    vector y determinar en qué posición del vector está el mayor número primo leído
     */
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var isPrime = function (number) {
        for (var index = 2; index < number - 1; index++) {
            if (number % index === 0)
                return false;
        }
        return true;
    };
    var lasrgestPrimeNumberPosition = function (numbers) {
        if (numbers == null || numbers.length <= 0)
            return -1;
        var largest = 0;
        var primeNumbers = numbers.filter(isPrime);
        for (var i = 1; i < primeNumbers.length; i++) {
            if (primeNumbers[i] > primeNumbers[largest])
                largest = i;
        }
        largest = numbers.indexOf(primeNumbers[largest]);
        return largest;
    };
    console.log('03- mayor numero primo leido:');
    console.log(lasrgestPrimeNumberPosition(numbers));
})();
