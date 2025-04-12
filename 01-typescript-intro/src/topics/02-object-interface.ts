// ✅ ARREGLOS TIPADOS
const skills: string[] = ['Bash', 'Counter', 'Healing'];  // 🔹 Arreglo tipado solo para strings
console.log(skills); // ➡️ ['Bash', 'Counter', 'Healing']
// Si intentas hacer: skills.push(123); ❌ TypeScript marcará error

// ✅ INTERFACES

interface Character {
    name: string;           // ├── name: string
    hp: number;             // ├── hp: number
    skills: string[];       // ├── skills: string[]
    hometown?: string;      // └── hometown?: string (opcional)
    // El signo ? indica que esta propiedad no es obligatoria.
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
