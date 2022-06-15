const letras = ["a","b","c"];

const newArray = [];
for (let i = 0; i < letras.length; i++) {
    const element = letras[i];
    newArray.push(element+", letra");
}

console.log("Original: ",letras);
console.log("New Array: ",newArray);

//El código de arriba puede ejecutarse usando la función Map. Ejemplo: 
const newArrayMap = letras.map(letra => letra+", letra");