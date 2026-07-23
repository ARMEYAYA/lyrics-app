import User from "../model/User.js"
import bcrypt from "bcrypt"

const login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                status: "FAILED",
                message: "Please fill all fields"
            })
        }

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                status: "FAILED",
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({
                status: "FAILED",
                message: "Wrong email or password"
            })
        }

        res.status(200).json({
            status: "SUCCESSFUL",
            message: "Login sucessfully",
            user: {
                id: user._id,
                email: user.email
            }
        })
    }catch(err){
        console.log(err)

        res.status(500).json({
            status: "FAILED",
            message: "Server error"
        })
    }
}