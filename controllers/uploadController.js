const dotEnv = require("dotenv");
const Uploader = require("../models/Uploader");
dotEnv.config();


const uploadNewVideo = async (req, res, next) => {
    const {title, description, thumbnail, video} = req.body;
    try {
        const uploadedVideo = await Uploader.findOne({video});
        if (uploadedVideo) {
            return res.status(400).json('Video already existed!');
        }

        const newVideo = new Uploader({
            title,
            description,
            thumbnail,
            video
        });

        await newVideo.save();
        res.status(201).json({message: 'Video uploaded successfully!'});
        console.log('uploaded!');


    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal server error'})
    }
}

const getAllVideos = async(req, res) => {
    try {
        const videos = await Uploader.find()
        return res.json({ videos })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}



module.exports = {uploadNewVideo, getAllVideos};
