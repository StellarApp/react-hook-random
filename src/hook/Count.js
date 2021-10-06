import { useReducer } from "react";

export default function Count() {
  const [number, setNumber] = useReducer((number, add) => number + add, 10);
  return <h1 onClick={() => setNumber(5)}>{number}</h1>;
}
