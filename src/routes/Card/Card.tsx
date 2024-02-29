import React from "react";
// import CardItem from "./CardItem";
import "./_card.scss";
import { useLoaderData } from "react-router-typesafe";

// type Product = {
//   id: number;
//   title: string;
//   image: string;
//   description: string;
//   price: string;
// };
type CardProps = {
  categoryName: string;
};

const Card: React.FC<CardProps> = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <article className="card__container">
      {/* {data?.map((data) => (
        <CardItem
          key={data.id}
          photo={data.image}
          productTitle={data.title}
          productDesc={data.description}
          productPrice={`$ ${data.price} `}
        />
      ))} */}
    </article>
  );
};

export default Card;
