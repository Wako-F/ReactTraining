import React from "react";
import ReactDOM from "react-dom";
var currentYear = new Date().getFullYear();
ReactDOM.render(
  <div>
    <p> Created by Kunu </p>
    <p> &copy; {currentYear} </p>
  </div>,

  document.getElementById("root")
);
