import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Đảm bảo đường dẫn đúng đến file chứa reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
