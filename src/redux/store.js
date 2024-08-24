import { configureStore } from "@reduxjs/toolkit";
import crudSlicer from "./crudSlicer";

const store = configureStore({
  reducer: {
    todoItems: crudSlicer
  }
});

export default store;