import React, { ReactNode, useEffect, useState } from "react";
import "./_hamburger_menu.scss";
import { Link, useLoaderData } from "react-router-dom";
interface HamMenuProps {
  categories: string[];
  props: ReactNode;
}
const HamburgerMenu: React.FC<HamMenuProps> = (props: HamMenuProps) => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const categoriesFetcher = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data: string[] = await response.json();
        if (response.ok) {
          console.log("Succesfully returned data");
          console.log(data);

          setCategories(data);
        }
      } catch (error) {
        throw new Error(error.message);
      }
    };
    categoriesFetcher();
  }, []);
  return (
    <div className={`hamburger__menu ${!props ? "hidden" : ""}`}>
      <h1 className="hamburger__menu--logo">CloShop</h1>
      <ul className="hamburger__menu_content">
        {categories &&
          categories.map((category, index) => (
            <li key={index}>
              <Link to={`/Categories/${category}`}>{category}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default HamburgerMenu;
