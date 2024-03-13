import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContexProvider = ({ children }) => {
  const [isFirstPageVisible, setIsFirstPageVisible] = useState(true);
  return (
    <AuthContext.Provider
      value={{
        isFirstPageVisible: isFirstPageVisible,
        setIsFirstPageVisible: setIsFirstPageVisible,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
