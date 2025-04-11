// Definición de la interfaz Product
// Cada producto debe tener:
// - `description`: una cadena que describe el producto.
// - `price`: un número que indica el precio del producto.
interface Product {
    description: string;
    price: number;
}

// Definición de dos productos
const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
};

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
};

// Definición de la interfaz para las opciones de cálculo de impuestos
// Esta interfaz `TaxCalculationOptions` define los parámetros que necesita la función de cálculo de impuestos.
// Incluye:
// - `tax`: un número que representa el porcentaje de impuesto (por ejemplo 0.15 para 15%).
// - `products`: un arreglo de objetos tipo `Product`, es decir, los productos sobre los que se calculará el impuesto.

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// Forma original con `options.` explícito:
// function taxCalculation(options: TaxCalculationOptions): number[] {
//     let total = 0;
//     options.products.forEach( product => {
//         total += product.price;
//     });
//     return [total, total * options.tax];
// }

// 💡 Mejoramos esta función aplicando **desestructuración de objetos y arrays**
function taxCalculation({ products, tax }: TaxCalculationOptions): number[] {
    let total = 0;

    // También desestructuramos cada `product` dentro del `forEach`
    products.forEach(({ price }) => {
        total += price;
    });

    // Retornamos total sin impuestos y monto de impuestos
    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

// FORMA 1: Acceder a los valores mediante índices del array (menos legible)
// Llamamos a la función `taxCalculation` pasándole un objeto con `products` y `tax`.
// Como usamos la forma corta `tax`, esto es equivalente a `tax: tax`.
const result = taxCalculation({
    products: shoppingCart,
    tax,
});

// Accedemos al total y al impuesto aplicando índices (poco expresivo y más propenso a errores)
console.log('Total', result[0]); // Total sin impuestos
console.log('Total', result[1]); // Total con impuestos

// FORMA 2: Usar desestructuración para acceder a los valores de forma más clara
{
    // Aquí estamos asignando los valores retornados por la función a variables con nombres significativos
    const [total, taxAmount, totalWithTax] = taxCalculation({
        products: shoppingCart,
        tax,
    });

    // Esto mejora mucho la legibilidad del código y evita confusión con los índices
    console.log('Total sin impuestos:', total);
    console.log('Impuesto aplicado:', taxAmount);
    console.log('Total con impuestos:', totalWithTax);
}
export{};