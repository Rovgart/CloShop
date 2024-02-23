import React from "react";
import CardItem from "./CardItem";
type categoryState = {
  data: object;
};
class Card extends React.Component {
  state: categoryState = {
    data: [],
  };
  fetchingProducts = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      if (!response.ok) {
        console.log(`Something gone wrong ${response.status}`);
      }
      const data = response.json();
      console.log(data);
    } catch (error) {
      throw new Error();
    }
  };
  render(): React.ReactNode {
    return <>{this.state.data.map((data) => {})}</>;
  }
}
export default Card;
