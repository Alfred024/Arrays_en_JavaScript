
//-----------CLASE-----------//
const arrayNumbers = [20,19,15];
arrayNumbers.forEach(
    elemento => console.log(elemento)
);

const listaProductos = document.getElementById("listaProductos");

arrayNumbers.forEach(producto => 
    {listaProductos.innerHTML += `<li>${"Edad: "+producto}</li>`;}
);


//----------RETO----------//
const arrayMaterias = [
    {name: "Cálculo", state: true},
    {name: "Física", state: true},
    {name: "Alemán 3", state: false},
]

const listaMaterias = document.getElementById("listaMaterias");

arrayMaterias.forEach(materia => 
    {listaMaterias.innerHTML += `${"Materia: "+materia.name}<br>${"Estado: "+materia.state}<br><br>`;}
);