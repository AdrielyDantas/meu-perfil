import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Meuperfilsreen from "./pages/perfil";
const MainLayout = ({ children }) => {
  return (
    <div>
     
      <main>{children}</main>
      
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/perfil",
    element: (
      <MainLayout>
        <Meuperfilsreen />
      </MainLayout>
    ),
  },


  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
