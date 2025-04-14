// class (klase) -> object (objektas)
// blyno receptura -> blynas (valgomas)
// namo brezinys '> namas


class Dog {

    constructor (vardas,kailioSpalva) {
        this.name = vardas;
        this.FurColor = kailioSpalva;
        this.age = 0;
        this.legsCount = 4;
        this.hasTail = true;
        this.isStanding = true;
    }   

    hi() {
        return `Hi, my name is ${this.name}!`;
    }

    intro() {
        return `Hi, my name is ${this.name}, my fur is ${this.FurColor} and i am ${this.age} years old.`;
    }

    birthday() {
        //this.age++
        return `Happy birhday ${this.name}! Now you are ${++this.age} years old!`
    }

    lostTail() {
        this.hasTail = false;
    }

    lostLeg() {
        if (this.legsCount > 0) {
            this.legsCount--;
        }
       
    }

    changePose() {
        this.isStanding = !this.isStanding
    }

    changeFurColor(newColor) {
        this.FurColor = newColor;
        return `${this.name} has ${this.FurColor} fur.`
    }

    
}


const Rex = new Dog('Rex','black');
const Brisius = new Dog('Brisius','white');

console.log(Rex.hi());
console.log(Brisius.hi());
console.log(Rex.intro());
console.log(Brisius.intro());
console.log(Rex.birthday());
console.log(Brisius.birthday());



console.log(Rex.name);
console.log(Brisius.age);

console.log(Rex.FurColor);
console.log(Brisius.legsCount);

Brisius.lostTail();
Brisius.lostLeg();
Brisius.changePose();
Brisius.changeFurColor('red')

console.log(Brisius.changeFurColor('red'));

console.log(Brisius);


