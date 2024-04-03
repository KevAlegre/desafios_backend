//Desafío 1 - Clases con ECMAScript y ECMAScript avanzado

class ProductManager {
    constructor() {
        this.products = [];
    };

    addProduct(title, description, price, thumbnail, code, stock) {
        const id = this.products.length + 1;

        const codeVerified = this.products.some((product) => product.code === code);

        if(codeVerified) {
            console.log("Ya existe un producto con ese código.");
            return
        };
        if(title && description && price && thumbnail && stock) {
            const product = {
                id: id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            };
            this.products.push(product);
            console.log("Producto agregado con exito.");
        } else {
            console.log("El producto no se pudo cargar.");
        };
    };

    getProducts() {
        return this.products;
    };

    getProductById(productId) {
        const filteredProduct = this.products.find((product) => product.id === productId);
        if(filteredProduct) {
            return filteredProduct
        } else {
            return "El ID proporcionado no coincide con ningún producto.";
        };
    };
};

const productManager = new ProductManager();

//Agregar productos

// productManager.addProduct("Harina", "0000", 870, "Sin imagen", "asd123", 12);
// productManager.addProduct("Arroz", "Yamaní", 530, "Sin imagen", "jhb528", 15);
// productManager.addProduct("Jugo", "Limonada", 125, "Sin imagen", "bpu528", 18);
// productManager.addProduct("Arroz", "000asd0", 200, "Sin imagen", "qwe987", 3);


//Llamar elementos

// const products = productManager.getProducts();
// const products = productManager.getProductById();
// console.log(products); 