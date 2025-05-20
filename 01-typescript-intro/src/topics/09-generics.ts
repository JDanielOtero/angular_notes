// export function whatsMyType( argument:any ) {
//     // La idea es evitar usar any, es como trabajar en javascript

//     return argument;
// }

// const amIString = whatsMyType('Hola Mundo');
// const amINumber = whatsMyType(100);
// const amIArray = whatsMyType([1,2,3,4,5]);

// console.log(amIString.split(' '));
// console.log(amINumber.split(' '));
// console.log(amIArray.split(' '));


// Como hacer que la funcion dependa del tipo de dato que se le da, se dan genericos 


export function whatsMyType<T>( argument:T ): T {
    // La idea es evitar usar any, es como trabajar en javascript

    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);
//Es lo mismo
// const amIString = whatsMyType('Hola Mundo');
// const amINumber = whatsMyType(100);
// const amIArray = whatsMyType([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));