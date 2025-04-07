// ✅ FUNCIÓN TRADICIONAL
{
    // Declaramos una función clásica que recibe dos números y retorna la suma
    function addNumbers(a: number, b: number) {
        return a + b;
    }

    // ✅ FUNCIÓN FLECHA (ARROW FUNCTION)
    const addNumbersArrow = (a: number, b: number): string => {
        return `${a + b}`;
    };
    // Esta función flecha también recibe dos números, pero retorna un string
    // usando template string para convertir el resultado a texto.

    // ✅ FUNCIÓN CON PARÁMETROS OPCIONALES Y CON VALOR POR DEFECTO
    function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
        return firstNumber * base;
    }
    // - `secondNumber` es opcional (puede o no pasarse).
    // - `base` tiene un valor por defecto (2). Si no se pasa, usará ese.

    // ✅ LLAMADAS A LAS FUNCIONES
    const result: number = addNumbers(1, 2);          // 3
    const result2: string = addNumbersArrow(1, 2);    // '3'
    const multiplyResult: number = multiply(5);       // 5 * 2 = 10

    // ✅ Imprimir resultados como objeto
    console.log({ result, result2, multiplyResult });
}

// ✅ FUNCIONES CON INTERFACES Y OBJETOS
{
    // Creamos una interfaz para estructurar el objeto 'Character'
    interface Character {
        name: string;
        hp: number;
        showHp: () => void; // Método que muestra los puntos de vida
    }

    // Función que "cura" al personaje sumando puntos de vida (hp)
    const healCharacter = (character: Character, amount: number) => {
        character.hp += amount;
    };

    // Creamos un personaje que implementa la interfaz Character
    const strider: Character = {
        name: 'Strider',
        hp: 50,
        showHp() {
            // Usamos 'this' para acceder a las propiedades del objeto desde el método
            console.log(`Puntos de vida ${this.hp}`);
        },
    };

    // Curamos al personaje con 10 puntos extra
    healCharacter(strider, 10);

    // Mostramos sus puntos de vida actualizados
    strider.showHp();
}



export{};