import { Authapi } from "@/apis/core.js";

export const postDataToGPTApi = async (data) => {
  const response = await Authapi.post("chat/recommend", data);
  return response;
};
