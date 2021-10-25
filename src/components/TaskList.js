import { useState } from "react";
import { useData } from "../providers/DataProvider";
import { TaskItem } from "./TaskItem";
import Card from "./Card"
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Paper, Typography, TextField, Button } from '@material-ui/core'


const useStyles = makeStyles(theme =>({
    
  container : {
    minWidth : "350px",
    margin : "1em",
    boxSizing : "content-box",
    

  },
  input : {
    minWidth : "200px",
    margin : "1em",
    boxSizing : "content-box",
  },
  button : {
    minWidth : "50px",
    margin : "1em",
    boxSizing : "content-box",
  }
}))

export const TaskList = () => {
  const classes = useStyles()
  const { data, setData } = useData();
  const temp = data.tasks;
  const longitud = temp.length;
  
  
  const [textValue, setTextValue] = useState("");
  const [descriptonText, setDescriptionText] = useState("");
  const [assginedText, setAssginedText] = useState("");
  const [dueDateText, setDueDateText] = useState("");
  const [statusText, setStatusText] = useState("");
  const [lenght, setLenght] = useState(longitud);



  const tasks = data.tasks;

  const handleTaskChange = (index) => () => {
    
    const newTasks = tasks.map((task, i) => {
      console.log("task "+JSON.stringify(task))
      console.log("i "+i)
      console.log("index : "+index)
      if (i === index) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      
      return task;
    });

    setData(() => ({ ...data, tasks: newTasks }));
  };

  const newTask = (name,description,assignedTo,dueDate,status) => {
    
    console.log("la longitud del data es: "+lenght)
    const valor = lenght+1;
    const newTask = {
      id : valor,
      name : name,
      description : description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status
    };
    setData((prev) => ({ ...prev, tasks: [...tasks, newTask] }));
    setLenght(valor)
    

  };

  const handleSubmit = () => {
    newTask(textValue,descriptonText,assginedText,dueDateText,statusText);
    //setTextValue("")

  };

  const handleTextChange = (event) => {
    if(event.target.name=="tarea"){
      const value = event.target.value;
      setTextValue(value);
    }
    if(event.target.name=="description"){
      const value = event.target.value;
      setDescriptionText(value);
    }
    if(event.target.name=="assignedTo"){
      const value = event.target.value;
      setAssginedText(value);
    }
    if(event.target.name=="dueDate"){
      const value = event.target.value;
      setDueDateText(value);
    }
    if(event.target.name=="status"){
      const value = event.target.value;
      setStatusText(value);
    }


    
    
  };

  console.log("tareas! : "+JSON.stringify(temp))


  return (
    <article>
      <form className={classes.container} >
        <input
          value={textValue}
          onChange={handleTextChange}
          type="text"
          placeholder="Task name"
          name="tarea"
          className={classes.input}
        />
        <input
          value={descriptonText}
          onChange={handleTextChange}
          type="text"
          placeholder="Description"
          name="description"
          className={classes.input}
        />
        <input
          value={assginedText}
          onChange={handleTextChange}
          type="text"
          placeholder="Assigned To"
          name="assignedTo"
          className={classes.input}
        />
        <input
          value={dueDateText}
          onChange={handleTextChange}
          type="text"
          placeholder="Due Date"
          name="dueDate"
          className={classes.input}
        />
        <input
          value={statusText}
          onChange={handleTextChange}
          type="text"
          placeholder="Status"
          name="status"
          className={classes.entrada}
        />
        <button type="button" onClick={handleSubmit} className={classes.button}>Create Task</button>
      </form>

      <ul>
        <Grid container  > 

        {tasks.map((task, index) => {
          return (
            <div key={index}>
              
            <Card
              id={task.id}
              taskName={task.name}
              taskDescription={task.description}
              taskAssignedTo={task.assignedTo}
              taskDueDate={task.dueDate}
              taskStatus={task.status}
            
            />

            </div>
            
          );
        })}
        </Grid>
      </ul>
    </article>
  );
};
