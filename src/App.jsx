import React from "react";
import Dashboard from "./screens/dashboard/Dashboard";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Practice from "./screens/practice/Practice";
import Provider from "./screens/provider/Provider";
import Patient from "./screens/patient/Patient";
import Tickets from "./screens/tickets/Tickets";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./screens/login/Login";
import CodingWithAi from "./screens/codingwithai/CodingWithAi";
import CodingManual from "./screens/codingmanual/CodingManual";
import CptCode from "./screens/cptCode/CptCode";
import IcdCode from "./screens/icdCode/IcdCode";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full h-[calc(100vh-72px)] overflow-y-auto">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "practice",
          element: <Practice />,
        },
        {
          path: "provider",
          element: <Provider />,
        },
        {
          path: "patient",
          element: <Patient />,
        },

        {
          path: "tickets",
          element: <Tickets />,
        },

        {
          path: "codingwithai",
          element: <CodingWithAi />,
        },
        {
          path: "codingmanual",
          element: <CodingManual />,
        },
        {
          path: "cpt-code",
          element: <CptCode />,
        },
        {
          path: "icd-code",
          element: <IcdCode />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
