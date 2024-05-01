//Desafío 3 - Servidor con Expresss

const ProductManager = require("./ProductManager.js");

const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.urlencoded({extended: true}));

app.get("/products", async (req, res) => {
    const limit = req.query.limit;
    const products = await productManager.limitProducts(limit);
    res.send({products});
});

app.get("/products/:pid", async (req, res) => {
    const productId = parseInt(req.params.pid);
    const product = await productManager.getProductById(productId)
    if (product) {
        res.send({product});
    } else {
        res.send(` 
        <h1>ERROR 404</h1>
        <p>El producto con el ID ingresado no existe.</p>
        `);
    };
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



const productManager = new ProductManager();

//Agregar productos

// productManager.addProduct("Harina", "0000", 870, "Sin imagen", "asd123", 12);
// productManager.addProduct("Arroz", "Yamaní", 530, "Sin imagen", "jhb528", 15);
// productManager.addProduct("Jugo", "Limonada", 125, "Sin imagen", "bpu528", 18);


//Llamar elementos

//Para el método de update se utilizan tres parámetros (id, propiedad-a-cambiar, valor)

// productManager.updateProduct(1, "stock", 10);

// productManager.deleteProduct();