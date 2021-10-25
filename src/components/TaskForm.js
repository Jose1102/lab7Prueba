import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useData } from "../providers/DataProvider";

export const TaskForm = () => {
  const history = useHistory();
  const { data, setData } = useData();
  const { taskId } = useParams();
  const task = data.tasks.find((task) => task.id === taskId);
  //const [ checked, setChecked] = useData();

  const [text, setText] = useState(task.name);
  const tasks = data.tasks;
  console.log("ebr : "+JSON.stringify(tasks))
  console.log("tarea : "+JSON.stringify(task))
  if (!task) {
    return <div>Task not found</div>;
  }

  const handleChange = (e) => {
    const inputName = e.target.value;

    setText(inputName);
  };

  const handleSave = () => {
    const newTasks = data.tasks.map((task) => {
      if (task.id === taskId) {
        console.log("exite la tarea ya")
        return { ...task, name: text };
      }

      return task;
    });

    setData((prev) => ({ ...prev, tasks: newTasks }));

    history.goBack();
  };

  const handleChanges = (index) => () => {
    const newTasks = tasks.map((task, i) => {
      
      if (i === index) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      
      return task;
    });

    setData(() => ({ ...data, tasks: newTasks }));
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Task Name"
        value={text}
        onChange={handleChange}
      />
      <input type="checkbox" checked={task.isCompleted} onChange={handleChanges(taskId-1)}  />

      <button type="button" onClick={handleSave}>
        Save
      </button>
    </form>
  );
};
