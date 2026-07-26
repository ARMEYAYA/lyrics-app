import express from "express";
import connectDB from "./src/config/db.js"

import loginRouter from "./src/router/loginRouter.js"
import signUpRouter from "./src/router/signupRouter.js"

const app = express();

connectDB();

app.use("/api/signup", signUpRouter);
app.use("/api/login", loginRouter);

app.listen(5000, () => {
    console.log("Server is running in port: 5000");
});