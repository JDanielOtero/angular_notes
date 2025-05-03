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
    ){}
}

const ironman1 = new Person('Ironman','New York');
console.log(ironman1)

// Las propiedades se extienden
export class Hero extends Person{

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super(realName , 'New York');
        // Super es de la clase que yo me extiendo 
    }
}

const ironman = new Hero('Ironman',45,'Tony');
console.log(ironman)
