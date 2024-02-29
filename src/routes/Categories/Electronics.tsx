import React from "react";
import Card from "../Card/Card";
import Layout from "../Layout/Layout";
class Electronics extends React.Component {
  render(): React.ReactNode {
    return (
      <Layout>
        <Card categoryName={"electronics"} />
      </Layout>
    );
  }
}
export default Electronics;
