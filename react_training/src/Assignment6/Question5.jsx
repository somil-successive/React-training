// Implement a React component (UserProfile) that displays user profile information such as name, email, and phone number. Write tests to ensure that the user profile information is correctly displayed when the component receives user data as props.

import React from "react";

const UserProfile = (props) => {
  const { name, email, phone } = props;
  return (
    <>
      <p data-testid="name">{name}</p>
      <p data-testid="email">{email}</p>
      <p data-testid="phone">{phone}</p>
    </>
  );
};

export default UserProfile;
