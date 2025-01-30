import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        name: String,
        department: String,
    },
    {
        timestamps: true
    }
)

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;