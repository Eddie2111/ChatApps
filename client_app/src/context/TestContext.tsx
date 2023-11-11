'use client';
import React, {createContext, useEffect, useContext, /*useState, ReactNode*/} from 'react';
import {SetUser, GetUser} from './handler';
const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
	const CookieTest = () => {
		useEffect(() => {
			Handler(); // should be called in login
		}, []);
	};
	const Login = async () => {
		await SetUser();
	};
	const getUser = async () => {
		const userData = await GetUser();
		return userData;
	};
	const LogOut = async () => {
		// !IMPORTANT ########  !!not implemented!! ####### !IMPORTANT
		//await Logout();
	};
	/*
  const [user, setUser] = useState(() => {
    const storedUser = getCookie("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });


  const logout = () => {
    setUser(null);
    document.cookie = "user=; max-age=0";
  };

  const getLogin = () => {
    const storedUser = getCookie("user");
    return storedUser ? JSON.parse(storedUser) : null;
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, getLogin }}>
      {children}
    </AuthContext.Provider>
  );
  */
	return <AuthContext.Provider value={{CookieTest, Login, getUser, LogOut}}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
