import { Authapi } from "@/apis/core.js";

export const createPlanApi = async (schedule) => {
  const response = await Authapi.post("plan", schedule);
  return response;
};

export const getPlanApi = async (planId) => {
  const response = await Authapi.get(`plan/${planId}`);
  return response;
};
