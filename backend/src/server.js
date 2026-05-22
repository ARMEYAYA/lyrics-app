import express from "express";
import path from "path";
import brcypt from "brcypt";

const app = express();


app.listen(5000, () => {
    console.log("Server is running on Port: 5000")
});