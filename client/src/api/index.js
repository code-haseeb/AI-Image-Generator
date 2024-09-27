import axios from "axios";

// http://localhost:8080/api/
const API = axios.create({
  baseURL: "https://ai-image-generator-y6df.onrender.com/api/",
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateImageFromPrompt = async (data) =>
  await API.post("/generateImage/", data);
