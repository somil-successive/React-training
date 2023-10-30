// Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.

import React from "react";

function UserCard(props) {
  const { name, email, image } = props;
  return (
    <div>
      <p>My name is {name}</p>
      <p>My email id is {email}</p>
      <img src={image} />
    </div>
  );
}

export default UserCard;
