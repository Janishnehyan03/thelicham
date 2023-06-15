import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment/moment";
import Link from "next/link";
import React from "react";

function CategoryTable({ categories, getCategories }) {
  return (
    <div className="relative overflow-x-auto rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Category Name
            </th>
            <th scope="col" className="px-6 py-3">
              Sub Categories
            </th>
            <th scope="col" className="px-6 py-3">
              Created
            </th>

            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((category, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {category?.name}
                </th>
                <td className="px-6 py-4">
                  {moment(category.createdAt).format("DD/MM/yyyy")}
                </td>
                <td className="px-6 py-4">
                  {category.subCategories.map((item, ind) => (
                    <p key={ind} className="bg-gray-300 text-center p-2 rounded">
                      {item.name}
                    </p>
                  ))}
                </td>
                <td className="px-6 py-4">
                  <Link href={`/admin/edit-post/`}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="h-4 text-blue-700"
                    />
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="h-4 text-red-700"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryTable;
