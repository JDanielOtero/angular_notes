// ✅ Definición de la interfaz Product
// - `description`: una cadena que describe el producto
// - `price`: un número que representa su precio
// Interfaz que describe un producto individual
export interface Product {
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
// Interfaz para los parámetros que se pasan a la función
interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// ───────────────────────────────────────────────
// 🧾 FORMA 1: Función sin desestructuración
// ───────────────────────────────────────────────
{
    function taxCalculation(options: TaxCalculationOptions): number[] {
        let total = 0;
        options.products.forEach(product => {
            total += product.price;
        });
        return [total, total * options.tax];
    }

    const shoppingCart = [phone, tablet];
    const tax = 0.15;

    const result = taxCalculation({ products: shoppingCart, tax });

    console.log('✅ FORMA 1: Sin desestructuración');
    console.log('Total sin impuestos:', result[0]);
    console.log('Monto del impuesto:', result[1]);
    console.log('Total con impuestos:', result[0] + result[1]);
}

// ───────────────────────────────────────────────
// 🧾 FORMA 2: Función con desestructuración
// ───────────────────────────────────────────────

    // ✅ Definición mejorada con desestructuración en parámetros
export  function taxCalculation({ products, tax }: TaxCalculationOptions): number[] {
        let total = 0;

        // Desestructuramos directamente el precio de cada producto
        products.forEach(({ price }) => {
            total += price;
        });

        return [total, total * tax];
    }

    const shoppingCart = [phone, tablet];
    const tax = 0.15;

    // ✅ Mejor lectura usando desestructuración del resultado
    const [total, taxAmount] = taxCalculation({ products: shoppingCart, tax });
    const totalWithTax = total + taxAmount;

    console.log('\n✅ FORMA 2: Con desestructuración');
    console.log('Total sin impuestos:', total);
    console.log('Monto del impuesto:', taxAmount);
    console.log('Total con impuestos:', totalWithTax);


export{};