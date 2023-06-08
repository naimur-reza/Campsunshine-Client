// post class to the db

import axios from "axios";

export const addClass = async (data) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/classes`, data);
  return res;
};
