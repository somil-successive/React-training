import logo from "./logo.svg";
import "./App.css";
import ControlledComponent from "./Assignment4/Ques1/ControlledComponent";
import ControlledForm from "./Assignment4/Ques2/ControlledForm";
import Parent from "./Assignment4/Ques3/Parent";
import Password from "./Assignment4/Ques4/Password";
import DropDown from "./Assignment4/Ques5/DropDown";
import ToDoList from "./Assignment4/Ques6/ToDoList";
import SearchFilter from "./Assignment4/Ques7/SearchFilter";
import TemperatureConverter from "./Assignment4/Ques8/TemperatureConverter";
import Routing from "./Assignment4/Ques9/Routing";
import Form from "./Assignment4/Ques10/Form";
import FormDialog from "./Assignment4/Ques11/FormDialog";
import DataTable from "./Assignment4/Ques12/DataTable";
import FormValidation from "./Assignment4/Ques13/FormValidation";
import FormSubmission from "./Assignment4/Ques14/FormSubmission";


function App() {
  return (
    <div>
      <h2>Question-1</h2>
      <ControlledComponent />
      <hr />
      <h2>Question-2</h2>
      <ControlledForm/>
      <hr />
      <h2>Question-3</h2>
      <Parent />
      <hr />
      <h2>Question-4</h2>
      <Password />
      <hr />
      <h2>Question-5</h2>
      <DropDown />
      <hr />
      <h2>Question-6</h2>
      <ToDoList />
      <hr />
      <h2>Question-7</h2>
      <SearchFilter />
      <hr />
      <h2>Question-8</h2>
      <TemperatureConverter />
      <hr />
      <h2>Question-9</h2>
      <Routing />
      <hr />
      <h2>Question-10</h2>
      <Form />
      <hr />
      <h2>Question-11</h2>
      <FormDialog />
      <hr />
      <h2>Question-12</h2>
      <DataTable />
      <br/><br/>
      <hr />
      <h2>Question-13</h2>
      <FormValidation />
      <hr />
      <h2>Question-14</h2>
      <FormSubmission />
    </div>
  );
}

export default App;