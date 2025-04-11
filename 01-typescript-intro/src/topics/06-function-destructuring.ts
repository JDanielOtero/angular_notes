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

// Función que calcula el total con impuestos
function taxCalculation(options: TaxCalculationOptions): number[] {
    let total = 0;
    options.products.forEach( product => {
        total += product.price;
    });
    return [total,total*options.tax]
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

// Llamamos a la función `taxCalculation` pasándole los productos y el impuesto.
// Como usamos la forma corta `tax`, esto es equivalente a `tax: tax`.
const result = taxCalculation({
    products: shoppingCart,
    tax,
});


console.log('Total',result[0]);
console.log('Total',result[0]);

export{};