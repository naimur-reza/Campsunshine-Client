import axios from "axios";

// upload image in IMGBB
export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_KEY
  }`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};

// save payment info and increase / decrease - seats/ enrollments

export const savePaymentInfo = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}/process-payment`,
    data
  );
  return res.data;
};
