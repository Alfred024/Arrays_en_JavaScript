const words = ["papa","hola","platano","popo"];

const wordsFilter = [];


//Forma Normal
for (let i = 0; i < words.length; i++) {
        const element = words[index];
        if(element.length>=5){
            wordsFilter.push(element);
        }
}
console.log(wordsFilter);


//Forma con filter
const trueWordsFilter = words.filter(
    element => element.length >= 5
);
console.log(trueWordsFilter);


//IMplementando filter con el array de el mapa do objetos
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

const ordersFilter = orders.filter(
    element => (element.delivered === true) && (element.total <=100)
);

const busqueda = (query) => {
    return orders.filter(
        element => {
            return element.customerName.includes(query);
        }
    );
};

console.log(busqueda("Vale"));