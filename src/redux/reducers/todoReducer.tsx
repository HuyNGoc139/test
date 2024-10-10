import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  filter: 'all' | 'completed' | 'todo';
}

const initialState: TodosState = {
  todos: [
    {
      id: 1,
      title: 'Learn Redux',
      description: 'Learn Redux in 1 hourse',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn React-Native',
      description: 'Learn React-native in 1 days',
      completed: true,
    },
  ],
  filter: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: any) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<'all' | 'completed' | 'todo'>) => {
      state.filter = action.payload; // Cập nhật filter
    },
  },
});
export const selectFilteredTodos = (state: { todos: TodosState }) => {
  switch (state.todos.filter) {
    case 'completed':
      return state.todos.todos.filter((todo) => todo.completed);
    case 'todo':
      return state.todos.todos.filter((todo) => !todo.completed);
    default:
      return state.todos.todos;
  }
};
export const { addTodo, toggleTodo, removeTodo, setFilter, updateTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
