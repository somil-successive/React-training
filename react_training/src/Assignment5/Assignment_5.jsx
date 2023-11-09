import React from "react";

import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question5 from "./Question5";
import ApolloProvider1 from "./Question8.1";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question4 from "./Question4";
import ApolloProvider2 from "./Question9.1";
import Sample from "./Question12.2";
import LogEvents from "../Assignment5/Question15.2";

import CustomModal from "./Question13.1";
import LoginQuesFourTeen from "./Question14.2";
import FetchAndDisplayData from "./Question16.2";
const Assignment_5 = () => {
  return (
    <div>
      <h2>Question-1</h2>
      <Question1 />
      <hr />
      <h2>Question-2</h2>
      <Question2 />
      <hr />
      <h2>Question-3</h2>
      <Question3 />
      <hr />

      <h2>Question-4</h2>
      <Question4 />
      <hr />
      <h2>Question-5</h2>
      <Question5 />
      <hr />
      <h2>Question-6</h2>
      <Question6 />
      <hr />
      <h2>Question-7</h2>
      <Question7 />
      <hr />
      <h2>Question-8</h2>
      <ApolloProvider1 />
      <hr />
      {/* <h2>Question-9</h2>
        < ApolloProvider2/>  */}
      <hr />
      <h2>Question-12</h2>
      <Sample />
      <hr />
      <h2>Question-13</h2>
      <CustomModal />
      <hr />
      <h2>Question-14</h2>
      <LoginQuesFourTeen />
      <hr />
      <h2>Question-15</h2>
      <LogEvents />
      <hr />
      <h2>Question-16</h2>
      <FetchAndDisplayData />
    </div>
  );
};

export default Assignment_5;
