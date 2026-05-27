import mongoose from "mongoose";


const connectionDb = async () => {
    try{
        await mongoose.connect("mongodb+srv://armeajohnvincent_db_user:BUjKv9iqj6ocaE58@cluster0.xq2ohob.mongodb.net/?appName=Cluster0");

        console.log("MongoDB is Connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    };
};

export default connectionDb;