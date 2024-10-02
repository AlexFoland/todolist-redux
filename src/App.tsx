import "./App.css";
import {
  todolistsReducer,
  addTaskAC,
  removeTaskAC,
  changeTaskStatusAC,
} from "./model/todolists-reducer";
import { Todolist } from "./Todolist";
import { useReducer } from "react";
import { v1 } from "uuid";
import AppBar from "./AppBar";
import { Box, Stack, Typography } from "@mui/material";
import { filterTasksReducer, changeFilterAC } from "./model/filter-reducer";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValuesType = "all" | "active" | "completed";

function App() {
  const [tasks, dispatchTasks] = useReducer(todolistsReducer, [
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "Tailwind CSS", isDone: false },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "React", isDone: false },
    { id: v1(), title: "TypeScript", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
    { id: v1(), title: "Material UI", isDone: false },
  ]);

  const [filter, dispatchFilter] = useReducer(filterTasksReducer, "all");

  const removeTask = (taskId: string) => dispatchTasks(removeTaskAC(taskId));
  const addTask = (taskTitle: string) => dispatchTasks(addTaskAC(taskTitle));
  const changeFilter = (filter: FilterValuesType) =>
    dispatchFilter(changeFilterAC(filter));
  const changeTaskStatus = (taskId: string, taskStatus: boolean) =>
    dispatchTasks(changeTaskStatusAC(taskId, taskStatus));

  let tasksForTodolist = tasks;
  if (filter === "active")
    tasksForTodolist = tasks.filter((task) => !task.isDone);
  if (filter === "completed")
    tasksForTodolist = tasks.filter((task) => task.isDone);

  return (
    <Stack className="App">
      <AppBar />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 колонки
          gap: "20px", // расстояние между колонками и рядами
          justifyContent: "center",
          alignItems: "start",
          width: "100%",
          minHeight: "90vh",
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <Todolist
          title="What to learn"
          tasks={tasksForTodolist}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeTaskStatus={changeTaskStatus}
        />
        <Todolist
          title="What to learn"
          tasks={tasksForTodolist}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeTaskStatus={changeTaskStatus}
        />
        <Todolist
          title="What to learn"
          tasks={tasksForTodolist}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeTaskStatus={changeTaskStatus}
        />
        <Todolist
          title="What to learn"
          tasks={tasksForTodolist}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeTaskStatus={changeTaskStatus}
        />
        <Todolist
          title="What to learn"
          tasks={tasksForTodolist}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeTaskStatus={changeTaskStatus}
        />
        <Todolist
          title="What to learn"
          tasks={tasksForTodolist}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeTaskStatus={changeTaskStatus}
        />
        <Todolist
          title="What to learn"
          tasks={tasksForTodolist}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeTaskStatus={changeTaskStatus}
        />
        <Todolist
          title="What to learn"
          tasks={tasksForTodolist}
          removeTask={removeTask}
          changeFilter={changeFilter}
          addTask={addTask}
          changeTaskStatus={changeTaskStatus}
        />
      </Box>
    </Stack>
  );
}

export default App;
