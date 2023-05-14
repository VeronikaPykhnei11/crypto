import axios from 'axios';

export const authService = {
  signIn: async ({email, password}) =>
  {
    try {
      const response = await axios.post('http://localhost:8000/auth/sign-in', { email, password }, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      localStorage.setItem('token', response.data.token);
      console.log(response.data)
      return {
        status: response.status,
        message: response.data.message,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email,
      };
    } catch (error) {
      return {
        status: error.response.status,
        message: error.response.data.error,
      }
    }
  },
  signUp: async ({firstName, lastName, password, email}) => {
    try {
      const response = await axios.post('http://localhost:8000/auth/sign-up', { firstName, lastName, password, email }, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return {
        status: response.status,
        message: response.data.message,
      };
    } catch (error) {
      return {
        status: error.response.status,
        message: error.response.data.error,
      };
    }
  },
  signOut: async () => {
    localStorage.removeItem('token');
  },
};
