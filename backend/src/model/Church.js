import mongoose from "mongoose";

const churchSchema = mongoose.Schema({
    churchName: {
        type: String,
        required: true
    }
})

const Church = mongoose.model("Church", churchSchema);

export default churchSchema;