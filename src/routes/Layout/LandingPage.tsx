import React, { useEffect } from "react";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import { useLoaderData } from "react-router-typesafe";
import "./_landing.scss";
type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: object;
  // other properties
};
const LandingPage: React.FC = () => {
  const product: Product = useLoaderData();
  console.log(product);
  return (
    <article className="landing__container">
      <section className="leftside__container">
        <div className="leftside__content">
          <h2>Outfit of the day</h2>
          <h1>All your styles are here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis debitis nostrum possimus officiis modi qui aspernatur
            iusto veritatis. Quae, inventore corporis ratione magnam alias
            voluptate.
          </p>
        </div>
        <div>
          <button>Buy now</button>
        </div>
        <div className="socialmedias__container">
          <CiInstagram />
          <CiFacebook />
          <BsSend />
        </div>
      </section>
      <section className="rightside__container">
        <picture>
          <img src={product?.image} alt="" />
        </picture>
        <aside>
          <div>{/* Lines and dots here */}</div>
          <div>{/* Clothes images here */}</div>
        </aside>
      </section>
    </article>
  );
};

export default LandingPage;
