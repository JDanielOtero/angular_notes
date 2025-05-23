
// 🟢 ✅ FORMA 1: Declaración tradicional de propiedades + constructor
{
    class PersonTraditional {
        // Propiedades definidas explícitamente
        public name: string;
        private address: string;

        // Constructor asignando manualmente las propiedades
        constructor(name: string, address: string) {
            this.name = name;
            this.address = address;
        }

        public getAddress(): string {
            return this.address;
        }
    }

    // 🧪 Ejemplo de uso
    const person1 = new PersonTraditional('Bruce Wayne', 'Gotham');
    console.log('🟦 FORMA TRADICIONAL');
    console.log('Nombre:', person1.name);            // 'Bruce Wayne'
    console.log('Dirección:', person1.getAddress()); // 'Gotham'
}

// 🔵 ✅ FORMA 2: Declaración corta en el constructor
export class Person {
  // Declaración corta: las propiedades se definen y asignan en el constructor
  constructor(
    public name: string,
    private address: string = 'No Address'
  ) {}

  public getAddress(): string {
    return this.address;
  }
}

// 🧪 Ejemplo de uso
const ironman1 = new Person('Ironman', 'New York');
console.log('\n🔵 FORMA CORTA');
console.log('Nombre:', ironman1.name);             // 'Ironman'
console.log('Dirección:', ironman1.getAddress());  // 'New York'

// 🟥 FORMA 1: HERENCIA (extends) — "Héroe es un Persona"
{
    // 🟥 La clase Hero hereda propiedades y métodos de la clase Person
    class Hero extends Person {
    constructor(
        public alterEgo: string,     // Identidad pública del héroe
        public age: number,          // Edad del héroe
        public realName: string      // Nombre real que se pasará al constructor de Person
    ) {
        // Se llama al constructor de la clase base (Person)
        // Aquí estamos diciendo: "Este héroe también es una persona"
        super(realName, 'New York'); // Inicializamos 'name' y 'address' heredados
    }
    }

    // 🧪 Ejemplo de uso
    const hero1 = new Hero('Ironman', 45, 'Tony Stark');

    console.log('\n🟥 HERENCIA (extends)');
    console.log('Nombre real (heredado):', hero1.name);              // Heredado de Person
    console.log('Alter Ego:', hero1.alterEgo);                       // Propiedad propia
    console.log('Dirección (heredada):', hero1.getAddress());        // Método heredado
}

// FORMA 2: COMPOSICIÓN — "Hero tiene un Persona"
    // 🟨 La clase Hero contiene una instancia de Person como propiedad.
    // Esto se conoce como **composición**, y favorece el bajo acoplamiento.
    export class Hero {
        constructor(
        public alterEgo: string,   // Identidad pública
        public age: number,        // Edad
        public realName: string,   // Nombre real del héroe
        public person: Person      // Instancia de Person (composición)
        ) {}
    }

    // 🧪 Ejemplo de uso
    const tony = new Person('Tony Stark', 'New York'); // Creamos primero a la persona

    // Luego creamos el héroe, pasándole esa persona como dependencia
    const hero2 = new Hero('Ironman', 45, 'Tony', tony);

    console.log('\n🟨 COMPOSICIÓN (tiene un Person)');
    console.log('Nombre real (manual):', hero2.realName);              // De propiedad propia
    console.log('Alter Ego:', hero2.alterEgo);                         // Propiedad propia
    console.log('Dirección (desde Person):', hero2.person.getAddress()); // Delegado a Person

