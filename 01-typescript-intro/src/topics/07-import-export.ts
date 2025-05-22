// ✅ IMPORTACIÓN DE ELEMENTOS DESDE OTRO MÓDULO

    // 🔹 Importamos dos cosas desde el archivo '06-function-destructuring.ts':
    // - La interfaz 'Product', que define cómo debe lucir un producto.
    // - La función 'taxCalculation', que calcula el total y el impuesto.
    import { Product, taxCalculation } from './06-function-destructuring';

// ✅ DEFINICIÓN DEL CARRITO DE COMPRAS

    // Creamos un arreglo de productos que implementa la interfaz 'Product'.
    // Cada producto debe tener una descripción y un precio.
    const shopingCart: Product[] = [
        {
            description: 'Nokia',   // 📱 Producto 1: descripción y precio
            price: 100
        },
        {
            description: 'iPad',    // 💻 Producto 2: descripción y precio
            price: 150
        }
    ];

// ✅ USO DE LA FUNCIÓN IMPORTADA

    // Llamamos a 'taxCalculation', pasándole:
    // - el arreglo de productos (`products`)
    // - el impuesto (`tax`) como número decimal (15% = 0.15)
    //
    // Además, usamos desestructuración para guardar el resultado en dos variables:
    // - 'total': suma de precios de todos los productos
    // - 'tax': monto calculado del impuesto
    const [ total , tax ] = taxCalculation({
        products: shopingCart,
        tax: 0.15
    });

// ✅ MOSTRAR RESULTADOS EN CONSOLA

    // Mostramos el total sin impuestos, el monto del impuesto y el total final.
    console.log('Total', total);           // ➡️ 250
    console.log('Tax', tax);               // ➡️ 37.5
    console.log('Total con impuestos:', total + tax); // ➡️ 287.5