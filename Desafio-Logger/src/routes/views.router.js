import { Router } from "express";
import { isAuth, isNotAuth } from "../services/auth.js";
import { renderAdminDashboard, renderLogin, renderRegister, renderUserDashboard, renderCart, renderProfile, renderMocks } from "../controller/viewsController.js";
import { generateProducts } from "../utils.js";

const viewsRouter = Router();

viewsRouter.get("/login", isNotAuth, renderLogin);
viewsRouter.get("/register", isNotAuth, renderRegister);
viewsRouter.get("/products", isAuth, renderUserDashboard);
viewsRouter.get("/realtimeproducts", isAuth, renderAdminDashboard);
viewsRouter.get("/current", isAuth, renderProfile);
viewsRouter.get("/carts/", isAuth, renderCart);

viewsRouter.get("/mockingproducts", renderMocks)

viewsRouter.get("/chat", (req, res) => {
    res.render("chat", {});
});

export default viewsRouter;