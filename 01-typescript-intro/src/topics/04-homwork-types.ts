// ✅ INTERFACES ANIDADAS EN TYPESCRIPT

// 🔸 Interfaz para representar una dirección postal
    interface Address {
        street: string;   // Calle
        country: string;  // País
        city: string;     // Ciudad
    }

    // 🔸 Interfaz principal que representa un superhéroe
    interface SuperHero {
        name: string;               // Nombre del héroe
        age: number;                // Edad
        address: Address;           // Dirección (usa otra interfaz como tipo)
        showAddress: () => string;  // Método que devuelve dirección formateada
    }


// ✅ OBJETO QUE IMPLEMENTA LAS INTERFACES

    const superHeroe: SuperHero = {
        name: 'Spiderman',
        age: 30,
        address: {
            street: 'Main St',
            country: 'USA',
            city: 'New York',
        },
        showAddress() {            
            // Usamos `this` para acceder a las propiedades del propio objeto
            // Devolvemos una cadena con el nombre, ciudad y país
            return this.name + ', ' + this.address.city + ', ' + this.address.country;
        }
    };


// ✅ LLAMADA AL MÉTODO DEL OBJETO

    // 🔹 Ejecutamos el método del objeto
    const addressInfo = superHeroe.showAddress();

    // 🧾 Imprimimos la información de forma clara
    console.log('Dirección completa del héroe:');
    console.log(addressInfo); // ➡️ Spiderman lives in New York, USA

    // 🧾 Mostramos el objeto como tabla
    console.table(superHeroe);

    // 🔍 Accedemos también a propiedades individuales
    console.log('País:', superHeroe.address.country);     // ➡️ USA
    console.log('Ciudad:', superHeroe.address.city);      // ➡️ New York
    console.log('Calle:', superHeroe.address.street);     // ➡️ Main St


export {};
