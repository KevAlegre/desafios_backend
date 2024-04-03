//Desafío 2 - Manejo de archivos

const fs = require("fs/promises");

class ProductManager {
    constructor() {
        this.path = "products.json"
    };

    async addProduct(title, description, price, thumbnail, code, stock) {
        try {
            const products = await this.readProducts();
            const id = products.length + 1;
            const codeVerified = products.some((product) => product.code === code);

            if(codeVerified) {
                console.log("Ya existe un producto con ese código.");
                return;
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
                products.push(product);
                await fs.writeFile(this.path, JSON.stringify(products, null, 2));
                console.log("Producto agregado con exito.");
            }
        } catch (error) {
            console.error("El producto no se pudo cargar.", error);
        }
    };

    async getProducts() {
        try {
            return await this.readProducts();
        } catch (error) {
            console.error("Error al consultar productos", error);
            return [];
        }
    };

    async getProductById(productId) {
        try {
            const products = await this.readProducts();
            const filteredProduct = products.find((product) => product.id === productId);

            if(filteredProduct) {
                return filteredProduct;
            };   
        } catch (error) {
            console.error("El ID proporcionado no coincide con ningún producto.");
        };
    };

    async updateProduct(productId, key, value) {
        try {
            const products = await this.readProducts();
            const filteredProduct = products.find((product) => product.id === productId);
            if (filteredProduct) {
                switch (key) {
                    case "title":
                        filteredProduct.title = value;
                        await fs.writeFile(this.path, JSON.stringify(products, null, 2));
                        console.log("Producto actualizado correctamente.");
                        break;
                        
                    case "description":
                        filteredProduct.description = value;
                        await fs.writeFile(this.path, JSON.stringify(products, null, 2));
                        console.log("Producto actualizado correctamente.");
                        break;

                    case "price":
                        filteredProduct.price = value;
                        await fs.writeFile(this.path, JSON.stringify(products, null, 2));
                        console.log("Producto actualizado correctamente.");
                        break;

                    case "thumbnail":
                        filteredProduct.thumbnail = value;
                        await fs.writeFile(this.path, JSON.stringify(products, null, 2));
                        console.log("Producto actualizado correctamente.");
                        break;

                    case "code":
                        filteredProduct.code = value;      
                        await fs.writeFile(this.path, JSON.stringify(products, null, 2));
                        console.log("Producto actualizado correctamente.");
                        break;

                    case "stock":
                        filteredProduct.stock = value;
                        await fs.writeFile(this.path, JSON.stringify(products, null, 2));
                        console.log("Producto actualizado correctamente.");
                        break;
                };
            };
        } catch (error) {
            console.error("Error al actualizar el producto.", error);
        }
    };

    async deleteProduct(productId) {
        try {
            const products = await this.readProducts();
            const filteredProduct = products.find((product) => product.id === productId);

            if (!filteredProduct) {
                console.log("El producto no existe.");
                return;
            }

            if (filteredProduct) {
                products.splice(products.indexOf(filteredProduct), 1);
                await fs.writeFile(this.path, JSON.stringify(products, null, 2));
                console.log("Producto eliminado correctamente.");
            }
        } catch (error) {
            console.error("Error al elimianr el archivo.", error);
        }

    };

    async readProducts() {
        try {
            const data = await fs.readFile(this.path, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            if (error.code === "ENOENT") {
                return [];
            } else {
                throw error
            }
        }
    }
};

const productManager = new ProductManager();

//Agregar productos

// productManager.addProduct("Harina", "0000", 870, "Sin imagen", "asd123", 12);
// productManager.addProduct("Arroz", "Yamaní", 530, "Sin imagen", "jhb528", 15);
// productManager.addProduct("Jugo", "Limonada", 125, "Sin imagen", "bpu528", 18);


//Llamar elementos

// productManager.getProducts()
//     .then((product) => console.log(product))
//     .catch((error) => console.error("Error al cargar los productos.", error));

// productManager.getProductById()
//     .then((product) => console.log(product))
//     .catch((error) => console.error("Error al cargar el producto.", error));

//Para el método de update se utilizan tres parámetros (id, propiedad-a-cambiar, valor)

// productManager.updateProduct(1, "stock", 10);

// productManager.deleteProduct();