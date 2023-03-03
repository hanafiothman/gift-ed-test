import useCookie from 'hooks/useCookie';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(() => {});

const AuthProvider = ({ children }) => {
  const { setCookie, getCookie, removeCookie } = useCookie();

  const [isLoggingIn, setLoggingIn] = useState(false);
  const [token, setToken] = useState(null);

  const saveToken = (_token) => {
    setToken(_token);
    setCookie('token', _token, { path: '/' });
  }

  const removeToken = () => {
    setToken(null);
    removeCookie('token');
  }

  const submitLogin = async (email, password) => {
    // Login will only save a fake token in the `token` cookie and save in token state
    setLoggingIn(true);
    setTimeout(() => {
      saveToken(Math.random().toString(36).slice(2));
      setLoggingIn(false);
    }, 3000);
  }

  const logout = () => {
    // Logout will only remove the `token` cookie and reset token state to null
    removeToken();
  }

  useEffect(() => {
    // fake refresh token
    const _token = getCookie('token');
    if(_token) saveToken(_token);
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        token,
        isLoggingIn,
        login: (email, password) => submitLogin(email, password),
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
