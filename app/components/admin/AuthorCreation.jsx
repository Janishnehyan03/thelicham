"use client";
import Axios from "@/utils/Axios";
import { useState } from "react";

function AuthorCreationForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    email: "",
    username: "",
    twitter: "",
    facebook: "",
    instagram: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let response = await Axios.post("/author", formData);
      console.log(response.data);
      setFormData({
        image: "",
        name: "",
        email: "",
        username: "",
        twitter: "",
        facebook: "",
        instagram: "",
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form className="lg:w-1/2 w-full mx-3">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl text-center font-semibold leading-7 text-gray-900">
            Create New Author
          </h2>

          <div className="mt-10">
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900"
              >
                username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="twitter"
                  className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900"
                >
                  Twitter
                </label>
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.twitter}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="facebook"
                  className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900"
                >
                  Facebook
                </label>
                <input
                  type="text"
                  id="facebook"
                  name="facebook"
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.facebook}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="instagram"
                  className="block text-sm font-medium uppercase my-3 leading-6 text-gray-900"
                >
                  Instagram
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.instagram}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          {loading ? (
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Processing...{" "}
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AuthorCreationForm;
