import { Router } from "express";
import userModel from "../dao/models/user.model.js";

const sessionRouter = Router();

sessionRouter.post("/register", async (req, res) => {
    const {first_name, last_name, email, age, password} = req.body;
    try {
        const newUser = new userModel({first_name, last_name, email, age, password});
        await newUser.save();
        res.redirect("/login");
    } catch (error) {
        res.send("Error al registrar usuario");
    }
});

sessionRouter.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user) {
            return res.status("500").send("Usuario no encontrado");
        }

        req.session.user = {
            id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            age: user.age
        }

        res.redirect("/products");
    } catch (error) {
        res.send();
    }
});

sessionRouter.post("/logout", (req, res) => {
    req.session.destroy((error) => {
        if(error) {
            return res.send("Error al cerrar sesión");
        }
        res.redirect("/login");
    });
});

export default sessionRouter;