(function(){

/*     lmacenar en un vector de 10 posiciones los 10 números 
       primos comprendidos entre 100 y 300. Luego mostrarlos en pantalla. 
 */
    const isPrime = (number:number) =>{
        for (let index = 2; index < number -1; index++) {
            if(number % index ===0) return false;
        }
        return true;
    }

    const primeNumbers = ():number[] =>{
        let  primeNumbers:number[] = []
        let  count:number = 0;
        for (let number = 100; number <= 300; number++) {
           if(count <10 && isPrime(number)){
               primeNumbers.push(number);
               count++;
           }
        }
        return primeNumbers;
    }
    console.log('05 - 10 posiciones de numoros primos entre 100 y 300:')
    console.log(primeNumbers());
})();