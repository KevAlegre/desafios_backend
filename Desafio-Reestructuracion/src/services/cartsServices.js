import {createCartData, existCart, getCartData, updateCartData} from "../dao/data/cartsData.js";
import {getProductByIdService} from "../services/productsServices.js"

export const createCartService = async () => {
    const newCart = await createCartData();
    return newCart;
};

export const getCartService = async (cartId) => {
    const verifyId = await existCart(cartId);
    if(!verifyId) throw new Error("Cart with ID entered does not exist");
    const cart = await getCartData(cartId);
    return cart;
};

export const addToCartService = async (cartId, productId) => {
    const cart = await getCartService(cartId);
    if(!cart) return;
    const product = await getProductByIdService(productId);
    if(!product) throw new Error("Product with ID entered does not exist");
    cart.products.push({product: productId});
    const updateCart = await updateCartData(cartId, cart);
    return updateCart;
};

export const removeFromCartService = async (cartId, productId) => {
    const cart = await getCartService(cartId);
    if(!cart) return;
    const product = await getProductByIdService(productId);
    if(!product) throw new Error("Product with ID entered does not exist");
    const index = cart.products.findIndex((product) => product.id === productId);
    cart.products.splice(index, 1);
    const updateCart = await updateCartData(cartId, cart);
    return updateCart;
};

export const updateQuantityService = async (cartId, productId, quantity) => {
    const cart = await getCartService(cartId);
    if(!cart) return;
    const product = await getProductByIdService(productId);
    if(!product) throw new Error("Product with ID entered does not exist");
    const index = cart.products.find((product) => product.id === productId);
    const valueQuantity = Object.values(quantity);
    index.quantity = valueQuantity[0];
    console.log(valueQuantity);
    const updateCart = await updateCartData(cartId, cart);
    return updateCart;
};

export const clearCartService = async (cartId) => {
    const cart = await getCartService(cartId);
    if(!cart) return;
    cart.products = [];
    const updateCart = await updateCartData(cartId, cart);
    return updateCart;
};