import React from "react";
import Modal from "../Modal/Modal";
import "./_signupform.scss";
type MyState = {
  email: string;
  password: string;
  isValid: false;
};
class SignInForm extends React.Component {
  state: MyState = {
    email: "",
    password: "",
    isValid: false,
  };
  emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };
  passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  };
  componentDidMount(): void {
    const init = setTimeout(() => {
      if (this.state.email.includes("@") && this.state.password.length > 3) {
        this.setState({ isEmailValid: true, isPasswordValid: true });
      }
      return () => {
        clearTimeout(init);
      };
    }, 3000);

    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: "John@gmail.com",
        username: "johnd",
        password: "m38rmF$",
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
  render(): React.ReactNode {
    return (
      <Modal>
        <form id="SignInForm" action="">
          <div>
            <label htmlFor="">Email</label>
            <input
              onChange={this.emailHandler}
              value={this.state.email}
              type="email"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              onChange={this.passwordHandler}
              value={this.state.password}
              type="password"
            />
          </div>
          <input
            className={`${this.state.isValid ? "" : "hidden"}`}
            type="submit"
            value="Sign In"
          />
        </form>
      </Modal>
    );
  }
}
export default SignInForm;
