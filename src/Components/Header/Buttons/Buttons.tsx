import React from "react";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import "./_buttons.scss";
class Buttons extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="buttons">
        <SignInButton />
        <SignUpButton />
      </div>
    );
  }
}
export default Buttons;
