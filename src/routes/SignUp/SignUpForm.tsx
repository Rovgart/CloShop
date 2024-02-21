import React from "react";
import "./signup.scss";
type SignUpProps = {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
  number: number;
  zipcode: number;
  phone: number;
};
class SignUpForm extends React.Component<{}, SignUpProps> {
  render(): React.ReactNode {
    return (
      <form id="SignUpForm">
        <fieldset>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Street</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Number</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="">Zip Code</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input type="text" />
          </div>
          <input type="submit" value="Get Started" />
        </fieldset>
      </form>
    );
  }
}
export default SignUpForm;
