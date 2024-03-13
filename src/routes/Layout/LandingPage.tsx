import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import "./_landing.scss";
import { useLoaderData } from "react-router-dom";
// type Product = {
//   id: number;
//   title: string;
//   image: string;
//   price: number;
//   category: string;
//   description: string;
//   rating: object;
//   // other properties
// };
const LandingPage: React.FC = () => {
  const product = useLoaderData();
  return (
    <article className="landing__container">
      <section className="leftside__container">
        <div className="leftside__content">
          <div className="leftside__content_text">
            <h3>Outfit of the day</h3>
            <h2>All your </h2>
            <h1>styles are here</h1>
          </div>
          <p className="leftside__content_text--desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis debitis nostrum possimus officiis modi qui aspernatur
            iusto veritatis. Quae, inventore corporis ratione magnam alias
            voluptate.
          </p>
          <div className="leftside__content_button">
            <button>Buy now</button>
          </div>
        </div>
      </section>
      <section className="rightside__container">
        <picture>
          <img src={product.image} alt="" />
        </picture>
        <aside>
          <div>{/* Lines and dots here */}</div>
          <div>{/* Clothes images here */}</div>
        </aside>
      </section>
      <section className="socialmedias__container">
        <CiInstagram size={"3rem"} />
        <CiFacebook size={"3rem"} />
        <BsSend size={"3rem"} />
      </section>
    </article>
  );
};

export default LandingPage;
