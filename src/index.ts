// string, boolean, number...
let x: number = 10;
// x = "teste";

x = 12;

console.log(x);

// inferência X annotation
let y = 12; // inferência
// y = "teste";

let z: number = 12; // anotation

// tipos básicos
let firtName: string = "Alessandra";
let age: number = 42;
const isAdmin: boolean = true;

// String != string (usar minúscula)

console.log(typeof firtName);

firtName = "Aline";

// object
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase());
console.log(firtName.toUpperCase());

myNumbers.push(4);
console.log(myNumbers);