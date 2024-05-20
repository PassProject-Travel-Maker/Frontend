import { ref } from "vue";
import { defineStore } from "pinia";
import authApi from "@/apis/authApi";
import { getMyInfoApi, getMyTravelListApi } from '@/apis/memberApi';
import { jwtDecode } from "jwt-decode";

export const useMemberStore = defineStore("member", () => {

    const myInfo = ref({});
    const myTravelList = ref({});

    const getMyInfo = async (memberId) => {
        const response = await getMyInfoApi(memberId);
        console.log(response);
        myInfo.value = response.data;
    }

    const getMyTravelList = async () => {
        const response = await getMyTravelListApi(memberId);
        console.log(response);
        myTravelList.value = response.data;
    }

    return { getMyInfo, getMyTravelList, myInfo, myTravelList }
})