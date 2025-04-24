import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChange, getUser, signIn, signOut, signUp } from '../lib/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = getUser();
    setUser(session?.user ?? null);

    const { data: listener } = onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = {
    user,
    signIn,
    signOut,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
