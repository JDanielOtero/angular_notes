// ✅ Definición de la interfaz Product
// Cada producto debe tener:
// - `description`: una cadena que describe el producto
// - `price`: un número que representa su precio
interface Product {
    description: string;
    price: number;
}

// ✅ Creamos dos productos de ejemplo
const phone: Product = {
    description: 'Nokia A1',
    price: 150.0,
};

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0,
};

// ✅ Interfaz para los parámetros que usará la función de cálculo de impuestos
// - `tax`: un número decimal que representa el porcentaje de impuesto (por ejemplo, 0.15 para 15%)
// - `products`: un arreglo de productos sobre los cuales se calculará el impuesto
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

{
   function taxCalculation(options: TaxCalculationOptions): number[] {
        let total = 0;
        options.products.forEach( product => {
            total += product.price;
        });
        return [total, total * options.tax];
    } 
}

// ✅ Función para calcular el total y el impuesto aplicado
// Se aplica desestructuración tanto de los parámetros como de los productos
function taxCalculation({ products, tax }: TaxCalculationOptions): number[] {
    let total = 0;

    // Sumamos el precio de cada producto usando desestructuración
    products.forEach(({ price }) => {
        total += price;
    });

    // Retornamos un arreglo con el total sin impuesto y el monto del impuesto
    return [total, total * tax];
}

// ✅ Carrito de compras y porcentaje de impuesto
const shoppingCart = [phone, tablet];
const tax = 0.15;

// ▶️ FORMA 1: Acceso por índices (menos legible)
const result = taxCalculation({ products: shoppingCart, tax });

console.log('Total sin impuestos:', result[0]);
console.log('Monto del impuesto:', result[1]);
// Esta forma es funcional, pero usar índices puede generar confusión y errores

// ▶️ FORMA 2: Desestructuración del resultado (más legible)
{
    const [total, taxAmount] = taxCalculation({ products: shoppingCart, tax });
    const totalWithTax = total + taxAmount;

    console.log('Total sin impuestos:', total);
    console.log('Impuesto aplicado:', taxAmount);
    console.log('Total con impuestos:', totalWithTax);
}
export{};