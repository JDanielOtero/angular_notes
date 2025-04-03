
const skills: string[] = ['Bash' , 'Counter' , 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // el valor es opcional, es lo mismo que poner hometown: string | undefined;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: undefined
}

strider.hometown = 'Rivendell';

console.table(strider)
export{};