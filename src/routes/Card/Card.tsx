import React from "react";
import "./_card.scss";
import { useLoaderData } from "react-router-dom";
import CardItem from "./CardItem";

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

const Card: React.FC<CardProps> = ({ categoryName }) => {
  const data: Product[] = useLoaderData();
  console.log(data);

  return (
    <article className="card__container">
      {data?.map((item) => (
        <CardItem
          key={item.id}
          photo={item.image}
          productTitle={item.title}
          productDesc={item.description}
          productPrice={item.price}
        />
      ))}
    </article>
  );
};

export default Card;
