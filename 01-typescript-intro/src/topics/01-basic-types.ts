// 🧠 TIPOS BÁSICOS EN TYPESCRIPT

// ✅ STRING
const name: string = 'Dotero';
// 'name' solo puede almacenar cadenas de texto.
// Ejemplo inválido: name = 1234 ❌ (causaría un error de tipo)

// ✅ UNION TYPE (number | string)
let hpPoints: number | string = 95;
// 'hpPoints' puede ser un número o una cadena.
// Esto permite flexibilidad, por ejemplo, para mostrar un estado textual:
hpPoints = 'FULL'; // ✅ válido por ser un tipo permitido

// ✅ BOOLEAN
const isAlive: boolean = true;
// 'isAlive' solo puede ser true o false

// 📤 Imprimir los valores
console.log({
  name,
  hpPoints,
  isAlive,
});

// 👇 Exportación para evitar errores en entornos de módulos
export {};
