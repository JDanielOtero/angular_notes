export class Person {
    // public name: string;
    // private address: string;

    // constructor( name: string, address: string) {
    //     this.name = name;
    //     this.address = address;
    // }

    // Una fomra mas comun y corta de declarar el constructor en typescript

    constructor(
        public name:string,
        private address: string = 'No Address'
    ){

    }
}

const ironman = new Person('Ironman','New York');
console.log(ironman)
