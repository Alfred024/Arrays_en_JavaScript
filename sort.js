const months = ["March", "Jan", "Feb", "Dec"];
const monthsSort = months.sort();


const numbers = [1, 30, 4, 21, 100000];
//Ordenando numbers de menor a mayor
const numbersSort = numbers.sort(
    (x,y) => x-y
);


const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
const wordsSorted = words.sort();


const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
//Ordenando el array de objetos por el atributo "total", de menor a mayor
const ordersSort = orders.sort(
    (a,b) => a.total - b.total
);