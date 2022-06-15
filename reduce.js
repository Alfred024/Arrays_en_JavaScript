const totals = [1,2,3,4];

const totalsReduce = totals.reduce(
    //El cero en la función es el valor inicial que le damos a la variable suma
    (suma, element) => suma + element, 0
);

console.log(totalsReduce);
