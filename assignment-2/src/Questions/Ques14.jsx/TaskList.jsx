// create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.

import React, { useCallback, useState } from "react";

function TaskList({ tasks }) {
  const [statuses, setStatuses] = useState("");

  const handleClick = useCallback((index) => {
    setStatuses((prevStatuses) => {
      const updatedStatuses = [...prevStatuses];
      updatedStatuses[index] = "Completed";
      return updatedStatuses;
    });
  }, []);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => handleClick(index)}>Complete</button>
          <p>{statuses[index]}</p>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
