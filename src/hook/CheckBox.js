import { useReducer } from "react";

export default function CheckBox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  return (
    <div>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "paid" : "Not paid"}
    </div>
  );
}
