import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
/**
 * @name AuthProvider
 * @description This is a provider for the authentication
 * @param {JSX.Element} children
 * @return {JSX.Logic}
 */

export const AuthProvider = ({ children }) => {

  /**
   * this function gets a cookie
   * @name getCookie
   * @description Helper function to get a cookie
   * @param {string} name
   * @return {string}
   */
  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  };

  /**
   * @name user
   * @action reads the user from the cookie and json parses it and sets it to the user state
   * @description This is a user state set up function
   * @param {string} token
   * @return {any} null
   */
  const [user, setUser] = useState(() => {
    const storedUser = getCookie("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  /**
   * @name login
   * @action sets the user state and sets the cookie from input
   * @description This is a login function
   * @param {string} userData
   * @return {any} null
   * @requires setUser, setCookie
   */
  const login = (userData) => {
    setUser(userData);
    setCookie("user", JSON.stringify(userData), 7); // Expires in 7 days
  };

  /**
   * @name logout
   * @action sets the user state to null and deletes the cookie
   * @description This is a logout function
   * @return {any} null
   * @requires setUser, deleteCookie
   */
  const logout = () => {
    setUser(null);
    deleteCookie("user");
  };

  /**
   * @name setCookie
   * @action sets the cookie
   * @description Helper function to set a cookie
   * @param {string} name
   * @param {string} value
   * @param {number} days
   * @return {any} null
   */
  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : "");
    document.cookie = `${name}=${cookieValue}; path=/;`;
  };

  // Helper function to delete a cookie
  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  // get login
  const getLogin = async () => {
    console.log(user);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, getLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
