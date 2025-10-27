import React, { createContext, useState } from "react";
export const NavBarContext = createContext();
const NavContext = ({ children }) => {

  const [navOpen, setNavOpen] = useState(false);
  
  return (
    <div>
      <NavBarContext.Provider value={ [navOpen, setNavOpen]}>
        {children}
        </NavBarContext.Provider>
    </div>
  );
};

export default NavContext;
