// get all instructor from db

export const getInstructors = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/users/instructors`
  );
  return res.data;
};
