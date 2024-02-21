import React from "react";
import "./_header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import Buttons from "./Buttons/Buttons";
interface HeaderProps {
  onToggleHamburgerHandler: () => void;
}
class Header extends React.Component<HeaderProps> {
  render() {
    const { onToggleHamburgerHandler } = this.props;
    return (
      <header className="header">
        <GiHamburgerMenu onClick={onToggleHamburgerHandler} />
        <Buttons />
      </header>
    );
  }
}

export default Header;
