
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year:   number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year:   2015
    }
}

/*  Los console es lo mismo pero uno es con destructuracion */
// const {song} = audioPlayer;
// console.log( 'Song: ', song );
// console.log( 'Song: ', audioPlayer.song );

// console.log( 'Duration: ', audioPlayer.songDuration )
// console.log( 'Author: ', audioPlayer.details.author );

const song = 'New Song'
const{song:anotherSong, songDuration:duration } = audioPlayer
console.log( 'Song: ', anotherSong);
console.log( 'Song: ', audioPlayer.song );
console.log( 'Duration: ', duration )

/* Desestructuracion */
// console.log( 'Author: ', audioPlayer.details.author );
const {details} = audioPlayer;
const {author} = details;
console.log('Author:',author);

export{};