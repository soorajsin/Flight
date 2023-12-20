import React, { createContext, useState } from "react";

export const contextNavigate = createContext({
  userdata: "",
  setUserData: () => {},
});

const ContextProvider = ({ children }) => {
  const [userdata, setUserData] = useState("");

  return (
    <>
      <contextNavigate.Provider value={{ userdata, setUserData }}>
        {children}
      </contextNavigate.Provider>
    </>
  );
};

export default ContextProvider;
