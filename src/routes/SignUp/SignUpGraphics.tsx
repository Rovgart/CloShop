import React from "react";
import hoodie from "../../assets/SignUpSVG/clothes-svgrepo-com.svg";
import shirt from "../../assets/SignUpSVG/shirt-svgrepo-com.svg";
import pants from "../../assets/SignUpSVG/trousers-svgrepo-com.svg";
import ring from "../../assets/SignUpSVG/ring-svgrepo-com.svg";
import "./signup.scss";

class SignUpGraphics extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="SignUp__graphics_container">
        <div className="SignUp__graphics_content--1">
          <img src={hoodie} alt="" />
          <img src={ring} alt="" />
        </div>
        <div className="SignUp__graphics_content--2">
          <img src={shirt} alt="" />
          <img src={pants} alt="" />
        </div>
        <aside>
          <h1>CloShop</h1>
          <span>Join over 10.000 happy users.</span>
          <span>Unlock exclusive features by creating an account.</span>
        </aside>
      </div>
    );
  }
}
export default SignUpGraphics;
