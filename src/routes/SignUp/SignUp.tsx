import React from "react";
import "./signup.scss";
import SignUpHeader from "./SignUpHeader";
import SignUpForm from "./SignUpForm";
import SignUpFooter from "./SignUpFooter";
import SignUpGraphics from "./SignUpGraphics";
class SignUp extends React.Component {
  render(): React.ReactNode {
    return (
      <main>
        <section className="left__side_section">
          <SignUpHeader />
          <SignUpForm />
          <SignUpFooter />
        </section>
        <section className="right__side_section">
          <SignUpGraphics />
        </section>
      </main>
    );
  }
}
export default SignUp;
