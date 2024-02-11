import React from "react";
import ReactDOM from "react-dom/client";

// title is a react element
const title = (
  <h1 className="head" tabIndex="5">
    react using JSX
  </h1>
);
//React functional component
const HeadingComponent = () => {
  return (
    <div id="container">
      {title}
      <h1>React functional component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
