/*
Animal:
    pet:
        - Dog
        - Cat
        - Hamster

    bird:
        - Parrot
        - Hummingbird
        - Eagle

    fish:
        - Shark
        - Dolphin
        - Tuna
        - Pike


*/

import { Dog } from "./js/Dog.js";
import { Cat } from "./js/Cat.js";
import { Hamster } from "./js/Hamster.js";
import { Pike } from "./js/Pike.js";
const rex = new Dog('Rex','black');
const rainis = new Cat ('Rainis','mixed');
const keksas = new Hamster('Keksas', 'brown')

const lydeka = new Pike('Lydeka')
const lydeka = new Pike('Lydeka')
console.log(lydeka.hi());
console.log(lydeka.grantWish());


console.log(rex);
console.log(rex.hi());
console.log(rex.voice());
console.log(rainis.hi());
console.log(keksas.hi());
console.log(keksas.voice());

console.log(rainis);
console.log(rex);
console.log(keksas);

console.log(rex.voice());
console.log(rainis.voice());
console.log(keksas.voice());
