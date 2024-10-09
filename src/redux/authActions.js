import axios from 'axios';

// Đăng nhập
export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://httpbin.org/post', {
      username,
      password,
    });
    if (response.status === 200) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.data,
      });
    } else {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: 'Login failed: Unexpected response status.',
      });
    }
  } catch (error) {
    console.error('Error during login:', error);
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: 'Login failed!',
    });
  }
};
export const register =
  (firstName, lastName, email, password) => async (dispatch) => {
    try {
      const response = await axios.post('https://httpbin.org/post', {
        firstName,
        lastName,
        email,
        password,
      });
      if (response.status === 200) {
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: response.data,
        });
      } else {
        dispatch({
          type: 'REGISTER_FAILURE',
          payload: 'Registration failed: Unexpected response status.',
        });
      }
    } catch (error) {
      console.error('Error during registration:', error);
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: 'Registration failed!',
      });
    }
  };
// Đăng xuất
export const logout = () => (dispatch) => {
  dispatch({
    type: 'LOGOUT',
  });
};
