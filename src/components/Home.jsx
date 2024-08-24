import React from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Avatar,
  Checkbox,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchInitialTodos } from "../redux/crudSlicer";
import styles from "./HomeStyles";
import {
  addTodoItems,
  deleteTodoItem,
  editTodoItems,
  updateReadUnread,
} from "../redux/crudSlicer";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const Home = () => {
  const dispatch = useDispatch();
  const { todos, apiStatus } = useSelector((state) => state.todoItems);
  const [input, setInput] = React.useState("");
  const [isEdit, setIsedit] = React.useState(false);
  const [activeId, setActiveId] = React.useState(0);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const addTodos = () => {
    dispatch(addTodoItems({ input: input, length: todos.length }));
    setInput("");
  };
  const deleteTodo = (id) => {
    dispatch(deleteTodoItem(id));
  };

  const editTodos = (id, todo) => {
    setInput(todo);
    setIsedit(true);
    setActiveId(id);
  };

  const updateTodos = () => {
    dispatch(editTodoItems({ id: activeId, input: input }));
    setIsedit(false);
    setInput("");
  };

  const handleChangeChecked = (event, id) => {
    dispatch(updateReadUnread({ check: event.target.checked, id: id }));
  };

  React.useEffect(() => {
    dispatch(fetchInitialTodos());
  }, []);
  return (
    <Box sx={styles.bgContainer}>
      <Typography sx={styles.heading}>Todos List</Typography>
      <Grid container sx={styles.inputContainer}>
        <Grid item xs={12} md={8} sx={styles.inptButtonItem}>
          <TextField
            value={input}
            onChange={handleInputChange}
            sx={styles.textField}
            InputProps={{ sx: { borderRadius: "10px" } }}
          />
          {isEdit ? (
            <Button sx={styles.button} onClick={updateTodos}>
              update
            </Button>
          ) : (
            <Button sx={styles.button} onClick={addTodos}>
              add
            </Button>
          )}
        </Grid>
      </Grid>

      {apiStatus !== null && (
        <Typography sx={styles.heading}>{apiStatus}...........</Typography>
      )}
      <Grid container sx={styles.todosBgContainer}>
        {todos.length > 0 &&
          todos.map((item) => (
            <Grid item xs={12} md={8} sx={styles.todosContainer}>
              <Box sx={styles.checkboxButtonContainer}>
                <Box sx={styles.checkboxContainer}>
                  <Checkbox
                    onChange={(event) => handleChangeChecked(event, item.id)}
                    checked={item.completed}
                  />
                  <Typography
                    sx={item.completed ? styles.todoCheck : styles.todoText}
                  >
                    {item.todo}
                  </Typography>
                </Box>
                <Box sx={styles.buttonsContainer}>
                  <Avatar
                    sx={styles.avatar}
                    onClick={() => editTodos(item.id, item.todo)}
                  >
                    <EditOutlinedIcon />
                  </Avatar>
                  <Avatar
                    sx={styles.avatar}
                    onClick={() => deleteTodo(item.id)}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Avatar>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Home;
