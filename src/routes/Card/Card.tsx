import React, { useEffect, useState } from "react";
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
  const data = useLoaderData();
  async function showData() {
    console.log(data);
  }
  showData();
  // useEffect(() => {
  //   const dataFetcher = async (category: string) => {
  //     const response = await fetch(
  //       `https://fakestoreapi.com/products/category/${category}`
  //     );
  //     const data = await response.json();
  //     if (response.ok) {
  //       setDat(data);
  //     }
  //   };
  //   dataFetcher("electronics");
  // }, []);
  // console.log(dat);

  return (
    <article className="card__container">
      {data &&
        data.map((item) => (
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
