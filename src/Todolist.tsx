import { ChangeEvent, KeyboardEvent, useState } from "react";
import { ButtonComponent } from "./Button";
import CircularProgressBar from "./CircularProgressBar";
import {
  Box,
  Checkbox,
  List,
  ListItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { FilterValuesType, TaskType } from "./App";

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (taskId: string) => void;
  changeFilter: (filter: FilterValuesType) => void;
  addTask: (title: string) => void;
  changeTaskStatus: (taskId: string, taskStatus: boolean) => void;
};

export const Todolist = ({
  title,
  tasks,
  removeTask,
  changeFilter,
  addTask,
  changeTaskStatus,
}: PropsType) => {
  const [progress, setProgress] = useState(70);
  const [taskTitle, setTaskTitle] = useState("");

  const addTaskHandler = () => {
    if (taskTitle.trim() !== "") {
      addTask(taskTitle.trim());
      setTaskTitle("");
    }
  };

  const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.currentTarget.value);
  };

  const addTaskOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTaskHandler();
    }
  };

  const changeFilterTasksHandler = (filter: FilterValuesType) => {
    changeFilter(filter);
  };

  const changeTaskStatusHandler = (
    taskId: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const newStatusValue = e.currentTarget.checked;
    changeTaskStatus(taskId, newStatusValue);
  };

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minWidth: "250px",
        maxWidth: "500px",
        margin: "0px auto",
        padding: "40px",
        marginBottom: "50px",
        boxShadow: 3,
        borderRadius: "10px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Stack
        direction="row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxHeight: "10vh",
          backgroundColor: "#f5f5f5",
          paddingBottom: "30px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
            color: "#1976d2",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            paddingLeft: "50px",
            paddingBottom: "10px",
            backgroundColor: "rgb(255 255 255 / 0)",
          }}
        >
          <CircularProgressBar value={progress} />
        </Box>
      </Stack>

      <Box display="flex" sx={{ width: "100%", marginBottom: 2 }}>
        <TextField
          label="Add new task"
          fullWidth
          value={taskTitle}
          onChange={changeTaskTitleHandler}
          onKeyUp={addTaskOnKeyUpHandler}
          variant="outlined"
        />
        <ButtonComponent
          image={AddBoxIcon}
          title={""}
          onClick={addTaskHandler}
        />
      </Box>
      {tasks.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No tasks available
        </Typography>
      ) : (
        <List dense sx={{ width: "100%", padding: 0 }}>
          {tasks.map((task) => {
            const removeTaskHandler = () => removeTask(task.id);
            return (
              <ListItem
                key={task.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  boxShadow: 1,
                  marginBottom: "10px",
                }}
              >
                <Box display="flex" alignItems="center">
                  <Checkbox
                    checked={task.isDone}
                    onChange={(e) => changeTaskStatusHandler(task.id, e)}
                    color="primary"
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      textDecoration: task.isDone ? "line-through" : "none",
                    }}
                  >
                    {task.title}
                  </Typography>
                </Box>
                <ButtonComponent
                  image={DeleteForeverIcon}
                  onClick={removeTaskHandler}
                  title={""}
                />
              </ListItem>
            );
          })}
        </List>
      )}
      <Stack direction={"row"} spacing={1} sx={{ marginTop: 2 }}>
        <ButtonComponent
          title={"All"}
          onClick={() => changeFilterTasksHandler("all")}
        />
        <ButtonComponent
          title={"Active"}
          onClick={() => changeFilterTasksHandler("active")}
        />
        <ButtonComponent
          title={"Completed"}
          onClick={() => changeFilterTasksHandler("completed")}
        />
      </Stack>
    </Stack>
  );
};
