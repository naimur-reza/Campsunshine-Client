// post class to the db

import axios from "axios";

export const addClass = async (data) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/classes`, data);
  return res;
};

// get my classes : instructor
export const getMyClasses = async (email) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/classes/${email}`
  );
  return res.data;
};

// get all classes from the db

export const getAllClasses = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/classes/approved`
  );
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

// update class data
export const updateClass = async (classData, id) => {
  console.log(classData);
  const res = await axios.patch(
    `${import.meta.env.VITE_API_URL}/classes/${id}`,
    classData
  );
  return res.data;
};

// get popular classes
export const getPopularClasses = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/classes/popular`
  );
  return res.data;
};
