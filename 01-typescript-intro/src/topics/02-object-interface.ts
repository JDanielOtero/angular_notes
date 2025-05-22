// ✅ ARREGLOS TIPADOS EN TYPESCRIPT

    // Declaramos un arreglo que solo puede contener cadenas (strings)
    const skills: string[] = ['Bash', 'Counter', 'Healing'];

    // 📤 Mostramos el arreglo completo
    console.log('Habilidades iniciales:', skills);

    // ❌ Esto generaría un error de tipo:
    // skills.push(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

    // ✅ Agregamos una nueva habilidad (string válida)
    skills.push('Invisibility');

    // 🔍 Verificamos el contenido actualizado
    console.log('Habilidades actualizadas:', skills);


// ✅ INTERFACES EN TYPESCRIPT

// Una interfaz es un contrato que un objeto debe cumplir.
// Permite definir tipos personalizados con nombres claros y estructura fija,
// indicando propiedades obligatorias, opcionales, sus tipos, y métodos esperados.

interface Character {
    name: string;           // 🔸 Nombre del personaje (obligatorio)
    hp: number;             // 🔸 Puntos de vida (hit points), de tipo numérico
    skills: string[];       // 🔸 Arreglo de habilidades (solo strings)
    hometown?: string;      // 🔸 Ciudad natal (opcional)
    // El signo ? indica que esta propiedad no es obligatoria.
    // Puede estar presente o no en el objeto que implemente esta interfaz.
}

// ✅ OBJETO QUE IMPLEMENTA LA INTERFAZ
// Aquí creamos un objeto que sigue exactamente la estructura de la interfaz Character.

const strider: Character = {
    name: 'Strider',                    // ✔ Cumple con el campo 'name'
    hp: 100,                            // ✔ Tiene un valor numérico para 'hp'
    skills: ['Bash', 'Counter'],        // ✔ Lista de habilidades como strings
    hometown: undefined                // ✔ Aunque es opcional, puede asignarse como undefined
};

strider.hometown = 'Rivendell';        // ✅ Ahora se asigna la ciudad de origen

console.table(strider);  // 🧾 Muestra el objeto como tabla

// Esperado en consola:
// ┌──────────┬─────────────────────┐
// │ (index)  │       Value         │
// ├──────────┼─────────────────────┤
// │  name    │    'Strider'        │
// │  hp      │        100          │
// │  skills  │  ['Bash', 'Counter']│
// │ hometown │   'Rivendell'       │
// └──────────┴─────────────────────┘

export {};
