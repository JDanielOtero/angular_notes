// ✅ ARREGLOS TIPADOS
const skills: string[] = ['Bash', 'Counter', 'Healing'];
console.log(skills);
// 'skills' es un arreglo que solo puede contener strings.
// Si intentas agregar un número o un booleano, TypeScript lo marcará como error.
// Ejemplo inválido: skills.push(123); ❌

// ✅ INTERFACES
interface Character {
    name: string;         // Obligatoriamente un string
    hp: number;           // Puntos de vida como número
    skills: string[];     // Lista de habilidades, debe ser un arreglo de strings

    // 🟡 Propiedad opcional
    hometown?: string;    // El signo ? indica que esta propiedad es opcional.
    // Es equivalente a: hometown: string | undefined;
}

const strider: Character = {
name: 'Strider',
hp: 100,
skills: ['Bash', 'Counter'],
hometown: undefined
}

strider.hometown = 'Rivendell';

console.table(strider);
// Muestra el objeto como una tabla en la consola, útil para ver estructuras ordenadas:
// ┌──────────┬───────────────┐
// │ (index)  │     Value     │
// ├──────────┼───────────────┤
// │  name    │  'Strider'    │
// │  hp      │     100       │
// │  skills  │ ['Bash', 'Counter'] │
// │ hometown │  'Rivendell'  │
// └──────────┴───────────────┘
export{};