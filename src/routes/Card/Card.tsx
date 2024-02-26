import React from "react";
import CardItem from "./CardItem";
import "./_card.scss";
type CategoryState = {
  data: Product[];
};

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  price: string;
};

type CardProps = {
  categoryName: string;
};

class Card extends React.Component<CardProps, CategoryState> {
  state: CategoryState = {
    data: [],
  };
  fetchingProducts = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${this.props.categoryName}`
      );

      if (!response.ok) {
        throw new Error(`Something gone wrong ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      this.setState({ data });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount(): void {
    this.fetchingProducts();
  }

  render(): React.ReactNode {
    return (
      <article>
        {this.state.data.map((data) => (
          <CardItem
            key={data.id}
            photo={data.image}
            productTitle={data.title}
            productDesc={data.description}
            productPrice={`${data.price} $`}
          />
        ))}
      </article>
    );
  }
}

export default Card;
