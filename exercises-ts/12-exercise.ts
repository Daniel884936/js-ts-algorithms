(function () {
/*     Leer 10 números enteros, almacenarlos en un vector y 
       determinar a cuánto es igual el promedio entero de los datos del vector
 */

    var numbers = [1, 2, 3, 4, 5, 9, 7, 9, 9, 10];

    const getAverage = (numbers:number[]):number =>{
        const total:number = numbers.reduce((acumulator, currenteValue) => acumulator + currenteValue);
        const averege = total / numbers.length;
        return averege;
    }
    console.log('12 - promedio del vector de numeros: ')
    console.log(getAverage(numbers));
})();