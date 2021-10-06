import ntc from "ntcjs";
import { useRef } from "react";

export default function InputStyle() {
  const letter = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    const letterVal = letter.current.value;
    const colorVal = color.current.value;
    const colorName = ntc.name(colorVal)[1];

    alert(`${letterVal} with color: ${colorName}`);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input ref={letter} type="text" placeholder="My message..." />
        <input ref={color} type="color" />
        <button>Okay</button>
      </form>
    </div>
  );
}
