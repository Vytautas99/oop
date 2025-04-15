import { Car } from './js/Car.js'

const volvo = new Car('Volvo S40','black',55);
const zapas = new Car('zapas','white',35);
console.log(volvo.intro());
console.log(zapas.intro());



console.log(zapas.refill(5));
console.log(zapas.refill(5));
console.log(zapas.refill(25));
console.log(zapas.refill(NaN));
console.log(zapas.refill(Infinity));
console.log(zapas.refill(-25));

console.log(zapas);

