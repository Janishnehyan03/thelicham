import Axios from "@/utils/Axios";
import { useEffect, useState } from "react";

function EditCategory({ onClose, subCategories, selectedCategory }) {
  const [category, setCategory] = useState(null);
  const [categoryName, setCategoryName] = useState(null);

  const getCategory = async () => {
    try {
      let { data } = await Axios.get(`/category/${selectedCategory._id}`);
      console.log(data);
      setCategory(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleCategoryNameChange = (event) => {};

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
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Category</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            htmlFor="categoryName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Category Name:
          </label>
          <input
            id="categoryName"
            type="text"
            value={selectedCategory.name}
            onChange={handleCategoryNameChange}
            className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-center font-bold uppercase mt-2">Sub Categories</p>
          {category?.subCategories.map((item, key) => (
            <p
              className="bg-gray-200 p-2 my-1 rounded-full text-center"
              key={key}
            >
              {item.name}
            </p>
          ))}
        </div>
        {/* Add more fields for editing category properties */}
        <div className="flex space-x-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCategory;
