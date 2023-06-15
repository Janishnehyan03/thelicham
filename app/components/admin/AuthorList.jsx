import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment/moment";
import Link from "next/link";
import React from "react";

function AuthorList({ authors }) {
  return (
    <div className="relative overflow-x-auto rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Joined
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {authors?.length > 0 &&
            authors.map((author, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {author.name}
                </td>
                <td className="px-6 py-4">{author.email}</td>
                <td className="px-6 py-4">{author.username}</td>
                <td className="px-6 py-4">
                  {moment(author.joined).format("DD/MM/yyyy")}
                </td>
                <td className="px-6 py-4">
                  <Link href={`/edit-author/${author.id}`}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="h-4 text-blue-700 cursor-pointer"
                    />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AuthorList;
