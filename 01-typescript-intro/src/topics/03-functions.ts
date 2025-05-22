// ✅ FUNCIONES EN TYPESCRIPT

{
    // ✅ FUNCIÓN TRADICIONAL
        // Recibe dos números y retorna su suma como número.
        function addNumbers(a: number, b: number): number {
            return a + b;                                       // ➡️ Retorna 3 si a = 1, b = 2
        }

    // ✅ FUNCIÓN FLECHA (ARROW FUNCTION)
        // Realiza la misma suma, pero retorna el resultado como string.
        // Usa template string para convertir el número a texto
        const addNumbersArrow = (a: number, b: number): string => {
            return `${a + b}`;              
        };

    // ✅ FUNCIÓN CON PARÁMETROS OPCIONALES Y VALORES POR DEFECTO
        // - 'secondNumber' es opcional
        // - 'base' tiene un valor por defecto (2)
        function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
            return firstNumber * base;
        }

    // ✅ LLAMADAS A LAS FUNCIONES
        const result: number = addNumbers(1, 2);           // ➡️ 3 (número)
        const result2: string = addNumbersArrow(1, 2);     // ➡️ '3' (string)
        const multiplyResult1: number = multiply(5);       // ➡️ 10 (usa base=2)
        const multiplyResult2: number = multiply(3, 9, 4); // ➡️ 12 (3 * 4)

    // ✅ Imprimir resultados en formato tabla para mejor visualización
        console.table({
            result,
            result2,
            multiplyResult1,
            multiplyResult2,
        });

    // También puedes imprimirlos individualmente si deseas ver más detalle
        console.log('Suma tradicional (num):', result);
        console.log('Suma flecha (string):', result2);
        console.log('Multiplicación con base por defecto:', multiplyResult1);
        console.log('Multiplicación con base 4:', multiplyResult2);
}

// ✅ FUNCIONES CON INTERFACES Y OBJETOS

{
    // 🔹 Definimos una interfaz para personajes del juego
        interface Character {
            name: string;             // Nombre del personaje
            hp: number;               // Puntos de vida (Hit Points)
            showHp: () => void;       // Método para mostrar los puntos de vida actuales
        }

    // 🔧 Función que "cura" al personaje aumentando sus puntos de vida
        const healCharacter = (character: Character, amount: number): void => {
            character.hp += amount;
            console.log(`${character.name} ha sido curado por ${amount} puntos.`);
        };

    // 🧍 Creamos un personaje que cumple con la interfaz Character
        const strider: Character = {
            name: 'Strider',
            hp: 50,
            showHp() {
            console.log(`❤️ ${this.name} tiene ${this.hp} puntos de vida.`);
            },
        };

    // ▶️ Llamadas de prueba

        // Mostrar vida inicial
        strider.showHp(); // ➡️ ❤️ Strider tiene 50 puntos de vida.

        // Curamos al personaje con 10 puntos
        healCharacter(strider, 10); // ➡️ Strider ha sido curado por 10 puntos.

        // Mostrar vida después de curar
        strider.showHp(); // ➡️ ❤️ Strider tiene 60 puntos de vida.
}


export {};
