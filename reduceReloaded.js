//Reduce reloaded con array de números
const items = [1,3,2,3];

const itemsReduceReloaded = items.reduce(
    (objeto, element) => {
        if(!objeto[element]){
            objeto[element] = 1;
        }else{
            objeto[element]=objeto[element]+1;
        }
        return objeto;
    }, {}
);


//Reduce reloaded con array de objetos
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

const dataReduceReloaded = data.reduce(
    (objeto, item) => {
        if(!objeto[item.level]){
            objeto[item.level] = 1;
        }else{
            objeto[item.level] += 1;
        }
        return objeto;
    }, {}
);

//Reto reduce reloaded

const numeros = [1,2,3,3,4,5,2,1,1,3,4,5,6,7,5,5,4,7,8,9,8,7,5,4,5,8,9];
const rangos = ["1-5: ","6-8: ","9-10: "];

const numerosReduce = numeros.reduce(
    (objeto, item) => {
            if(item<=5 && item>=1){
                objeto["1-5: "]++;
            }

            if(item<=8 && item>=6){
                objeto["6-8: "]++;
            }

            if(item<=10 && item>=9){
                objeto["9-10: "]++;
            }
            
            return objeto;
        
    },{
        "1-5: ":0,
        "6-8: ":0,
        "9-10: ":0
    }
);