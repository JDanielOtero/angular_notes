// ✅ FUNCIÓN TRADICIONAL
{
    // Declaramos una función clásica que recibe dos números y retorna la suma
    function addNumbers(a: number, b: number) {
        return a + b;                            // ➡️ Retorna 3 si a = 1, b = 2
    }

    // ✅ FUNCIÓN FLECHA (ARROW FUNCTION)
    const addNumbersArrow = (a: number, b: number): string => {
        return `${a + b}`;                       // ➡️ Retorna '3' (como string)
    };
    // Usa template string para convertir el número a texto

    // ✅ FUNCIÓN CON PARÁMETROS OPCIONALES Y VALOR POR DEFECTO
    function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
        return firstNumber * base;               // ➡️ Si se llama como multiply(5), retorna 10
    }
    // - secondNumber es opcional
    // - base = 2 si no se pasa otro valor

    // ✅ LLAMADAS A LAS FUNCIONES
    const result: number = addNumbers(1, 2);          // ➡️ 3
    const result2: string = addNumbersArrow(1, 2);    // ➡️ '3'
    const multiplyResult: number = multiply(5);       // ➡️ 10

    // ✅ Imprimir resultados como objeto
    console.log({ result, result2, multiplyResult }); // ➡️ { result: 3, result2: '3', multiplyResult: 10 }
}

// ✅ FUNCIONES CON INTERFACES Y OBJETOS
{
    // Creamos una interfaz para estructurar el objeto 'Character'
    interface Character {
        name: string;               // ├── name: string
        hp: number;                 // ├── hp: number
        showHp: () => void;         // └── showHp(): void
    }

    // Función que "cura" al personaje sumando puntos de vida (hp)
    const healCharacter = (character: Character, amount: number) => {
        character.hp += amount;     // ➕ Aumenta los puntos de vida (hp) del personaje
    };

    // Creamos un personaje que implementa la interfaz Character
    const strider: Character = {
        name: 'Strider',            // ├── name: 'Strider'
        hp: 50,                     // ├── hp: 50 (inicialmente)
        showHp() {                  // └── showHp(): imprime la vida actual
            console.log(`Puntos de vida ${this.hp}`); // ➡️ Se espera "Puntos de vida 60"
        },
    };

    // Curamos al personaje con 10 puntos extra
    healCharacter(strider, 10);     // ➡️ hp ahora es 60

    // Mostramos sus puntos de vida actualizados
    strider.showHp();               // ➡️ "Puntos de vida 60"
}

export {};
