// ✅ INTERFACES ANIDADAS EN TYPESCRIPT

// Definimos una interfaz para representar la dirección
interface Address {
    street: string;
    country: string;
    city: string;
}

// Interfaz principal que representa un superhéroe
interface SuperHero {
    name: string;
    age: number;
    address: Address;           // Usamos la interfaz Address como tipo de una propiedad
    showAddress: () => string;  // Método que devuelve una cadena (string)
}


// ✅ OBJETO QUE IMPLEMENTA LAS INTERFACES

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        // Usamos `this` para acceder a las propiedades del propio objeto
        // Devolvemos una cadena con el nombre, ciudad y país
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
};

// ✅ LLAMADA AL MÉTODO DEL OBJETO

const address = superHeroe.showAddress();
// Llamamos al método showAddress() que retorna un string con los datos formateados

console.log(address);
// Muestra: Spiderman, NY, USA


export {};