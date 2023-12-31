import axios from "axios";

export const selectClass = async (data) => {
  const info = {
    ...data,
    date: new Date(),
  };
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/classes/select`,
    info
  );
  return res.data;
};

// get my selected classes
export const getMySelectedClasses = async (email) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/classes/select/${email}`
  );
  return res;
};

// remove from selected classes

export const removeSelectedClass = async (id) => {
  const res = await axios.delete(
    `${import.meta.env.VITE_API_URL}/classes/select/${id}`
  );
  return res.data;
};
