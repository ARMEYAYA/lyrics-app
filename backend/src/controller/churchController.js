import Church from "../model/Church.js";

const addChurch = async (req, res) => {
    try{
        const {churchName} = req.body;

        if(!churchName){
            return res.status(404).json({
                status: "FAILED",
                message: "Church name is required"
            })
        }

         const existingChurch = Church.findone({ churchName: churchName.trim() })

         if(existingChurch){
             return res.status(409).json({
                status: "FAILED",
                message: "Church already exists"
            })
         }

        const newChurch = new Church({
            churchName: churchName.trim()
        })

        const saveChurch = await newChurch.save();

        res.status(200).json({
            status: "SUCCESSFUL",
            message: "Church added successfully"
        })

    }catch(err){
        console.log(err)

        res.status(500).json({
            status: "FAILED",
            message: "Server error"
        })
    }
    }




const editChurch = async (req, res) => {
    try{
        const { id } = req.params;
        const { newChurchName } = req.body;

        if (!newChurchName){
            return res.status(400).json({
                status: "FAILED",
                message: "Church name is required"
            })
        }

        const church = await Church.findById(id);

        if(!church){
            return res.status(404).json({
                status: "FAILED",
                message: "Church not found"
            })
        }

        church.churchName = newChurchName.trim();

        await church.save();

        res.status(200).json({
            status: "SUCCESSFUL",
            message: "Church updated successfully",
            church
        })

    }catch(err){

        console.log(err)

        res.status(500).json({
            status: "FAILED",
            message: "Server error"
        })

    }
}

const deleteChurch = async (req, res) => {
    try{
        const { id } = req.params;

        const church = Church.findById(id);

        if(!church){
            return res.status(404).json({
                status: "FAILED",
                message: "Church not found"
            })
        }

        await church.deleteOne();

        res.status(200).json({
            status: "SUCCESSFUL",
            message: "Church deleted successfully"
        })

    }catch(err){
        console.log(err);

        res.status(500).json({
            status: "FAILED",
            message: "Server error"
        })
    }
}

const getAllChurch = async (req, res) => {
    try{
        const churches = Church.find();

        res.status(200).json({
            status: "SUCCESSFUL",
            churches
        });
    }catch(err){
        console.log(err);

        res.status(500).json({
            status: "FAILED",
            message: "Server error"
        })
    }
}