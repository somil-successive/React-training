// Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.

import React from "react";
import { useState, useEffect } from "react";

function Notification() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  });

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your message:"
        value={message}
        onChange={handleChange}
      />
      <p>{message}</p>
    </div>
  );
}

export default Notification;
