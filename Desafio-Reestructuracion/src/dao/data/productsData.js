import productsModel from "../models/products.model.js";

export const getProductsData = async (filter, options) => {
    const products = await productsModel.paginate(filter, options);
    return products;
}

export const getProductByIdData = async (productId) => {
    const product = await productsModel.findOne({_id: productId});
    return product;
};

export const existCode = async (code) => {
    const exist = await productsModel.findOne({code: code});
    return exist;
};

export const createProductData = async (product) => {
    const newProduct = await productsModel.create(product);
    return newProduct;
};

export const updateProductData = async (productId, productToReplace) => {
    const updateProduct = await productsModel.updateOne({_id: productId}, productToReplace);
    return updateProduct;
};

export const deleteProductData = async (productId) => {
    const deleteProduct = await productsModel.deleteOne({_id: productId});
    return deleteProduct;
};