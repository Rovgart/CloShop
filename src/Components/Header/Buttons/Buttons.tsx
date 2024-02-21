import React from "react";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import "./_buttons.scss";
import SignUpForm from "../../Forms/SignInForm";
type ModalState = {
  IsOpened: boolean;
};
class Buttons extends React.Component<{}, ModalState> {
  state: ModalState = {
    IsOpened: false,
  };
  openToggleHandler = () => {
    this.setState((prevState) => ({
      IsOpened: !prevState.IsOpened,
    }));
  };

  render(): React.ReactNode {
    return (
      <div className="buttons">
        <SignInButton isOpenedHandler={this.openToggleHandler} />
        {this.state.IsOpened && <SignUpForm />}
        <SignUpButton />
      </div>
    );
  }
}
export default Buttons;
