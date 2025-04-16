// ✅ ARREGLOS TIPADOS
const skills: string[] = ['Bash', 'Counter', 'Healing'];  // 🔹 Arreglo tipado solo para strings
console.log(skills); // ➡️ ['Bash', 'Counter', 'Healing']
// Si intentas hacer: skills.push(123); ❌ TypeScript marcará error

// ✅ INTERFACES
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

const strider: Character = {
    name: 'Strider',                    // ├── name: 'Strider'
    hp: 100,                            // ├── hp: 100
    skills: ['Bash', 'Counter'],        // ├── skills: ['Bash', 'Counter']
    hometown: undefined                // └── hometown: undefined inicialmente
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
