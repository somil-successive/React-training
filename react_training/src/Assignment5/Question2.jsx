// Implement error handling for the fetch request. Display an error message if the request fails and provide a way for the user to retry the request.

import React, { useEffect, useState } from "react";

const Question2 = () => {
  const [data, setData] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/uss")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Invalid api:", error);
      });
  }, [isButtonClicked]);

  const handleClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <div>
      <h3>Error Handling :</h3>
      {isButtonClicked ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      ) : null}

      <br />
      <button onClick={handleClick} disabled={isButtonClicked}>Fetch Data</button>
    </div>
  );
};

export default Question2;
