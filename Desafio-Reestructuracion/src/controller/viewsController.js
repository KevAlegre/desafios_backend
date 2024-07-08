import { getProductsService } from "../services/productsServices.js";
import { getCartService } from "../services/cartsServices.js";

export const renderLogin = (req, res) => {
    res.render("login");
};

export const renderRegister = (req, res) => {
    res.render("register");
};

export const renderUserDashboard = async (req, res) => {
    try {
        const { user } = req.session;
        const {limit, page, sort, query} = req.query;
        const products = await getProductsService(limit, page, sort, query);
        const {prevPage, nextPage, hasPrevPage, hasNextPage} = products;
        const prevLink = hasPrevPage ? `http://localhost:8080/products?page=${prevPage}` : null;
        const nextLink = hasNextPage ? `http://localhost:8080/products?page=${nextPage}` : null;
        res.render("products", {products, prevLink, nextLink, page, user});
    } catch (error) {
        console.log(error);
    };
};

export const renderAdminDashboard = async (req, res) => {
    try {
        const { user } = req.session;
        const {limit, page, sort, query} = req.query;
        const products = await getProductsService(limit, page, sort, query);
        const {prevPage, nextPage, hasPrevPage, hasNextPage} = products;
        const prevLink = hasPrevPage ? `http://localhost:8080/realtimeproducts?page=${prevPage}` : null;
        const nextLink = hasNextPage ? `http://localhost:8080/realtimeproducts?page=${nextPage}` : null;
        res.render("realtimeproducts", {products, prevLink, nextLink, page, user});
    } catch (error) {
        console.log(error);
    };
};

export const renderCart = async (req, res) => {
    const cartId = req.params.cid;
    const cart = await getCartService(cartId);
    console.log(cart);
    res.render("cart", cart);
};