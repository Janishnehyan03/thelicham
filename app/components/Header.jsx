"use client";
import { useUserContext } from "@/utils/userContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { getMe, user } = useUserContext();
  const route = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    getMe();
  }, []);
  return (
    <>
      {!route.startsWith("/admin") && (
        <nav
          className={`bg-white border-gray-200   mt-10 ${
            isOpen ? "h-screen" : ""
          }`}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="navbar-dropdown"
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto mt-5`}
        >
          <ul className="flex flex-col font-medium items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/category/society"
                className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  route === "/category/society" ? "text-red-600" : "text-gray-900"
                }`}
              >
                Society
              </Link>
            </li>
            <li>
              <Link
                href="/category/culture"
                className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  route === "/category/culture" ? "text-red-600" : "text-gray-900"
                }`}
              >
                Culture
              </Link>
            </li>
            <li>
              <Link
                href="/category/fiction"
                className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  route === "/category/fiction" ? "text-red-600" : "text-gray-900"
                }`}
              >
                Fiction
              </Link>
            </li>
            <li>
              <Link
                href="/category/discussions"
                className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  route === "/category/discussions" ? "text-red-600" : "text-gray-900"
                }`}
              >
                Discussions
              </Link>
            </li>
            <li>
              <Link
                href="/category/series"
                className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  route === "/category/series" ? "text-red-600" : "text-gray-900"
                }`}
              >
                Series
              </Link>
            </li>
            <li>
              <Link
                href="/category/about"
                className={`block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                  route === "/category/about" ? "text-red-600" : "text-gray-900"
                }`}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/subscribe"
                className="block py-2 pl-3 pr-4 rounded bg-red-900 text-white transition md:border-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Subscribe
              </Link>
            </li>
            <li>
              {user ? (
                <Link
                  href="/profile"
                  className="block py-2 group pl-3 relative pr-4 text-red-600 rounded   transition  md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  My Account
                  <span className="opacity-0 group-hover:opacity-100 absolute right-[10px] top-9 transition bg-gray-900 text-white px-2 py-1 rounded-md">
                    {user?.username}
                  </span>
                </Link>
              ) : (
                <Link
                  href="/auth/login"
                  className="flex py-2 pl-3 pr-4  rounded   transition  md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <img
                    src="/icons/user.svg"
                    alt="login icon"
                    className="mr-1"
                  />
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
