import express from "express";
import path from "path";
import bcrypt from "bcrypt";
import connectDB from "./src/config/db.js";


//routes
import signUpRouter from "./src/router/signupRouter.js"


const app = express();

connectDB();

app.use("api/signup", signUpRouter);

app.listen(5000, () => {
    console.log("Server is running on Port: 5000")
});