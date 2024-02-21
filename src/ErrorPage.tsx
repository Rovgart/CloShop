import React from "react";
class ErrorPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
          height: "100vh",
        }}
        className=""
      >
        <h1>Something goes wrong</h1>
        <p>Unexpected error has occured</p>
      </div>
    );
  }
}
export default ErrorPage;
