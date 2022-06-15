const mascotas = ["gato","rana","ajolote"];

const answer = mascotas.includes("gato");
console.log(answer);

//
const array1 = [["ana", "santi", "nico", "anastasia"], "an"];
const array2 = [["ana", "santi", "nico", "anastasia"], "xyz"];

function buscarLaWea(array, condicion){
    const answer = array[0].filter(
        item => item.includes(condicion)
    );
    return answer;
}



