"use client";
import Link from "next/link";
import React from "react";
import { useUserContext } from "@/utils/userContext";

function GoToDashboard() {
  const { user } = useUserContext();

  return (
    <>
      {user?.role === "admin" && (
        <div className="my-5 px-6">
          <Link
            href="/admin/dashboard"
            className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
          >
            Go To Dashboard
          </Link>
        </div>
      )}
    </>
  );
}

export default GoToDashboard;
