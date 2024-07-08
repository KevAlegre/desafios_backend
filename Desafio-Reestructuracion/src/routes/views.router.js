import { Router } from "express";
import productModel from "../dao/models/products.model.js";
import cartModel from "../dao/models/carts.model.js";
import { isAuth, isNotAuth } from "../services/auth.js";
import { renderAdminDashboard, renderLogin, renderRegister, renderUserDashboard, renderCart } from "../controller/viewsController.js";

const viewsRouter = Router();

viewsRouter.get("/login", isNotAuth, renderLogin);
viewsRouter.get("/register", isNotAuth, renderRegister);
viewsRouter.get("/products", isAuth, renderUserDashboard)
viewsRouter.get("/realtimeproducts", isAuth, renderAdminDashboard)
viewsRouter.get("/carts/:cid", renderCart)

viewsRouter.get("/", async (req, res) => {
    try {
        const products = await productModel.find().lean();
        res.render("home", {products});
    } catch (error) {
        console.log(error);
    }
})

viewsRouter.get("/chat", (req, res) => {
    res.render("chat", {})
});

export default viewsRouter;