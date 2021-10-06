import ntc from "ntcjs";
// import { useState } from "react";
import { useInput } from "./useInput";

export default function InputStyle() {
  // const [letter, setLetter] = useState("");
  // const [color, setColor] = useState("#000000");
  const [letterProps, resetLetter] = useInput("");
  const [colorProps, resetColor] = useInput("#00000");

  const submit = (e) => {
    e.preventDefault();
    const colorName = ntc.name(colorProps.value)[1];

    alert(`${letterProps.value} with color: ${colorName}`);
    resetLetter("");
    resetColor("#000000");
  };

  // const onChange = (e) => {
  //   const { name, value } = e.target;

  //   if (name === "letter") {
  //     setLetter(value);
  //   } else if (name === "color") {
  //     setColor(value);
  //   }
  // };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          // value={letter}
          {...letterProps}
          type="text"
          name="letter"
          placeholder="My message..."
          // onChange={onChange}
        />
        <input
          {...colorProps}
          // value={color}
          type="color"
          name="color"
          // onChange={onChange}
        />
        <button>Okay</button>
      </form>
    </div>
  );
}
