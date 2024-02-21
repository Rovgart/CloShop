// App component

import Header from "../Components/Header/Header";
import HamburgerMenu from "../Components/HamburgerMenu/HamburgerMenu";
import React from "react";
interface AppState {
  isHamburgerMenuOpen: boolean;
}
class Root extends React.Component<{}, AppState> {
  constructor(props: {}) {
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

        {/* Other content */}
      </div>
    );
  }
}

export default Root;
