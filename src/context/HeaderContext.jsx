import { createContext, useState, useContext } from "react";
import { useLocation } from "react-router-dom";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  const currentPath = path.split("/")[1];
  const [header, setHeader] = useState(currentPath || "home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HeaderContext.Provider value={{ header, setHeader, sidebarOpen, setSidebarOpen }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
