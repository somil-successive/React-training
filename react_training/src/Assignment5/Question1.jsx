// Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.

import React, { useState, useEffect } from "react";

function Question1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Question1;
