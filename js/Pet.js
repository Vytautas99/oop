import { Animal } from "./Animal.js";

    export class Pet extends Animal {
        constructor(name,furColor) {
            super(name);
            this.name = name;
            this.furColor = furColor;
            this.legsCount = 4;
            this.eyeCount = 2;
    
            }
        
            hi() {
                return `Hi, my name is ${this.name}`;
            }
        
            voice() {
                const sound = (' ' + this.sound).repeat(2);
                return `${this.name}:${sound}!`;
        
            }
        
    }