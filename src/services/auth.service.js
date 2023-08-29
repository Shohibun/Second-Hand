/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_URL = "https://staging-fasthand-api.herokuapp.com/api/auth/";

const register = (name, email, password) => {
  //Bakal return suatu object
  return axios.post(API_URL + "signup", {
    name,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};