import {fileURLToPath} from "url";
import { dirname } from "path";
import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);
export const generateProducts = () => {
    const products = [];
    for(let i = 0; i < 101; i += 1) {
        const newProduct = {
            title: faker.commerce.product(),
            code: i + 1,
            category: "Mock",
            description: faker.commerce.productAdjective(),
            price: faker.commerce.price({ min: 100, max: 200, dec: 0 })
        };
        products.push(newProduct);
    };
    return products;
};

export default __dirname;