import React, { useEffect, useState } from "react";
import CollectionCardItem from "./CollectionCardItem";
import "../_landing.scss";

interface cardType {
  id: number;
  image: string;
}
const CollectionCards: React.FC<cardType> = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  const [cardColl, setCardColl] = useState<cardType[]>([]);
  const [imageArray, setImageArray] = useState<[]>([]);

  useEffect(() => {
    const fetchCard = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const cardProduct: cardType[] = await response.json();
      if (response.ok) {
        setCardColl(cardProduct);
      }
    };
    fetchCard();
  }, []);
  const imageArr: string[] = [];
  const imageFc = function () {
    cardColl.forEach((object) => {
      const { image } = object;
      imageArr.push(image);
    });
    return imageArr;
  };
  imageFc();
  console.log(imageArr);
  console.log(imageArr[0]);
  return (
    <>
      <div className="newcollection__card_item--1">
        <div className="newcollection__card_desc">
          <h1>Stylish Round </h1>
          <h1>Colorfull Glass</h1>
          <span>Costam</span>
          <picture>
            <img src={`${imageArr[0]}`} alt="" />
          </picture>
        </div>
        <div>
          <div>
            <h1>Couple on </h1>
            <h1>The Gio</h1>
            <span>Costam</span>
            <picture>
              <img src={`${imageArr[1]}`} alt="" />
            </picture>
          </div>
        </div>
      </div>
      <div className="newcollection__card_item--2">
        <div className="newcollection__card_desc">
          <h1>Stylish Round </h1>
          <h1>Colorfull Glass</h1>
          <span>Costam</span>
          <picture>
            <img src={`${imageArr[2]}`} alt="" />
          </picture>
        </div>
        <div>
          <div>
            <h1>Couple on </h1>
            <h1>The Gio</h1>
            <span>Costam</span>
            <picture>
              <img src={`${imageArr[3]}`} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionCards;
