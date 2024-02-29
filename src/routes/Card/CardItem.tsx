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
      <section className="cardItem__container">
        <div className="product__desc">
          <h1>{productFinalForm}</h1>
          <p>{this.props.productDesc}</p>
        </div>
        <picture>
          <img src={this.props.photo} alt="" />
        </picture>
        <div className="product__price">
          <span className="card__price">{this.props.productPrice}</span>
        </div>
        <hr />
        <div className="buttons">
          <Buttons />
        </div>
      </section>
    );
  }
}
export default CardItem;
