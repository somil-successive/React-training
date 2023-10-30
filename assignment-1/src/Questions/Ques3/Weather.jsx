// Create a functional component named Weather that accepts a prop called temperature (a number).
// Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
// Import and render the Weather component in the App component with different temperature values.

import React from "react";

function Weather(props) {
  let displayMsg = "";

  if (parseFloat(props.value) > 25) {
    displayMsg = "It's sunny today!";
  } else if (parseFloat(props.value) < 10) {
    displayMsg = "It's cold today!";
  }

  return (
    <div>
      <h2>{displayMsg}</h2>
    </div>
  );
}

export default Weather;
