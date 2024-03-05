import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudnary url
            required:  true,
            thumbnail: true,
        },
         tittle: {
            type: String, 
            required:  true,
        },
        description: {
            type: String,
            required:  true,
        },
         duration: {
            type: Number, //cloudnary
            required:  true,
        },
         views: {
            deafault: 0
        },
          isPublished: {
            type: Boolean,
            deafault: true
        },
          owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    },
    {
        timeStamps: true
    }
)


export const video = mongoose.model("Video", videoSchema)