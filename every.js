//Es como el some, pero todos deben cumplir con la condición 

const numeros = [1,2,3,4,5];

const everyNumber = numeros.every(
  number => number<=10
);
//Es igual a true porque todos los elementos son menores a 10


//Reto de la clase
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 12,
    },
];

//SIN MÉTODOS 
function sonMenores(array){
    let condición;
    for (let i = 0; i < array.length; i++) {
        if(array[i].age<=15){
            condición = true;
        }else{
            condición = false;
        }
    }

    return condición;
}

//CON MÉTODOS
const edades = team.map(
    element => element.age
);
console.log(edades);

const reto = edades.every(edad => edad<=15);
console.log(reto);