import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connect("mongodb+srv://armeajohnvincent_db_user:Godisgood18@cluster0.xq2ohob.mongodb.net/?appName=Cluster0");
        console.log('connected to database')
    }
    catch(err){
        console.log(err);

        process.exit(1); 
    };
};

export default connectDB;