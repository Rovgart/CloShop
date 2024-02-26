import React from "react";
import "./_card.scss";
type CardProps = {
  photo: string;
  productTitle: string;
  productDesc: string;
  productPrice: string;
};
import Buttons from "./Buttons/Buttons";
class CardItem extends React.Component<CardProps> {
  render(): React.ReactNode {
    const { productTitle } = this.props;
    const productTitleSplitted = productTitle.split(" ");
    const productTitleReformatted = productTitleSplitted.slice(-4);
    const productFinalForm = productTitleReformatted.join(" ");

    return (
      <section>
        <picture>
          <img src={this.props.photo} alt="" />
        </picture>
        <div>
          <h1>{productFinalForm}</h1>
          <p>{this.props.productDesc}</p>
        </div>
        <div>
          <span>{this.props.productPrice}</span>
        </div>
        <div>
          <Buttons />
        </div>
      </section>
    );
  }
}
export default CardItem;
