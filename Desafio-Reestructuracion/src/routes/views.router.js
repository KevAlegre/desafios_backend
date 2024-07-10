import { Router } from "express";
import { isAuth, isNotAuth } from "../services/auth.js";
import { renderAdminDashboard, renderLogin, renderRegister, renderUserDashboard, renderCart } from "../controller/viewsController.js";

const viewsRouter = Router();

viewsRouter.get("/login", isNotAuth, renderLogin);
viewsRouter.get("/register", isNotAuth, renderRegister);
viewsRouter.get("/products", isAuth, renderUserDashboard)
viewsRouter.get("/realtimeproducts", isAuth, renderAdminDashboard)
viewsRouter.get("/carts/:cid", renderCart)

viewsRouter.get("/chat", (req, res) => {
    res.render("chat", {})
});

export default viewsRouter;