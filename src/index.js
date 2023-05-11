//Create a react app from scratch.
import React from "react";

import ReactDOM from "react-dom";

const YourName = "Ty";

const CurrentYear = new Date();

//It should display 2 paragraph HTML elements.
ReactDOM.render(
  <div>
    <p> Created by {YourName}</p>
    <p> Copywrite {CurrentYear.getFullYear()} </p>
  </div>,

  document.getElementById("root")
);
