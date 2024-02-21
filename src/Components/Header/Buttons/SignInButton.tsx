import "./_buttons.scss";
import React from "react";
type SignInProps = {
  isOpenedHandler: () => void;
};
class SignInButton extends React.Component<SignInProps> {
  constructor(props: any) {
    super(props);
  }
  render(): React.ReactNode {
    return <button onClick={this.props.isOpenedHandler}>Sign In</button>;
  }
}
export default SignInButton;
