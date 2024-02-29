import "./_buttons.scss";
import React from "react";
type SignInProps = {
  isOpenedHandler: () => void;
};
class SignInButton extends React.Component<SignInProps> {
  render(): React.ReactNode {
    return (
      <button className="header_button" onClick={this.props.isOpenedHandler}>
        Sign In
      </button>
    );
  }
}
export default SignInButton;
