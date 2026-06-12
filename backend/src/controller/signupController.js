import express from "express";
import bcrypt from "bcrypt";

import User from "../model/User.js";


    const signUp = async (res, req) => {
        try{
        const {email, password} = req.body;
        email = email.trim();
        password = password.trim();

        if(email == "" || password == ""){
            res.json({
                status: "FAILED",
                message: "Theres and empty field!"
            })
        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.text(email)){
            res.json({
                status: "FAILED",
                message: "Email is not valid!"
            })
        }else if(password > 8){
            res.json({
            status: "FAILED",
            message: "Password is weak, should be higher than 8 character"
            })

        }else{
           const isExists = await User.find();

           if(isExists){
                res.json({
                    status: "FAILED",
                    message: "The user already exists"
                })
           }else{
                const hashedPassword = await bcrypt.hash(password, 10);
                
                const newUser = new User({
                    email,
                    password: hashedPassword
                })

                const savedUser = await newUser.save();

                res.json({
                    status: "SUCCESS",
                    message: "Signup successfully",
                    data: savedUser
                })

           }
        }
        }catch(err){
            console.log(err);

            res.json({
                status: "FAILED",
                message: "Server error during signup"
            })
        }
    }