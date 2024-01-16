import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "https://ethosworld-api-dev.ethos.co.id",
  headers: {
    secretcode: process.env.NEXT_PUBLIC_X_SECRET_CODE,
    secretkey: process.env.NEXT_PUBLIC_X_SECRET_KEY,
  },
});
