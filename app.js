/*
let frutas = [
    "Manzana",
    "Kiwi",
    "Frutilla",
    "Limón",
    "Mango",
    "Sandía",
    "Naranja",
    "Uva",
];
let textoDeFrutas = frutas.map((fruta, indice) => {
    return "La fruta es: " + fruta;
})

console.log(textoDeFrutas);

metodo MAP


let numeros = [1,2,3,4,5,6,7,8,9];
console.log(numeros)
let numerosMultiplicados = numeros.map((numeros, indice) => {
    return numeros * 2;
})
console.log(numerosMultiplicados)

*/
let cars = [
    {
        name: "McQueen",
        engine: {
            cylinders: 4,
            size: 2.4,
        },
        wheels: 4,
        doors: 2,
        isFast: false,
    },
    {
        name: "Franccesco",
        engine: {
            cylinders: 6,
            size: 2.4,
        },
        wheels: 4,
        doors: 2,
        isFast: false,
    },
    {
        name: "Batimovil",
        engine: {
            cylinders: 1,
            size: 2.4,
        },
        wheels: 4,
        doors: 2,
        isFast: false,
    },
    {
        name: "Mate",
        engine: {
            cylinders: 10,
            size: 2.4,
        },
        wheels: 4,
        doors: 2,
        isFast: false,
    },
]

let newCars = cars.map((car, indice) =>{
    let newCar = car;
    if(car.engine.cylinders > 5){
        newCar.isFast = true;
    }
    return newCar;
});
console.log(newCars)