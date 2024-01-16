import { baseAPI } from "@/app/api/baseAPI";

async function sendForm() {
  try {
    const response = await baseAPI.post("/slider");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default sendForm;
