import React from "react";
import Greeting from "./Questions/Ques1/Greeting";
import UserCard from "./Questions/Ques2/UserCard";
import Weather from "./Questions/Ques3/Weather";
import Counter from "./Questions/Ques4/Counter";
import TaskList from "./Questions/Ques5/TaskList";
import Button from "./Questions/Ques6/Button";

function App() {
  const task = ["Eat", "Sleep", "Code", "Repeat"];
  return (
    <div>
      <h3>Question-1</h3>
      <Greeting />
      <br />
      <h3>Question-2</h3>
      <UserCard
        name="John"
        email="john123@gmail.com"
        image="https://gravatar.com/avatar/ca3abb6cdeca9b8b59f02d5946c31731?s=400&d=robohash&r=x"
      />
      <br />
      <h3>Question-3</h3>
      <Weather value="-30" />
      <br />
      <h3>Question-4</h3>
      <Counter />
      <br />
      <h3>Question-5</h3>
      <TaskList task={task} />
      <br />
      <h3>Question-6</h3>
      <Button text="I am a Button!" colour="red" />
    </div>
  );
}

export default App;
