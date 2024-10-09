import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Đăng nhập
export const loginUser = createAsyncThunk(
  'auth/login',
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post('https://httpbin.org/post', {
        username,
        password,
      });
      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue('Login failed: Unexpected response status.');
      }
    } catch (error) {
      return rejectWithValue('Login failed!');
    }
  }
);

// Đăng ký
export const registerUser = createAsyncThunk(
  'auth/register',
  async (
    {
      firstName,
      lastName,
      email,
      password,
    }: { firstName: string; lastName: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post('https://httpbin.org/post', {
        firstName,
        lastName,
        email,
        password,
      });
      if (response.status === 200) {
        return response.data;
      } else {
        return rejectWithValue(
          'Registration failed: Unexpected response status.'
        );
      }
    } catch (error) {
      return rejectWithValue('Registration failed!');
    }
  }
);

// Đăng xuất
export const logoutUser = createAsyncThunk('auth/logout', async () => {
  
  return {};
});
