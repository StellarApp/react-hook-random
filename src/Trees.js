import { useContext } from "react";
import { TreesContext } from "./";

export default function Trees() {
  const { trees } = useContext(TreesContext);
  return (
    <div>
      <h1> Trees I have </h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
}
