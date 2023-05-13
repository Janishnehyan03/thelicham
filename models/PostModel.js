import mongoose, { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      unique: [true, "Title is already used"],
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    detailHtml: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      required: [true, "Category is required"],
      ref: "Category",
    },
    author: {
      type: mongoose.Types.ObjectId,
      required: [true, "Category is required"],
      ref: "Author",
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail is required"],
    },
    // hashtags: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
