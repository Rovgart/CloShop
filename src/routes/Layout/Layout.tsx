import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import HamburgerMenu from "../../Components/HamburgerMenu/HamburgerMenu";
type LayoutProps = {
  children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Header onToggleHamburgerHandler={toggleHamburgerMenu} />
      {isHamburgerMenuOpen && <HamburgerMenu />}
      {children}
    </>
  );
};

export default Layout;
