// get all instructor from db

import axios from "axios";

export const getInstructors = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/users/status/instructor`
  );
  return res.data;
};
