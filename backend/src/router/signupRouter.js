import express from "express";
import {signUp} from "../controller/signupController.js"

const Router = express.Router();

Router.post("/", signUp);

export default Router;