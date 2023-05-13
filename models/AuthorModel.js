import { Schema, model, models } from "mongoose";

// Define the author schema
const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Author = models.Author || model("Author", authorSchema);

export default Author;
