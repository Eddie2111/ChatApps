import { createBrowserRouter } from "react-router-dom";

// page imports
import ChatPage from "../views/chat";
import Home from "../views/home";
import Login from "../views/login";
import Signup from "../views/signup";
import Profile from "../views/profile";
import Settings from "../views/settings";
// auth context imports
import { useAuth } from "../context/AuthContext";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element:  <Login />
    },
    {
      path: "/chat",
      element: <ChatPage />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/settings",
      element: <Settings />
    }
  ]);