import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true

    },
    password:{
        type: String,
        required: true,
        minLength: 9
    }
});

const User = mongoose.model('user', userSchema);

export default User;