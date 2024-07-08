import cartModel from "../models/carts.model.js";

export const createCartData = async () => {
    const createCart = await cartModel.create({});
    return createCart;
};

export const existCart = async (cartId) => {
    const verifyId = cartModel.findOne({_id: cartId});
    return verifyId;
};

export const getCartData = async (cartId) => {
    const cart = await cartModel.findOne({_id: cartId}).populate("products.product").lean();
    return cart;
};

export const updateCartData = async (cartId, cart) => {
    const updateCart = await cartModel.updateOne({_id: cartId}, cart);
    return updateCart;
};