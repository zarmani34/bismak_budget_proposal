import { DollarSign, FileText } from "lucide-react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-4 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
