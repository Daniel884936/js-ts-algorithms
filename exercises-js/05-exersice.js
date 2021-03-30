"use strict";
(function () {
    /*     lmacenar en un vector de 10 posiciones los 10 números
           primos comprendidos entre 100 y 300. Luego mostrarlos en pantalla.
     */
    var isPrime = function (number) {
        for (var index = 2; index < number - 1; index++) {
            if (number % index === 0)
                return false;
        }
        return true;
    };
    var primeNumbers = function () {
        var primeNumbers = [];
        var count = 0;
        for (var number = 100; number <= 300; number++) {
            if (count < 10 && isPrime(number)) {
                primeNumbers.push(number);
                count++;
            }
        }
        return primeNumbers;
    };
    console.log('05 - 10 posiciones de numoros primos entre 100 y 300:');
    console.log(primeNumbers());
})();
