// import React from "react";
// import Greeting from "./Questions/Ques1/Greeting";
// import UserCard from "./Questions/Ques2/UserCard";
// import Weather from "./Questions/Ques3/Weather";
// import Counter from "./Questions/Ques4/Counter";
// import TaskList from "./Questions/Ques5/TaskList";
// import Button from "./Questions/Ques6/Button";

// function App() {
//   const task = ["Eat", "Sleep", "Code", "Repeat"];
//   const data = [
//     {
//       name: "John",
//       email: "john123@gmail.com",
//       avatarURL:
//         "https://gravatar.com/avatar/ca3abb6cdeca9b8b59f02d5946c31731?s=400&d=robohash&r=x",
//     },
//     {
//       name: "doraemon",
//       email: "dora123@gmail.com",
//       avatarURL:
//         "https://robohash.org/98b7768c88d1ef0833cc56b2be08cf2c?set=set4&bgset=&size=400x400",
//     },
//   ];
//   const temp = [30, 10, -11];
//   return (
//     <div>
//       <h3>Question-1</h3>
//       <Greeting />
//       <br />
//       <h3>Question-2</h3>
//       <UserCard data={data} />
//       <br />
//       <h3>Question-3</h3>
//       <Weather temp={temp} />
//       <br />
//       <h3>Question-4</h3>
//       <Counter />
//       <br />
//       <h3>Question-5</h3>
//       <TaskList task={task} />
//       <br />
//       <h3>Question-6</h3>
//       <Button text="I am a Button!" colour="red" />
//     </div>
//   );
// }

// export default App;


import "./App.css";
import Counter from "./Assignment2/Ques1/Counter";
import LanguageSwitcher from "./Assignment2/Ques10/LanguageSwitcher";
import ShoppingCart from "./Assignment2/Ques11/ShoppingCart";
import VotingApplication from "./Assignment2/Ques12/VotingApplication";
import Parent from "./Assignment2/Ques13/Parent";
import TaskList from "./Assignment2/Ques14.jsx/TaskList";
import StudentList from "./Assignment2/Ques15/StudentList";
import EmployeeSalary from "./Assignment2/Ques16/EmployeeSalary";
import Component from "./Assignment2/Ques17/Component";
import UserName from "./Assignment2/Ques18/UserName";
import CountDownTimer from "./Assignment2/Ques19/CountDownTimer";
import PersonForm from "./Assignment2/Ques2/PersonForm";
import ToDoList from "./Assignment2/Ques3/ToDoList";
import RandomNumberGenerator from "./Assignment2/Ques4/RandomNumberGenerator";
import CounterWithStep from "./Assignment2/Ques5/CounterWithStep";
import Clock from "./Assignment2/Ques6/Clock";
import Notification from "./Assignment2/Ques7/Notification";
import Transition from "./Assignment2/Ques8/Transition";
import ThemeSwitcher from "./Assignment2/Ques9/ThemeSwitcher";

function App() {
  const tasks = ["Eat", "Sleep", "Repeat"];
  return (
    <div>
      <h3>Question-1</h3>
      <Counter />
      <hr />
      <h3>Question-2</h3>
      <PersonForm />
      <hr />
      <h3>Question-3</h3>
      <ToDoList />
      <hr />
      <h3>Question-4</h3>
      <RandomNumberGenerator />
      <hr />
      <h3>Question-5</h3>
      <CounterWithStep />
      <hr />
      <h3>Question-6</h3>
      <Clock />
      <hr />
      <h3>Question-7</h3>
      <Notification />
      <hr />
      <h3>Question-8</h3>
      <Transition />
      <h3>Question-9</h3>

      <ThemeSwitcher />

      <hr />
      <h3>Question-10</h3>

      <LanguageSwitcher />
      <hr />
      <hr />
      <h3>Question-11</h3>
      <ShoppingCart />
      <hr />
      <h3>Question-12</h3>
      <VotingApplication />
      <hr />
      <h3>Question-13</h3>
      <Parent />
      <hr />
      <h3>Question-14</h3>
      <TaskList tasks={tasks} />
      <hr />
      <h3>Question-15</h3>
      <StudentList />
      <hr />
      <h3>Question-16</h3>
      <EmployeeSalary />
      <hr />
      <h3>Question-17</h3>
      <Component />
      <hr />
      <h3>Question-18</h3>
      <UserName />
      <hr />

      <h3>Question-19</h3>
      <CountDownTimer />
    </div>
  );
}

export default App;
