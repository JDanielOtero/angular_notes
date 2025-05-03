
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

    // // Las propiedades se extienden
    // export class Hero extends Person{

    //     constructor(
    //         public alterEgo: string,
    //         public age: number,
    //         public realName: string,
    //     ){
    //         super(realName , 'New York');
    //         // Super es de la clase que yo me extiendo 
    //     }
    // }

    // OTRA FORMA DE HACELO, LA CLASE HERO SERA AFECTADA POR SI LA CALSE PERSONA CAMBIA 
    export class Hero {

        // public person: Person;

        constructor(
            public alterEgo: string,
            public age: number,
            public realName: string,
            public person: Person,
        ){
            // this.person = new Person(realName)
            // la idea es que no afecte los cambios de la calse Person, el impedimento es que tenemos la dependencia directa en nuestro codigo
            // La clase es afectada por un cambio que hay en persona. 
        }
    }


    const tony = new Person('Tony Startk', 'New York'); // Por eso creamos esta variable, se solicita que se envie la informacion de la persona 
    const ironman = new Hero('Ironman',45,'Tony',tony);
    console.log(ironman)

    // Si el Heroe cambia, quiza se pone firstName y LastName, es un cambio que afecta Person, pero ya se sluciona rapidamente, porque hay una referencia al objeto Person, 
    // Si, hay dos instancias pero es mejor

