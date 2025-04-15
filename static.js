class Dog {
    constructor (name) {
        this.name = name;
    }

    hi () {
        return `Hi, my name is ${this.name}!`
    }
}

const brisius = new Dog('Briusius');

console.log(brisius);
console.log(brisius.hi());


class Matematika {
    static sudetis (a, b) {
        return a+b;
    }

    static skirtumas (a,b) {
        return a-b; 
    }

    static sandauga (a,b) {
        return a *b;
    }
    
}


const a = Matematika.sudetis(7,5)
const b = Matematika.skirtumas(7,5)
const c = Matematika.sandauga(7,5)
console.log(a);
console.log(b);
console.log(c);



class Tekstas {
    static pirmaRaide(text) {
        return text[0];
    }

    static zodziuKiekis(text) {
        return text.split(' ').length;
    }
}

console.log(Tekstas.pirmaRaide('Labas'));
console.log(Tekstas.zodziuKiekis('Labas rytas'));
