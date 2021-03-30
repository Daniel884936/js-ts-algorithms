(function(){

/* Leer 10 enteros, almacenarlos en un 
vector y determinar en qué posición del vector está el mayor número primo leído
 */ 
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const isPrime = (number:number) =>{
        for (let index = 2; index < number -1; index++) {
            if(number % index ===0) return false;
        }
        return true;
    }

    const lasrgestPrimeNumberPosition = (numbers:number[]):number =>{
        if(numbers ==null || numbers.length <=0 ) return -1;
        let  largest  = 0;
        const primeNumbers  = numbers.filter(isPrime);

        for (let i = 1; i < primeNumbers.length; i++) {
           if(primeNumbers[i]> primeNumbers[largest] ) largest = i;
        }

        largest = numbers.indexOf(primeNumbers[largest]);
        return largest;
    }

    console.log('03- mayor numero primo leido:');
    console.log(lasrgestPrimeNumberPosition(numbers));
})();