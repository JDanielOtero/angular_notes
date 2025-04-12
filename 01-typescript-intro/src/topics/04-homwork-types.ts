// ✅ INTERFACES ANIDADAS EN TYPESCRIPT

// Definimos una interfaz para representar la dirección
interface Address {
    street: string;     // ├── street: string
    country: string;    // ├── country: string
    city: string;       // └── city: string
}

// Interfaz principal que representa un superhéroe
interface SuperHero {
    name: string;               // ├── name: string
    age: number;                // ├── age: number
    address: Address;           // ├── address: Address
    showAddress: () => string;  // └── showAddress(): string
}


// ✅ OBJETO QUE IMPLEMENTA LAS INTERFACES

const superHeroe: SuperHero = {
    name: 'Spiderman',          // ├── name: "Spiderman"
    age: 30,                    // ├── age: 30
    address: {                  // ├── address
        street: 'Main St',      // │   ├── street: "Main St"
        country: 'USA',         // │   ├── country: "USA"
        city: 'NY'              // │   └── city: "NY"
    },
    showAddress() {             // └── showAddress()
        // Usamos `this` para acceder a las propiedades del propio objeto
        // Devolvemos una cadena con el nombre, ciudad y país
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
};


// ✅ LLAMADA AL MÉTODO DEL OBJETO

const address = superHeroe.showAddress();   // Llama al método y guarda: "Spiderman, NY, USA"

console.log(address);  // ➡️ Muestra: Spiderman, NY, USA

export {};
