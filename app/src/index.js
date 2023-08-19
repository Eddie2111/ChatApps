// main library imports
import React from "react";
import ReactDOM from "react-dom/client";

// style imports
import "./index.css";

// provider imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./context/AuthContext";

// page imports
import ChatPage from "./views/chat";
import Home from "./views/home";
import Login from "./views/login";
import Signup from "./views/signup";

// component imports
import AppBar from "./components/main/Navbar";
import Footer from "./components/main/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <AppBar />
        <RouterProvider router={router} />
        <Footer />
      </NextUIProvider>
    </AuthProvider>
  </React.StrictMode>,
);
