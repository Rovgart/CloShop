import React from "react";
import Card from "../Card/Card";
import Layout from "../Layout/Layout";
class Jewelery extends React.Component {
  render(): React.ReactNode {
    return (
      <Layout>
        <Card categoryName={"jewelery"}></Card>
      </Layout>
    );
  }
}
export default Jewelery;
