"use client";
import HtmlEditor from "@/app/components/HtmlEditor";
import Axios from "@/utils/Axios";
import React, { useState } from "react";

async function page() {
  const [htmlContent, setHtmlContent] = useState("");
  async function getCategories() {
    const res = await fetch(`http://localhost:3000/api/category`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const handleHtmlChange = (value) => {
    setHtmlContent(value);
  };
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
    thumbnail: "",
    detailHtml: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("/api/posts", formData)
      .then((response) => {
        // Do something with the response data.
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors.
        console.log(error);
      });
  };
  const categories = await getCategories();
  return (
    <div className="flex justify-center items-center h-full">
      <form className="lg:w-1/2 w-full mx-3">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl text-center font-semibold leading-7 text-gray-900">
            Create New Post
          </h2>

          <div className="mt-10">
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Post Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Slug
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="slug"
                  id="slug"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <photoicon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  >
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
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
                  </photoicon>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-full">
                <label
             
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {categories.map((category, key) => (
                      <option key={key}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full">
                <label
             
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Author
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HtmlEditor value={htmlContent} onChange={handleHtmlChange} />
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;
