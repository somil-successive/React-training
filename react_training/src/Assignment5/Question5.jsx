// Create a React component that fetches data from a public API (e.g., JSONPlaceholder) using Axios and displays it on the page.

import React, { useEffect, useState } from "react";
import axios from "axios";

function Question5() {
  const [data, setData] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  }, [isButtonClicked]);

  const handleClick = () => {
    setIsButtonClicked(true);
  };
  return (
    <div>
      <p>AXIOS GET:</p>
      <button onClick={handleClick} disabled={isButtonClicked}>
        Fetch Data
      </button>
      {isButtonClicked ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}

      <br />
    </div>
  );
}

export default Question5;
