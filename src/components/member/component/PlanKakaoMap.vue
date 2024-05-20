<script setup>
import { ref } from "vue";
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";

const memberstore = useMemberStore();

const { dayForPlanDtoList, picked, pickedindex, myPlan, location } = storeToRefs(memberstore);

const onClickMapMarker = (eventarea, index) => {};
</script>

<template>
  <div>타이틀이 위치합니다</div>
  <div>설명이 위치합니다</div>
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
  </KakaoMap>
</template>

<style scoped></style>
