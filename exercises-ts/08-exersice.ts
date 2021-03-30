(function(){

/*     Leer 10 números enteros, almacenarlos en un vector y 
       determinar en qué posiciones se encuentran los números terminados en 4.
 */
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const positionOfLargestNumbersEndingInFourd = (numbers:number[]) =>{
        if(numbers ==null || numbers.length <=0 ) return -1;

        let numbersEndingInFour:number[] = numbers.filter(x=>{
        const strNum  = x.toString();
        if(strNum[strNum.length -1] ==='4') return true;
        return false;
        });

        let  numPositions:number[] = [];

        numbersEndingInFour.forEach((currentItem,i) => {
            numPositions.push(numbers.indexOf(currentItem));
        });
        return numPositions;
    }
    
    console.log('08 - posicion de los numeros que terminan en 4: ')
    console.log(positionOfLargestNumbersEndingInFourd(numbers));
})();