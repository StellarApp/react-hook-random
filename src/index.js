import { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const TreesContext = createContext();

const trees = [
  { id: "1", type: "Maple" },
  { id: "2", type: "Red Oak" },
  { id: "3", type: "Ash" },
  { id: "4", type: "White Oak" },
  { id: "5", type: "Walnut" }
];

const rootElement = document.getElementById("root");

ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  rootElement
);
