import React from "react";
import Card from "../Card/Card";
import Layout from "../Layout/Layout";
class WomenClothing extends React.Component {
  render(): React.ReactNode {
    return (
      <Layout>
        <Card categoryName={"women's clothing"} />
      </Layout>
    );
  }
}
export default WomenClothing;
