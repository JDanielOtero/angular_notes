// Definición de la interfaz Product
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

const result = taxCalculation({
    products: shoppingCart,
    tax,         // tax:tax,
  })

console.log('Total',result[0]);
console.log('Total',result[0]);

export{};