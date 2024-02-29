import { Link } from "react-router-dom";
import "./_buttons.scss";
import React from "react";
class SignUpButton extends React.Component {
  render(): React.ReactNode {
    return (
      <button className="header_button" value={"SignUp"}>
        <Link to={"/SignUp/SignUp"}>Sign Up</Link>
      </button>
    );
  }
}
export default SignUpButton;
