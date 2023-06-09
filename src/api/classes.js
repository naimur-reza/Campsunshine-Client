// post class to the db

import axios from "axios";

export const addClass = async (data) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/classes`, data);
  return res;
};

// get all classes from the db

export const getAllClasses = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/classes`);
  return res.data;
};

// update class status

export const updateClassStatus = async (id, classData) => {
  const res = await axios.patch(
    `${import.meta.env.VITE_API_URL}/classes/status/${id}`,
    classData
  );
  return res.data;
};
