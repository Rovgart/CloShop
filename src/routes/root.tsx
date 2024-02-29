// App component
import React from "react";
import Layout from "./Layout/Layout";
import LandingPage from "./Layout/LandingPage";
import "./Layout/_landing.scss";
class Root extends React.Component {
  render() {
    return (
      <Layout>
        <LandingPage />
      </Layout>
    );
  }
}

export default Root;
