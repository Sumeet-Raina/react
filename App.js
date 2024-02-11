import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "React");
//React functional component

const HeadingComponent = () => {
    return <h1>React functional component</h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
