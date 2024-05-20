import { Authapi, api } from "@/apis/core.js";

export const getMyInfoApi = async (memberId) => {
  const response = await Authapi.get(`member/myInfo/${memberId}`);
  return response;
};

export const getMyTravelListApi = async (memberId) => {
  const response = await Authapi.get(`member/myTravelList/${memberId}`);
  return response;
};
