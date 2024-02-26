// App component
import Card from "./Card/Card";
import Header from "../Components/Header/Header";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import React from "react";
interface AppState {
  isHamburgerMenuOpen: boolean;
}
class Root extends React.Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      isHamburgerMenuOpen: false,
    };
  }

  toggleHamburgerMenu = () => {
    this.setState((prevState) => ({
      isHamburgerMenuOpen: !prevState.isHamburgerMenuOpen,
    }));
  };

  render() {
    const { isHamburgerMenuOpen } = this.state;

    return (
      <div>
        {/* Header component with a button that triggers the toggleHamburgerMenu function */}
        <Header onToggleHamburgerHandler={this.toggleHamburgerMenu} />

        {/* HamburgerMenu component, conditionally rendered based on the state */}
        {isHamburgerMenuOpen && <HamburgerMenu />}
        <Card categoryName="jewelery"></Card>
      </div>
    );
  }
}

export default Root;
