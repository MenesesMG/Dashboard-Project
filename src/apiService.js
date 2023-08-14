// src/apiService.js
import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId, updatedUserData) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUserData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
