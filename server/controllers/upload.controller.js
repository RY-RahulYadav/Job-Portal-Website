import { log } from 'console';
import { cloudinary } from '../config/cloudinary.js'
import fs from 'fs'

const uploadFile = async (req, res) => {
    const localpath = req.files[0].path;
    try {
        // console.log(req.files);
        const result = await cloudinary.uploader.upload(localpath, {
            resource_type: 'auto', 
            fetch_format: 'auto',
            quality: 'auto'
        })
        fs.unlinkSync(localpath)
        res.status(200).json({ message: "file uploaded", fileUrl: result.url })

    }
    catch (err) {
        console.log(err);
        fs.unlinkSync(localpath)
        res.status(500).json({ message: "server error , file not uploaded", err: err })
    }
}

const deleteFile = async (req, res) => {
    try {
        const path = req.body.url
        // console.log(path);
        const publicId = path.split('/').pop().split('.')[0]
        // console.log(publicId);
        const result = await cloudinary.uploader.destroy(publicId ,{ invalidate: true })
        res.status(200).json(result)
    }
    catch (err) {
        res.status(500).json({ message: "server error , file not deleted", err: err })
    }
}

export { uploadFile, deleteFile }