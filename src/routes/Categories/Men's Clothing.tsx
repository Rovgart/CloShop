import React from "react";
import Card from "../Card/Card";
import Layout from "../Layout/Layout";
class Mens_Clothing extends React.Component {
  render(): React.ReactNode {
    return (
      <Layout>
        <Card categoryName={"men's clothing"} />
      </Layout>
    );
  }
}
export default Mens_Clothing;
