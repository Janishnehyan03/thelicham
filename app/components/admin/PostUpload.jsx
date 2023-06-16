"use client";
import Axios from "@/utils/Axios";
import { useUserContext } from "@/utils/userContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HtmlEditor from "../HtmlEditor";

function PostUpload() {
  const { getMe } = useUserContext();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState("");
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const selectCategories = (e) => {
    const selectedCategoryId = e.target.value;

    // Check if the category is already selected
    const isCategorySelected = selectedCategories.includes(selectedCategoryId);

    if (!isCategorySelected) {
      // Add the selected category to the array
      setSelectedCategories((prevSelectedCategories) => [
        ...prevSelectedCategories,
        selectedCategoryId,
      ]);
    }
  };

  // Render the output data in a box with the category name
  const renderSelectedCategories = () => {
    const handleCategoryClick = (categoryId) => {
      // Remove the category from the selection if it's already present
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.includes(categoryId)
          ? prevSelectedCategories.filter((id) => id !== categoryId)
          : [...prevSelectedCategories, categoryId]
      );
    };

    return selectedCategories.map((categoryId, index) => {
      const category = categories.find((item) => item._id === categoryId);
      const categoryName = category ? category.name : "Unknown Category";

      return (
        <div
          onClick={() => handleCategoryClick(categoryId)}
          className="bg-gray-200 hover:cursor-pointer hover:text-red-500 rounded-md p-2 m-2"
          key={index}
        >
          <p>{categoryName}</p>
        </div>
      );
    });
  };

  async function getCategories() {
    try {
      const res = await Axios.get(`/category`);
      setCategories(res.data.data);
    } catch (error) {
      console.log(error.response);
    }
  }
  async function getAuthors() {
    try {
      const res = await Axios.get(`/author`);
      setAuthors(res.data.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  const initialValue = {
    title: "",
    description: "",
    author: "",
    categories: selectedCategories,
    thumbnail: "image",
    detailHtml: "",
    slug: "",
  };
  const [formData, setFormData] = useState(initialValue);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    Axios.post("/post", {
      ...formData,
      detailHtml: html,
      categories: selectedCategories,
    })
      .then((response) => {
        if (response.status === 200) {
          setFormData(initialValue);
          setHtml("");
          setLoading(false);
          router.push("/admin/dashboard");
        }
      })
      .catch((error) => {
        // Handle errors.
        setLoading(false);
        console.log(error.response);
      });
  };

  useEffect(() => {
    getMe().then((userData) => {
      if (!userData || !userData.role === "admin") {
        router.push("/");
      }
    });
  }, []);
  useEffect(() => {
    getCategories();
    getAuthors();
  }, []);

  return (
    <div className="flex justify-center p-6 bg-white pb-14  items-center">
      <form className="mx-3 border-2 p-10 rounded">
        <div className="border-b ">
          <h2 className="text-2xl text-center font-semibold leading-7 text-gray-900">
            Create New Post
          </h2>

          <div className="mt-10">
            <div>
              <label className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900">
                Post Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="first-name"
                  onChange={(e) => handleInputChange(e)}
                  value={formData.title}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="description"
                  id="description"
                  onChange={(e) => handleInputChange(e)}
                  autoComplete="given-name"
                  value={formData.description}
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900">
                Slug
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  autoComplete="given-name"
                  value={formData.slug}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-full">
                <label className="block text-sm font-medium uppercase my-3  leading-6 text-gray-900">
                  Category
                </label>

                <div className="mt-2">
                  <select
                    id="country"
                    name="categories"
                    onChange={(e) => selectCategories(e)}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option hidden>Select Category</option>
                    {categories.length > 0 &&
                      categories.map((category, key) => (
                        <option value={category._id} key={key}>
                          {category?.name}
                        </option>
                      ))}
                  </select>
                  <div className="flex flex-wrap">
                    {renderSelectedCategories()}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900">
                  Author
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="author"
                    autoComplete="country-name"
                    onChange={(e) => handleInputChange(e)}
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option hidden>Select Author</option>
                    {authors.length > 0 &&
                      authors.map((author, key) => (
                        <option value={author._id} key={key}>
                          {author?.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 p-3  pb-8 mt-3">
          <label className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900">
            POST CONTENT
          </label>
          <HtmlEditor setHtml={setHtml} />
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          {loading ? (
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Processing...
            </button>
          ) : (
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default PostUpload;
