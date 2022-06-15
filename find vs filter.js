const edades = [18,20,40,17,39,51];

//FILTER
const edadesFiltradas = edades.filter(edad => edad>=20);
console.log(edadesFiltradas);

//FIND
const edadesFiltradas2 = edades.find(edad => edad>=20);
console.log(edadesFiltradas2);


///////////////////////////////
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const answer = products.find(
    elemento => elemento.price >= 20
  );

  const answerIndex = products.findIndex(
    elemento => elemento.price >= 20
  );