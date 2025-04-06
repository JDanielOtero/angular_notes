// 🟩 DESESTRUCTURACIÓN DE OBJETOS (OBJECT DESTRUCTURING)

    // Es una forma moderna de extraer valores de objetos o arreglos y asignarlos a variables de manera directa y concisa.
    // En lugar de hacer esto:      const song = audioPlayer.song;
    // Hacemos esto :               const { song } = audioPlayer;

    // 1. DEFINICIÓN DEL OBJETO
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
            audioVolume: 90,
            songDuration: 36,
            song: "Mess",
            details: {
                author: 'Ed Sheeran',
                year: 2015
            }
        };

        // Este objeto tiene la siguiente estructura:
        //
        // audioPlayer
        // ├── audioVolume: 90
        // ├── songDuration: 36
        // ├── song: "Mess"
        // └── details
        //     ├── author: "Ed Sheeran"
        //     └── year: 2015

    // 2. DESESTRUCTURACIÓN BÁSICA
        {
            const { song } = audioPlayer;
            console.log('Song:', song);

            // Acceso tradicional (sin desestructurar)
            console.log('Song (clásico):', audioPlayer.song);
            console.log('Duration:', audioPlayer.songDuration);
            console.log('Author:', audioPlayer.details.author);
        }

    // 2.1. DESESTRUCTURACIÓN CON RENOMBRAMIENTO
        {
            const { song: anotherSong, songDuration: duration } = audioPlayer;
            console.log('Song (renombrada):', anotherSong);     // → 'Mess'
            console.log('Song (original):', audioPlayer.song);   // → 'Mess'
            console.log('Duration:', duration);                  // → 36
        }

    // 3. DESESTRUCTURACIÓN ANIDADA (OBJETO DENTRO DE OBJETO)
        {
            const { details } = audioPlayer;
            const { author } = details;
            console.log('Author:', author); // → 'Ed Sheeran'
        }

    // 3.1. DESESTRUCTURACIÓN ANIDADA EN UNA LÍNEA
        {
            const { details: { author: autor } } = audioPlayer;
            console.log('Author (renombrado):', autor); // → 'Ed Sheeran'
        }

    // 4. BONUS: DESESTRUCTURACIÓN COMPLETA
        {
            const {
                audioVolume,
                song,
                songDuration,
                details: { author, year }
            } = audioPlayer;

            console.log('Volume:', audioVolume);     // 90
            console.log('Song:', song);              // Mess
            console.log('Duration:', songDuration);  // 36
            console.log('Author:', author);          // Ed Sheeran
            console.log('Year:', year);              // 2015
        }

// 🟨 DESESTRUCTURACIÓN DE ARREGLOS (ARRAY DESTRUCTURING)
    // Es una característica de ES6 que permite extraer valores de un arreglo y asignarlos a variables de forma más limpia y directa.
    // En lugar de acceder con índices como arr[0], arr[1], puedes hacer una asignación directa.

    // 5. EJEMPLOS CON ARREGLOS
        {
            // Declaramos un arreglo de strings con tres personajes
            const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

            // Forma clásica de acceder a un elemento usando índice
            // Si no existe el índice 2, devolvemos un valor por defecto usando el operador OR (||)
            console.log('Personaje 3:', dbz[2] || 'No hay personaje');
        }

        {
            // Usamos desestructuración para extraer directamente el tercer personaje del arreglo
            // Nota: los valores que no queremos (Goku, Vegeta) los omitimos usando comas vacías
            const [, , trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];
            console.log('Personaje 3:', trunks); // Trunks
        }

        {
            // Ahora usamos desestructuración, pero el arreglo solo tiene dos elementos
            // Intentamos extraer un tercer valor, que no existe, así que usamos un valor por defecto ('Not found')
            // TypeScript lo permite con la sintaxis: variable = valorPorDefecto
            const [, , trunks1 = 'Not found']: string[] = ['Goku', 'Vegeta'];
            console.log('Personaje 3:', trunks1); // Not found
        }


export{};