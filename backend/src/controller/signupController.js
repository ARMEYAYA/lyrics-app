import express from "express";
import bcrypt from "brcypt";

//model
import User from "User.js";

const signUp = () => {
    const {email, password} = req.body;
    email = email.trim();
    password = password.trim();

    // check if theres no empty inputs
    if(email == "" ||  password == ""){
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        })
    // check if the input is email format
    }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        res.json({
            status: "FAILED",
            message: "Invalid Email entered"
        })
    }else if(password.length < 8){
        res.json({
            status: "FAILED",
            message: "Password is to short!"
        })
    }else(
        // check for existing user
        User.fine({email}).then(result => {
            // a user already exists
            if(result){
                res.json({
                status: "FAILED",
                message: "User with the provided email already exists"
                });
            }else{
                // create new user

                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        email,
                        password: hashedPassword
                    })

                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "Signup successful",
                            data: result
                        })
                    }).catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An occurred while saving user account!"
                        })
                    })
                }).catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An occurred while hashing Password"
                    })
                })
            };
        }).catch(err => {
            console.log(err)
            res.json({
                status: "FAILED",
                message: "An error is accurred while checking for existing user!"
            });
        })
    )
};