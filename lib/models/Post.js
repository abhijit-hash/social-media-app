import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true, 
  },
  caption: {
    type: String, 
    required: true, 
  },
  postPhoto: {
    type: String, 
    required: true,
  },
  tag: {
    type: String, 
    required: true, 
  },
  likes: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    default: [],
  },
  comments: {
    type: [{
      commenter: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true, 
      },
      text: {
        type: String, 
        required: true, 
      },
      createdAt: {
        type: Date, 
        default: Date.now, 
      },
    }],
    default: [],
  },
  createdAt: {
    type: Date, 
    default: Date.now, 
  },
});
const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
export default Post;