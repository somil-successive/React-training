// Implement error handling for the fetch request. Display an error message if the request fails and provide a way for the user to retry the request.

import React, { useEffect, useState } from "react";

const Question2=()=>{
const [data,setData]=useState([]);

useEffect(() => {
    fetch('https://musicapi13.p.rapidapi.com/public/search/introspection')
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
        console.error("Error fetching data:", error);
       
      });
  }, []);


  return (
    <div>
      <ul>
        {data.map((user,index) => (
          <li key={index}>{user.sources}</li>
        ))}
      </ul>
    </div>
  );
}

export default Question2;