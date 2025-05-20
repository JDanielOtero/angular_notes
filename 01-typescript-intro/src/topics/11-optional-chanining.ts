export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Fernando',
}

const passenger2: Passenger = {
  name: 'Melissa',
  children: ['Natalia', 'Elizabeth']
}

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length;
  console.log(passenger.name ,howManyChildren);
}

// El children puede ser opcional, puede que de un arreglo vacio o simplemente no esta definido

printChildren(passenger1); // Fernando, Undifined
printChildren(passenger2); // Melissa , 2 

// Si quiera que salga 0, pudiera extender el codigo poniendo un if por si howManyChildren es undifined 
// pero tendria quepasarlo a let no a const etc etc , abultando el codigo 
// pero se arregla poniendole el or

// const howManyChildren = passenger.children?.length || 0 ;

printChildren(passenger1); // Fernando, 0
printChildren(passenger2); // Melissa , 2 
