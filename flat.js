const matriz = [
    [1,2,3],
    [4,5,[5.1,5.2],6],
    [7,8,9,[10,11,12]]
];

function matrizSolved(matriz){
    const newMatriz = [];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            newMatriz.push(
                ...matriz[i]
            );
        }
    }
    return newMatriz;
}


//Solución del reto
for (let filas = 0; filas < matriz.length; filas++) {
    for (let columnas = 0; columnas < matriz[filas].length; columnas++) {
        if(matriz[filas][columnas].length>=1){
            for (let i = 0; i < matriz[filas][columnas].length; i++) {
                console.log(matriz[filas][columnas][i]);
            }
        }else{
            console.log(matriz[filas][columnas]);
        }
    }
}

//Ora sí el método flat
const matrizFlat = matriz.flat(2);