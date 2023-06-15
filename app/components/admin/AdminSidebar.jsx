import {
  faHome,
  faMoneyBillTransfer,
  faPen,
  faTableList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


async function AdminSidebar() {
  return (
    <div className="bg-[#222123] h-screen text-white w-64">
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <p className="mt-2 text-gray-400">Welcome, Admin</p>
      </div>
      <nav className="mt-6">
        <Link
          className="flex items-center px-6 py-2 text-gray-500 hover:bg-gray-700 hover:text-white"
          href="/admin/dashboard"
        >
          <FontAwesomeIcon icon={faHome} className="h-6 mr-2" />
          Dashboard
        </Link>
        <Link
          className="flex items-center px-6 py-2 text-gray-500 hover:bg-gray-700 hover:text-white"
          href="/admin/upload-post"
        >
          <FontAwesomeIcon icon={faPen} className="h-6 mr-2" />
          New Post
        </Link>
        <Link
          className="flex items-center px-6 py-2 text-gray-500 hover:bg-gray-700 hover:text-white"
          href="/admin/create-author"
        >
          <FontAwesomeIcon icon={faUser} className="h-6 mr-2" />
          New Author
        </Link>
        <Link
          className="flex items-center px-6 py-2 text-gray-500 hover:bg-gray-700 hover:text-white"
          href="/admin/create-category"
        >
          <FontAwesomeIcon icon={faTableList} className="h-6 mr-2" />
          New Category
        </Link>
        <Link
          className="flex items-center px-6 py-2 text-gray-500 hover:bg-gray-700 hover:text-white"
          href="#"
        >
          <FontAwesomeIcon icon={faMoneyBillTransfer} className="h-6 mr-2" />
          Subscribers
        </Link>
      </nav>
    </div>
  );
}

export default AdminSidebar;
