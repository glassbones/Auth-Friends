import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log('make token')
  return axios.create({
    headers: { authorization: token },
    baseURL: "http://localhost:5000",
  });
};
