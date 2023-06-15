import React from "react";
import AdminSidebar from "../components/admin/AdminSidebar";

function layout({ children }) {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex">
        <AdminSidebar />
        <div className="flex flex-col flex-1">
          <header className="bg-[#222123] shadow-lg mb-4">
            <div className="flex items-center justify-between p-6">
              <img src="/images/logo.jpg" className="w-64" alt="" />
              <button className="bg-gray-200 rounded-lg px-4 py-2">
                Logout
              </button>
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
