import React from "react";
import "./_hamburger_menu.scss";
interface HamMenuState {
  categoryName: string[] | null;
}
class HamburgerMenu extends React.Component<{}, HamMenuState> {
  constructor(props: boolean) {
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
        <ul className="hamburger__menu_content">
          {categoryName &&
            categoryName.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
        </ul>
      </div>
    );
  }
}
export default HamburgerMenu;
