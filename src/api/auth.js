import axios from "axios";

// save user in db
export const saveUser = async (user) => {
  console.log(user);
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    image: user?.photoURL,
  };
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/users/${user?.email}}`,
    currentUser
  );
  return response.data;
};

// update user role
export const updateUserRole = async (email, role) => {
  const currentUser = {
    role: role,
  };
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/users/${email}`,
    currentUser
  );
  return response.data;
};

// remove user from db
export const removeUser = async (email) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_URL}/users/${email}`
  );
  return response.data;
};

// get all Users
export const getAllUsers = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
  return res.data;
};

// get user role
export const getRole = async (email) => {
  const res = await axios(`${import.meta.env.VITE_API_URL}/users/${email}`);
  const data = await res.data;
  localStorage.setItem("role", data.role);
  return data.role;
};
