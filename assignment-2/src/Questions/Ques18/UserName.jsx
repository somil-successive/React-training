import React from "react";
import UseLocalStorage from "./UseLocalStorage";

function UserName() {
  const [name, setName, deleteName] = UseLocalStorage("name", "");

  return (
    <div>
      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={deleteName}>Clear Name</button>
    </div>
  );
}

export default UserName;
