import { Router } from "express";
import userModel from "../dao/models/user.model.js";

const sessionRouter = Router();

sessionRouter.post("/register", async (req, res) => {
    const {first_name, last_name, email, age, password} = req.body;

    let role;

    try {
        if (email === "adminCoder@coder.com") {
            role = "admin"
            /* adminCod3r123 */
        } else {
            role = "user"
        };
        
        const newUser = new userModel({first_name, last_name, email, age, password, role});
        await newUser.save();
        res.redirect("/login");
    } catch (error) {
        res.status(500).send("Error al registrar usuario");
    }
});

sessionRouter.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});
            
        if(!user) {
            return res.status(404).send("Usuario no encontrado");
        }
        
        if (user.password !== password) {
            return res.status(401).send('Contraseña incorrecta');
        }

        req.session.user = {
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            age: user.age,
            role: user.role
        }
        if (req.session.user.role === "admin") {
            res.redirect("/realtimeproducts?page=1");
        } else {
            res.redirect("/products?page=1");
        }
    } catch (error) {
        res.status(500).send("Error al iniciar sesión");
    }
});

sessionRouter.post("/logout", (req, res) => {
    req.session.destroy((error) => {
        if(error) {
            return res.status(500).send("Error al cerrar sesión");
        }
        res.redirect("/login");
    });
});

export default sessionRouter;