// 🟩 DESESTRUCTURACIÓN DE OBJETOS (OBJECT DESTRUCTURING)
// Permite extraer propiedades de un objeto de forma concisa y directa.

// 🎵 1. DEFINICIÓN DEL OBJETO
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,                    //      ├── audioVolume: 90
    songDuration: 36,                   //      ├── songDuration: 36
    song: "Mess",                       //      ├── song: "Mess"
    details: {                          //      └── details
        author: 'Ed Sheeran',           //          ├── author: "Ed Sheeran"
        year: 2015                      //          └── year: 2015
    }
};

// ───────────────────────────────────────────────
// 🔹 FORMA 1: Desestructuración básica
// ───────────────────────────────────────────────
{
    const { song } = audioPlayer;
    console.log('🎧 FORMA 1 - Song:', song); // ➡️ 'Mess'

    // Acceso clásico sin desestructuración
    console.log('🎧 Clásico - Song:', audioPlayer.song);             // ➡️ 'Mess'
    console.log('🎧 Clásico - Duration:', audioPlayer.songDuration); // ➡️ 36
    console.log('🎧 Clásico - Author:', audioPlayer.details.author); // ➡️ 'Ed Sheeran'
}

// ───────────────────────────────────────────────
// 🔹 FORMA 2: Desestructuración con renombramiento
// ───────────────────────────────────────────────
{
    const { song: anotherSong, songDuration: duration } = audioPlayer;
    console.log('🎵 FORMA 2 - Song (renombrada):', anotherSong); // ➡️ 'Mess'
    console.log('🎵 FORMA 2 - Duration:', duration);             // ➡️ 36
}

// ───────────────────────────────────────────────
// 🔹 FORMA 3: Desestructuración anidada
// ───────────────────────────────────────────────
{
    const { details } = audioPlayer;
    const { author } = details;
    console.log('🧾 FORMA 3 - Author:', author); // ➡️ 'Ed Sheeran'
}

// ───────────────────────────────────────────────
// 🔹 FORMA 4: Desestructuración anidada en una línea
// ───────────────────────────────────────────────
{
    const { details: { author: autor } } = audioPlayer;
    console.log('🧾 FORMA 4 - Author (renombrado):', autor); // ➡️ 'Ed Sheeran'
}

// ───────────────────────────────────────────────
// 🔹 FORMA 5: Desestructuración completa
// ───────────────────────────────────────────────
{
    const {
        audioVolume,
        song,
        songDuration,
        details: { author, year }
    } = audioPlayer;

    console.log('🎚️ FORMA 5 - Volume:', audioVolume);     // ➡️ 90
    console.log('🎚️ FORMA 5 - Song:', song);              // ➡️ 'Mess'
    console.log('🎚️ FORMA 5 - Duration:', songDuration);  // ➡️ 36
    console.log('🎚️ FORMA 5 - Author:', author);          // ➡️ 'Ed Sheeran'
    console.log('🎚️ FORMA 5 - Year:', year);              // ➡️ 2015
}

// 🟨 DESESTRUCTURACIÓN DE ARREGLOS (ARRAY DESTRUCTURING)
// Permite extraer elementos de un arreglo por posición, de forma directa y clara.

// 🎮 6. Arreglo base de ejemplo
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

// ───────────────────────────────────────────────
// 🔹 FORMA 1: Acceso clásico con índices
// ───────────────────────────────────────────────
{
    const personaje3 = dbz[2] || 'No hay personaje';
    console.log('🧙 FORMA 1 - Personaje 3 (clásico):', personaje3); // ➡️ 'Trunks'
}

// ───────────────────────────────────────────────
// 🔹 FORMA 2: Desestructuración por posición
// ───────────────────────────────────────────────
{
    const [, , trunks]: string[] = dbz;
    console.log('⚔️ FORMA 2 - Personaje 3:', trunks); // ➡️ 'Trunks'
}

// ───────────────────────────────────────────────
// 🔹 FORMA 3: Desestructuración con valor por defecto
// ───────────────────────────────────────────────
{
    const [, , trunks1 = 'Not found']: string[] = ['Goku', 'Vegeta'];
    console.log('⚔️ FORMA 3 - Personaje 3:', trunks1); // ➡️ 'Not found'
}

export {};
