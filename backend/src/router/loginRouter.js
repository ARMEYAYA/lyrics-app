import express from "express";
import login from "../controller.js"

const Router = express.Router();


Router.get("/login" , login)
Router.get("/logout", (req, res) => {
    res.status(200).json({
        status: "SUCCESSFUL",
        message: "Logout successfully"
    })
})

export default Router;