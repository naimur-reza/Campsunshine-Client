import axios from "axios";

// save user in db
export const saveUser = async (user) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/addUser`, {
    name: user.displayName,
    email: user.email,
    image: user.photoURL,

    role: "student",
  });
  return response.data;
};

// get user role
export const getRole = async (email) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/users/${email}`);
  const user = res.data;
  return user.role;
};
