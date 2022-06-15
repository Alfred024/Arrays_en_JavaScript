const orders = [
    {
        name: "Nicolas",
        total: 60,
        delivered: true
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
      },
      {
        customerName: "Santiago",
        total: 180,
        delivered: true,
      },
      {
        customerName: "Valentina",
        total: 240,
        delivered: true,
      }
];
console.log(orders);

//Debido a que estamos obteniendo los datos numéricos unicamente, estamos creando un array de números a partir de uno de objetos
const newArray = orders.map(item => item.total);
console.log(newArray);


//Aquí queremos agregar un nuevo atributo y se crea un nuevo array con el valor que le insertamos, pero lo que logramos además es modificar al array original, para evitar esto utilizamos el valor que arroja la constante newArray3
const newArray2 = orders.map(item =>{
    item.tax = .19;
    return item;
});
console.log(newArray2);

const newArray3 = orders.map(item =>{
    return{
        ...item,
        tax: .19
    };
});
console.log(newArray3);