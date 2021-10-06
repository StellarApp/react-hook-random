import { useState, useEffect } from "react";

export default function FetchUsers() {
  {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://api.github.com/users")
        .then((res) => res.json())
        .then(setData);
    }, []);

    if (data) {
      return (
        <div>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
          <button onClick={() => setData([])}>Remove Data</button>
        </div>
      );
    }
  }
}
