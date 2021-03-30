(function () {
/*     Leer 10 números enteros, almacenarlos en un
       vector y determinar cuántas veces está repetido el mayor. 
 */
   var numbers = [1, 2, 3, 4, 5, 9, 7, 9, 9, 10];

    const countLargestNumIsRepeat = (numbers:number[]):number=>{
        if(numbers ==null || numbers.length <=0 ) return -1;
        let  largestNumPostion:number = 0;
        for (let index = 1; index < numbers.length; index++) {
           if(numbers[index]> numbers[largestNumPostion]){
               largestNumPostion = index;
           }
        }
        let largestNumbers =  numbers.filter(x=> x ===numbers[largestNumPostion]);  
        return largestNumbers.length;   
    }
    console.log('09 - numeros de veces que se repite el mayor: ')
    console.log(countLargestNumIsRepeat([1,2,5,5,5,4,5]));
})();