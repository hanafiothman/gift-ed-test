import useCookie from 'hooks/useCookie';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(() => {});

const AuthProvider = ({ children }) => {
  const { setCookie, getCookie, removeCookie } = useCookie();

  const [isLoggingIn, setLoggingIn] = useState(false);
  const [token, setToken] = useState(null);

  const saveTokens = (token, refreshToken) => {
    setToken(token);
    setCookie('refresh_token', refreshToken, { path: '/' });
  }

  const removeTokens = () => {
    setToken(null);
    removeCookie('refresh_token');
  }

  const submitLogin = async (email, password) => {
    // Login will only save a fake refresh token in the `refresh_token` cookie and save auth token in token state
    setLoggingIn(true);
    setTimeout(() => {
      saveTokens(Math.random().toString(36).slice(2), Math.random().toString(36).slice(2));
      setLoggingIn(false);
    }, 2000);
  }

  const logout = () => {
    // Logout will only remove the `token` cookie and reset token state to null
    removeTokens();
  }

  const refreshToken = () => {
    const refreshToken = getCookie('refresh_token');
    if(refreshToken) saveTokens(Math.random().toString(36).slice(2), refreshToken);
  }

  useEffect(() => {
    // fake refresh token
    refreshToken();
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
