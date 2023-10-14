'use client';
// not being used right now
import React, {createContext, useContext, useState, ReactNode} from 'react';
interface IUserProps {
  id: string;
  name: string;
  email: string;
  image: string;
}

interface AuthContextType {
  user: IUserProps;
  login: (userData: User) => void;
  logout: () => void;
  getLogin: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>(undefined);
/**
 * @name AuthProvider
 * @description This is a provider for the authentication
 * @param {JSX.Element} children
 * @return {JSX.Logic}
 */

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  /**
   * this function gets a cookie
   * @name getCookie
   * @description Helper function to get a cookie
   * @param {string} name
   * @return {string}
   */
  const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
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
    const storedUser = getCookie('user');
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
  const login = (userData: string) => {
    setUser(userData);
    setCookie('user', JSON.stringify(userData), 7); // Expires in 7 days
  };

  /**
   * @name logout
   * @action sets the user state to null and deletes the cookie
   * @description This is a logout function
   * @return {any} null
   * @requires setUser, deleteCookie
   */
  const logout = (): void => {
    setUser(null);
    deleteCookie('user');
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
  const setCookie = (name: string, value: string, days: number) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : '');
    document.cookie = `${name}=${cookieValue}; path=/;`;
  };

  /**
   * @name deleteCookie
   * @action deletes the cookie
   * @description Helper function to delete a cookie
   * @param {string} name
   * @return {any} null
   * @requires setUser, deleteCookie
   */
  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  // get login
  const getLogin = async () => {
    console.log(user);
  };

  return <AuthContext.Provider value={{user, login, logout, getLogin}}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
