// main library imports
import React from "react";
import ReactDOM from "react-dom/client";

// style imports
import { ReactLenis } from '@studio-freight/react-lenis'
import "./index.css";

// provider imports
import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "./context/AuthContext";
import {ThemeProvider as NextThemesProvider} from "next-themes";

// component imports
import AppBar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import {router} from "./routes/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <AppBar />
            <ReactLenis root>
              <RouterProvider router={router} />
            </ReactLenis>
          <Footer />
        </NextThemesProvider>
      </NextUIProvider>
    </AuthProvider>
  </React.StrictMode>,
);
