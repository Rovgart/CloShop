import React, { ReactNode } from "react";
import "./_hamburger_menu.scss";
import { Link, useLoaderData } from "react-router-dom";
interface HamMenuState {
  categoryName: string[] | null;
}
const HamburgerMenu = ({ children }: { children: ReactNode }) => {
  const data = useLoaderData();
  const { categoryName } = this.state;
  return (
    <div className={`hamburger__menu ${!this.props ? "hidden" : ""}`}>
      <h1 className="hamburger__menu--logo">CloShop</h1>
      <ul className="hamburger__menu_content">
        {categoryName &&
          categoryName.map((category, index) => (
            <li key={index}>
              <Link to={`/Categories/${category}`}>{category}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default HamburgerMenu;
