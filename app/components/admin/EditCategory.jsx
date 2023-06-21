import { useState } from "react";
import axios from "axios";
import Axios from "@/utils/Axios";

function EditCategory({ category, onClose }) {
  const [categoryName, setCategoryName] = useState(category.name);

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.patch(`/category/${category._id}`, {
        name: categoryName,
      });

      // Handle the response or perform any additional logic
      console.log("Category updated:", response.data);

      onClose(); // Close the edit popup after successfully updating the category
    } catch (error) {
      // Handle error if the API request fails
console.log(error.response);
      console.error("Error updating category:", error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg">
      <h2>Edit Category</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Category Name:
          <input
            type="text"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
        </label>
        {/* Add more fields for editing category properties */}
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditCategory;
