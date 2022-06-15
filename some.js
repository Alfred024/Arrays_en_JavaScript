const numeros = [1,3,5];

const numerosSome = numeros.some(
    element => element%2===0
); 


//Método some con array de objetos
const orders = [
    {
        customerName: "Nicolas",
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

const ordersSome = orders.some(
    nombre => nombre.customerName === "Santiago"
);


//Some con librería 
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
];
