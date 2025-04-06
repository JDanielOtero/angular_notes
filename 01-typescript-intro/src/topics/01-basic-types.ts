// 🧠 BÁSICOS EN TYPESCRIPT 

// TypeScript permite declarar variables con tipos específicos:

// ✅ STRING
    const name: string = 'Dotero';
    // La variable 'name' solo puede contener textos (cadenas de caracteres).
    // Si intentas asignarle un número, TypeScript marcaría un error. name = 1234

// ✅ UNION TYPE (number | string)
    let hpPoints: number | string = 95;
    // 'hpPoints' puede ser un número o una cadena (string).
    // Esto es útil en casos donde un valor puede cambiar de tipo, por ejemplo, dependiendo del estado del juego.
    hpPoints = 'FULL';
    // Eesto es válido porque se declaró como `number | string`.

// ✅ BOOLEAN
    const isAlive: boolean = true;
    // 'isAlive' es de tipo booleano, solo puede ser true o false.

console.log({
    name,
    hpPoints,
    isAlive
});

export{};