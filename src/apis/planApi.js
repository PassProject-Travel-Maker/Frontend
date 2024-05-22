import { Authapi } from "@/apis/core.js";

export const createPlanApi = async (schedule) => {
  const response = await Authapi.post("plan", schedule);
  return response;
};

export const getPlanApi = async (planId) => {
  const response = await Authapi.get(`plan/${planId}`);
  return response;
};

export const deletePlanApi = async (planId) => {
  const response = await Authapi.delete(`plan/${planId}`);
  return response;
};

export const modifyPlanApi = async (schedule,planId) => {
  const response = await Authapi.post(`plan/${planId}`,schedule);
  return response;
};
