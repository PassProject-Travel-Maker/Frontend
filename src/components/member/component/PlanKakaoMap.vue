<script setup>
import { onMounted, ref } from "vue";
import { KakaoMap, KakaoMapMarker,KakaoMapPolyline } from "vue3-kakao-maps";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";

const memberstore = useMemberStore();
const {makePath} = memberstore;
const { dayForPlanDtoList, picked,pickedindex,  location,myPath,colors,myPlan } = storeToRefs(memberstore);

const onClickMapMarker = (eventarea, index) => {};

onMounted( ()=>{
  //초기 로드할때 위치 계산
  makePath();
})
</script>

<template>
  <div class="title_box" >
    <div class="font-extrabold text-5xl">{{myPlan.title}}</div>
    <div class="" style="color : #667085">{{myPlan.description}}</div>
  </div>
  <div style="width : 100%; height : 100%;  position: relative;">
  <div class="text-5xl day_box">{{picked}} 일차 일정</div>
  <KakaoMap
    :lat="location.latitude"
    :lng="location.longitude"
    width="100%"
    height="100%"
    :level="location.level">
    <KakaoMapMarker
      v-for="plan in dayForPlanDtoList[pickedindex].scheduleDetailResponseDtoList"
      :key="plan.attractionInfoDto.id"
      :lat="plan.attractionInfoDto.latitude"
      :lng="plan.attractionInfoDto.longitude"
      :clickable="true"
      @onClickKakaoMapMarker="onClickMapMarker(area, index)">
    </KakaoMapMarker>
    <KakaoMapPolyline :latLngList="myPath" :endArrow="true" :strokeColor="colors[pickedindex] " strokeOpacity="1"/>
  </KakaoMap>
  </div>
</template>

<style scoped>
.title_box{
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap : 20px;
  margin-bottom: 10px;
}
.day_box{
  position: absolute;
  top : 20px;
  right: 20px;
  z-index: 10;
}
</style>