//Desafío 4 - Websockets + Handlebars

import express from "express";
import productsRouter from "./routes/products.router.js";


const app = express();
const PORT = 8080;
// const productsRouter = require("./routes/products.router.js");
const cartsRouter = require("./routes/carts.router.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", productsRouter);
app.use("/", cartsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});