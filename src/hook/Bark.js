import { useReducer } from "react";

const initialState = {
  message: "Hello"
};

function reducer(state, action) {
  switch (action.type) {
    case "Mandoo":
      return {
        message: "grrffooowl!"
      };
    case "Doobu":
      return {
        message: "Woof woof"
      };
    default:
      return {
        message: ".... meong?!"
      };
  }
}

export default function Bark() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "Mandoo" })}>Mandoo</button>
      <button onClick={() => dispatch({ type: "Doobu" })}>Doobu</button>
    </div>
  );
}
