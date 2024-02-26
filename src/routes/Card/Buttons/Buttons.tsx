import React from "react";
import ToCartButton from "./ToCartButton";
import BuyNow from "./BuyNow";
import "./_buttons.scss";
class Buttons extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="buttons">
        <ToCartButton />
        <BuyNow />
      </div>
    );
  }
}
export default Buttons;
