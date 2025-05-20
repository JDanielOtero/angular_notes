function classDecorator(
    constructor: any
){
    // Basicamente un deocrador es una simple funcion que se puede adjuntar a las clases, propiedades o metodos de las clases 
    return class extends constructor{
        newProperty = 'New Property';
        hello = 'override';
    }
}


@classDecorator
export class SuperClass {
    
    public myProperty: string = 'Abc123';

    print(){
        console.log('Hola Mundo')
    }
}

console.log( SuperClass );

const myclass = new SuperClass();
console.log(myclass);