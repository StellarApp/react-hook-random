import { useContext } from "react";
import { TreesContext } from "./";

export default function Trees() {
  const result = useContext(TreesContext);
  console.log(result);
  return <div>tree</div>;
}
