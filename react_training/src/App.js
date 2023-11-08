import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Question1 from "./Assignment5/Question1";
import Question2 from "./Assignment5/Question2";
import Question3 from "./Assignment5/Question3";
import Question4 from "./Assignment5/Question4";
import Question5 from "./Assignment5/Question5";
import Question6 from "./Assignment5/Question6";
import Question7 from "./Assignment5/Question7";
import Sample from "./Assignment5/Ques12/Sample";
import FetchData from "./Assignment5/Ques8/FetchData";

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
    <hr/>
    <h2>Question-6</h2>
    <Question6 />
    <hr/>
    <h2>Question-7</h2>
    <Question7 />
    <hr/>
    <h2>Question-8</h2>
    <FetchData/>
    <hr/>
    <h2>Question-12</h2>
    <Sample/>
    
    </div>
  )
}

export default App;