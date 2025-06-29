import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home/home";
import Login from "./Comp/Login/login";
import Register from "./Comp/Register/reg";
import Dashboard from "./Pages/Dashboard/dashboard";
import Member from "./Pages/Member/member";
import MemberDetails from "./Pages/MemberDetails/memberDetails";
import Sidebar from "./Comp/Sidebar/sidebar";
import GeneralUser from "./Pages/GeneralUser/generalUser";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-white">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <a href="/" className="text-blue-400 underline">Go to Home</a>
  </div>
);

function ProtectedWithSidebar({ children }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedWithSidebar>
              <Dashboard />
            </ProtectedWithSidebar>
          }
        />
        <Route
          path="/members"
          element={
            <ProtectedWithSidebar>
              <Member />
            </ProtectedWithSidebar>
          }
        />
        <Route
          path="/members/:id"
          element={
            <ProtectedWithSidebar>
              <MemberDetails />
            </ProtectedWithSidebar>
          }
        />
        <Route
          path="/specific/:page"
          element={
            <ProtectedWithSidebar>
              <GeneralUser />
            </ProtectedWithSidebar>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
