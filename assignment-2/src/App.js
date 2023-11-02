import logo from "./logo.svg";
import "./App.css";
import Counter from "./Questions/Ques1/Counter";
import PersonForm from "./Questions/Ques2/PersonForm";
import RandomNumberGenerator from "./Questions/Ques4/RandomNumberGenerator";
import CounterWithStep from "./Questions/Ques5/CounterWithStep";
import Clock from "./Questions/Ques6/Clock";
import Notification from "./Questions/Ques7/Notification";
import LanguageSwitcher from "./Questions/Ques10/LanguageSwitcher";
import ThemeSwitcher from "./Questions/Ques9/ThemeSwitcher";
import VotingAppliction from "./Questions/Ques12/VotingApplication";
import Parent from "./Questions/Ques13/Parent";
import TaskList from "./Questions/Ques14.jsx/TaskList";
import ShoppingCart from "./Questions/Ques11/ShoppingCart";
import ToDoList from "./Questions/Ques3/ToDoList";
import StudentList from "./Questions/Ques15/StudentList";
import EmployeeSalary from "./Questions/Ques16/EmployeeSalary";
import Transition from "./Questions/Ques8/Transition";
import CountDownTimer from "./Questions/Ques19/CountDownTimer";
import UserName from "./Questions/Ques18/UserName";
import Component from "./Questions/Ques17/Component";

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
      <VotingAppliction />
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
