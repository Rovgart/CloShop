import React from "react";
import "./_hamburger_menu.scss";
import { Link } from "react-router-dom";
interface HamMenuState {
  categoryName: string[] | null;
}
class HamburgerMenu extends React.Component<object, HamMenuState> {
  constructor(props: object) {
    super(props);
    this.state = {
      categoryName: null,
    };
  }
  componentDidMount(): void {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => this.setState({ categoryName: data }));
  }
  render(): React.ReactNode {
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
  }
}
export default HamburgerMenu;
