import { useState, useEffect } from "react";

export default function Winner() {
  const [name, setName] = useState("Stella");
  const [user, setUser] = useState(false);

  useEffect(() => {
    document.title = `Celebrate ${name}`;
    console.log(`Celebrate ${name}`);
  }, [name]); // call anytime name changes

  useEffect(() => {
    console.log(`The user is: ${user ? "Log in" : "Not logged in"}.`);
  }, [user]); // call anytime user changes

  return (
    <section>
      <p>Congrat, {name}!</p>
      <button onClick={() => setName("Mandoo")}>Change the winner</button>
      <p>
        <button onClick={() => setUser(true)}>
          {user ? "Log In" : "Not logged in"}
        </button>
      </p>
    </section>
  );
}
