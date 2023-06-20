import axios from "axios";

const API_URLS = {
  getAllUsers: "https://jsonplaceholder.typicode.com/users",
  getAllTodos: "https://jsonplaceholder.typicode.com/todos",
  getAllPosts: "https://jsonplaceholder.typicode.com/posts",
};

export const getAllUsers = () => {
  try {
    return axios.get(API_URLS.getAllUsers);
  } catch (error) {
    throw error;
  }
};

export const getAllTodos = () => {
  try {
    return axios.get(API_URLS.getAllTodos);
  } catch (error) {
    throw error;
  }
};

export const getAllPosts = () => {
  try {
    return axios.get(API_URLS.getAllPosts);
  } catch (error) {
    throw error;
  }
};
