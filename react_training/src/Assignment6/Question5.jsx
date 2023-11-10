// Implement a React component (UserProfile) that displays user profile information such as name, email, and phone number. Write tests to ensure that the user profile information is correctly displayed when the component receives user data as props.

import React from "react";

const UserProfile = ({ data }) => {
  const Info = data.map((value) => (
    <li>
      <p>Name: {value.name}</p>
      <p>Email: {value.email}</p>
      <p>Phone No. :{value.phone}</p>
    </li>
  ));

  return <div>{Info}</div>;
};

export default UserProfile;
