import { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "salmon" : "gray"} onClick={onSelect} />;
}

function StarRating({ totalStars = 3 }) {
  const [selected, setSelected] = useState(0);

  return createArray(totalStars).map((n, i) => (
    <Star key={i} selected={selected > i} onSelect={() => setSelected(i + 1)} />
  ));
}

export default function Rating() {
  return (
    <div>
      <StarRating totalStars={5} />
    </div>
  );
}
