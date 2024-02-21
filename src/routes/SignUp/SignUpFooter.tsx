import React from "react";
class SignUpFooter extends React.Component {
  render(): React.ReactNode {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>
          Already have an account <a href="">login</a>
        </span>
        <span>©2024 CloShop. All rights reserved</span>
      </div>
    );
  }
}
export default SignUpFooter;
