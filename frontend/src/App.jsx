import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import CreateLinkPage from "./pages/CreateLinkPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ index: true, element: <HomePage /> }],
    },
    {
      path: "/dashboard",
      element: <MainLayout />,
      children: [{ index: true, element: <DashboardPage /> }],
    },
    {
      path: "/create-link",
      element: <MainLayout />,
      children: [{ index: true, element: <CreateLinkPage /> }],
    },
    {
      path: "/profile",
      element: <MainLayout />,
      children: [{ index: true, element: <ProfilePage /> }],
    },
    {
      path: "/auth",
      element: <LoginPage />,
    },
    {
      path: "/auth/new",
      element: <RegisterPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
