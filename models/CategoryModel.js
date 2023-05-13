import { Schema, model, models } from "mongoose";

// Define the category schema
const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "This name is already in use"],
    uppercase: true,
  },
});

// Create the category model
const Category = models.Category || model("Category", categorySchema);

// Export the model
export default Category;
