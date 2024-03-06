import { v2 as cloudinary} from "cloudinary";
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinart = async (localStorage) => {
    try {
        if(!localFilePath) return null 
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
         // file has been uplaoded 
         console.log("file has been uploaded",response.url );
         return response
    } catch (error) {
        fs.unlinkSync(localFilePath) 
        // remove the locally saved tempoary file as the upload operation got failed
        return null;
    }


}

export { uploadOnCloudinart }