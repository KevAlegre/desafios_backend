//Desafío 4 - Websockets + Handlebars

import express from "express";
import handlebars from "express-handlebars"
import { Server } from "socket.io";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js"
import viewsRouter from "./routes/views.router.js";
import __dirname from "./utils.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

//Handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/", productsRouter);
app.use("/", cartsRouter);
app.use("/", viewsRouter);

const httpServer = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
    console.log("Cliente conectado");
    socket.on("newProduct", () => {
        const message = "Producto recibido con éxito"
        socket.emit("message", message);
    });
});