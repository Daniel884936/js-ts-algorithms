(function(){
/*     Leer 10 números enteros, almacenarlos en un vector y determinar 
       en qué posiciones se encuentran los números con más de 3 dígitos. 
 */   
    var numbers = [1, 2, 88888, 55555, 5, 6, 7, 888888, 9, 10];
    const moreThanThreeDigits = (numbers:number[]):number[] =>{
        if(numbers ==null || numbers.length <=0 ) return [];
        let numbersWithMoreThanThreeDigits:number[] = numbers.filter(x=>{
            if(x>= 1000 || x<=-1000) return true;
             return false;
            });

            let  numPositions:number[] = [];
    
            numbersWithMoreThanThreeDigits.forEach((currentItem,i) => {
                numPositions.push(numbers.indexOf(currentItem));
            });
            return numPositions;
    }
    console.log('10 - posicion en la que se encuentran los numeros con mas de 3 digitos: ')
    console.log(moreThanThreeDigits(numbers));
})();