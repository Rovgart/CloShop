import React, { ReactNode } from "react";
import "./_hamburger_menu.scss";
import { Link, useLoaderData } from "react-router-dom";
interface HamMenuProps {
  data: string[];
  props: ReactNode;
}
const HamburgerMenu: React.FC<HamMenuProps> = (props: HamMenuProps) => {
  const data: string[] = useLoaderData();
  return (
    <div className={`hamburger__menu ${!props ? "hidden" : ""}`}>
      <h1 className="hamburger__menu--logo">CloShop</h1>
      <ul className="hamburger__menu_content">
        {data &&
          data.map((category, index) => (
            <li key={index}>
              <Link to={`/Categories/${category}`}>{category}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default HamburgerMenu;
