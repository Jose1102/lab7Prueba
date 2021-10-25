import React, { useState } from "react";

export const tasks = [
  {
    id: "1",
    name : "Arreglar el checklist del edit",
    description : "EL checklist no funciona de forma correcta, se necesita arreglarlo",
    assignedTo: "Jennifer Blanco",
    dueDate: "22/10/2021",
    status: "REVIEW"
  },
  {
    id: "2",
    name : "Limpiar el campo del create task",
    description : "Al momento de crear la tarea el input debe limpiarse",
    assignedTo: "Julian Porras",
    dueDate: "22/10/2021",
    status: "IN_PROGRESS"
    
  },
  {
    id: "3",
    name : "Terminar el laboratorio",
    description : "Se debe crear pagina de login, crear tareas y poder editarlas y guardarlas",
    assignedTo: "Andres Carvajal",
    dueDate: "22/10/2021",
    status: "TODO"
  },
  {
    id: "4",
    name : "Hacer el css",
    description : "Poner el entorno bonito para que el usuario tenga mayor uso a la plataforma",
    assignedTo: "Jhonatan Zuleta",
    dueDate: "22/10/2021",
    status: "DONE"
  }
  
];

const initialData = { tasks };

const DataContext = React.createContext(initialData);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const value = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = React.useContext(DataContext);

  return context;
};
