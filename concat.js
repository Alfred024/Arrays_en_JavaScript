const numbers = [1,1,2,2];
const otherNumbers = [3,3,4,4];

const numbersConcat = numbers.concat(numbersConcat);
const numbersConcat2 = [...numbers, ...otherNumbers];

//Si quieres cambiar el array original
numbers.push(...otherNumbers);