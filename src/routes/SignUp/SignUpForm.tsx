import React from "react";
import "./signup.scss";
type User = {
  id: number;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
  number: string;
  zipcode: string;
  phone: string;
};
type SignUpProps = {
  form: {
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    city: string;
    street: string;
    number: string;
    zipcode: string;
    phone: string;
  };
  areFilled: boolean;
  userLocation?: object | null;
  users: User[];
};
class SignUpForm extends React.Component<object, SignUpProps> {
  state: SignUpProps = {
    form: {
      email: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      city: "",
      street: "",
      number: "",
      zipcode: "",
      phone: "",
    },
    areFilled: false,
    userLocation: null,
    users: [],
  };
  // Geolocation adding
  private geolocationHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        this.setState({ userLocation: { latitude, longitude } });
      });
    }
    (error: Error) => {
      console.error("Error getting user location:", error);
    };
  };
  // Handling inputs changing state (values)
  private handleInputChange = (
    stateName: keyof SignUpProps["form"],
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [stateName]: event.target.value,
      },
    }));
  };
  // Checking if form inputs are empty
  private fieldChecker = () => {
    for (const value of Object.values(this.state.form)) {
      if (value.length == 0) {
        alert(`Please fill the all fields`);
        return;
      }
    }
    this.setState((prevState) => ({ areFilled: !prevState }));
  };
  // Fetching function
  private fetchingMethod = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.form.email,
          username: this.state.form.username,
          password: this.state.form.password,
          name: {
            firstname: this.state.form.firstname,
            lastname: this.state.form.lastname,
          },
          address: {
            city: this.state.form.city,
            street: this.state.form.street,
            number: this.state.form.number,
            zipcode: this.state.form.zipcode,
            geolocation: {
              lat: this.state.userLocation,
              long: this.state.userLocation,
            },
          },
          phone: this.state.form.phone,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP Error, Status: ${response.status}`);
      }

      const user = await response.json();

      // Update state with the new user data
      this.setState((prevState) => ({
        ...prevState,
        users: [...prevState.users, user],
      }));
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };
  // Form submit handler
  private submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    this.fieldChecker();
    if (this.state.areFilled) {
      this.geolocationHandler(); // Wait for geolocation
      this.fetchingMethod(); // Wait for API call
      console.log("Form was successfully created");
      console.log(this.state.users); // Now, log the users array
    }
    console.log("Form was successfully created");
  };
  render(): React.ReactNode {
    return (
      <form onSubmit={this.submitHandler} id="SignUpForm">
        <fieldset>
          <div>
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => this.handleInputChange("email", e)}
              value={this.state.form.email}
              name="email"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="">Username</label>
            <input
              onChange={(e) => this.handleInputChange("username", e)}
              value={this.state.form.username}
              name="username"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              onChange={(e) => this.handleInputChange("password", e)}
              value={this.state.form.password}
              name="password"
              type="password"
            />
          </div>
          <div>
            <label htmlFor="">First Name</label>
            <input
              onChange={(e) => this.handleInputChange("firstname", e)}
              value={this.state.form.firstname}
              name="firstname"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              onChange={(e) => this.handleInputChange("lastname", e)}
              value={this.state.form.lastname}
              name="lastname"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input
              onChange={(e) => this.handleInputChange("city", e)}
              value={this.state.form.city}
              name="city"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Street</label>
            <input
              onChange={(e) => this.handleInputChange("street", e)}
              value={this.state.form.street}
              name="street"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Number</label>
            <input
              onChange={(e) => this.handleInputChange("number", e)}
              value={this.state.form.number}
              name="number"
              type="number"
            />
          </div>
          <div>
            <label htmlFor="">Zip Code</label>
            <input
              onChange={(e) => this.handleInputChange("zipcode", e)}
              value={this.state.form.zipcode}
              name="zipcode"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <input
              onChange={(e) => this.handleInputChange("phone", e)}
              value={this.state.form.phone}
              name="phone"
              type="text"
            />
          </div>
          <input type="submit" value="Get Started" />
        </fieldset>
      </form>
    );
  }
}
export default SignUpForm;
