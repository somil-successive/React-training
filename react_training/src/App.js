import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Question1 from "./Assignment5/Question1";
import Question2 from "./Assignment5/Question2";
import Question3 from "./Assignment5/Question3";
import Question4 from "./Assignment5/Question4";
import Question5 from "./Assignment5/Question5";

 function App(){
  return(
    <div>
    <h2>Question-1</h2>
    <Question1 />
    <hr/>
    <h2>Question-2</h2>
    <Question2 />
    <hr/>
    <h2>Question-3</h2>
    <Question3 />
    <hr/>
    <h2>Question-4</h2>
    {/* <Question4 /> */}
    <hr/>
    <h2>Question-5</h2>
    <Question5 />
    
    </div>
  )
}

export default App;