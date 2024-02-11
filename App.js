import React from "react";
import ReactDOM from "react-dom/client";

// title is a react component
const Title = () => (
  <h1 className="head" tabIndex="5">
    react using JSX
  </h1>
);
//React functional component
const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <Title />
      <Title></Title>
      <h1>React functional component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
