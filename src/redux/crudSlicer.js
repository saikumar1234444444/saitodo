import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchInitialTodos = createAsyncThunk(
    "getTodos",
    async (_, { getState, fulfillWithValue, rejectWithValue }) => {
        try {
            const response = await axios.get('https://dummyjson.com/todos');
            return fulfillWithValue(response.data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
  );



const crudSlicer=createSlice({
    name:'crudOperations',
    initialState:{
        todos:[],
        apiStatus:null,
        todoResponse:''
    },
    reducers:{
      addTodoItems: (state, action) => {
        if(action.payload.input.trim()!==''){
          const item={id:action.payload.length+1,todo:action.payload.input,completed:false,userId:Date.now()}
          state.todos=[...state.todos,item]
        }
      },
      deleteTodoItem:(state,action)=>{
        const result=state.todos.filter((item)=>item.id!==action.payload)
        state.todos=result
      },
      editTodoItems:(state,action)=>{
      const result=state.todos.map((item)=>{
        if(item.id===action.payload.id){
          return {...item,todo:action.payload.input}
        }
        return item
      })
      state.todos=result
      
      },
      updateReadUnread:(state,action)=>{
        const result=state.todos.map((item)=>{
          if(item.id===action.payload.id){
            return {...item,completed:action.payload.check}
          }
          return item
        })
        state.todos=result
      }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchInitialTodos.pending, (state, action) => {
          state.apiStatus = 'loading';
        });
        builder.addCase(fetchInitialTodos.fulfilled, (state, action) => {
            const todos=action.payload.todos
            state.todos=todos.slice(0,10)
            state.apiStatus = null;  
        
        });
        builder.addCase(fetchInitialTodos.rejected, (state, action) => {
          state.apiStatus = 'fetching failed';
        });
      },
})

export const {
  addTodoItems,deleteTodoItem,editTodoItems,updateReadUnread
} = crudSlicer.actions;

export default crudSlicer.reducer;