
// Aunque TypeScript no lo advierte en tiempo de compilación, esto puede romperse en tiempo de ejecución, porque no sabe qué tipo es argument.
{
    function whatsMyType(argument: any) {
        return argument;
    }

    const amIString = whatsMyType('Hola Mundo');
    const amINumber = whatsMyType(100);
    const amIArray  = whatsMyType([1,2,3,4,5]);

    console.log(amIString.split(' '));  // ✔️ funciona
    console.log(amINumber.split(' ')); // ⚠️ error en tiempo de ejecución
    console.log(amIArray.split(' '));  // ⚠️ error en tiempo de ejecución
}

// Genericos

function whatsMyType<T>(argument: T): T {
    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');        // string
const amINumber = whatsMyType<number>(100);                 // number
const amIArray  = whatsMyType<number[]>([1, 2, 3, 4, 5]);   // number[]

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));