<script setup>
import { onMounted, ref } from "vue";
import { KakaoMap, KakaoMapMarker, KakaoMapPolyline } from "vue3-kakao-maps";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";

const memberstore = useMemberStore();
const { makePath } = memberstore;
const { dayForPlanDtoList, picked, pickedindex, location, myPath, colors, myPlan } =
  storeToRefs(memberstore);

const onClickMapMarker = (eventarea, index) => {};

onMounted(() => {
  // 초기 로드할 때 위치 계산
  makePath();
});
</script>

<template>
  <div class="title_box">
    <div class="font-extrabold text-5xl">
      {{ myPlan.title }}
    </div>
    <div style="color: #667085">{{ myPlan.description }}</div>
  </div>
  <div class="map-container">
    <KakaoMap
      :lat="location.latitude"
      :lng="location.longitude"
      width="100%"
      :level="location.level">
      <KakaoMapMarker
        v-for="plan in dayForPlanDtoList[pickedindex].scheduleDetailResponseDtoList"
        :key="plan.attractionInfoDto2.id"
        :lat="plan.attractionInfoDto2.latitude"
        :lng="plan.attractionInfoDto2.longitude"
        :clickable="true"
        @onClickKakaoMapMarker="onClickMapMarker(area, index)">
      </KakaoMapMarker>
      <KakaoMapPolyline
        :latLngList="myPath"
        :endArrow="true"
        :strokeColor="colors[pickedindex]"
        strokeOpacity="1" />
    </KakaoMap>
  </div>
</template>

<style scoped>
.title_box {
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
}
.day_box {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
}
.map-container {
  display: flex;
  margin: 20px;
  /* padding: 20px; */
  flex-direction: column;
  gap: 20px;
  border-radius: 10px; /* border-radius 추가 */
  overflow: hidden; /* 자식 요소가 부모 요소의 경계를 넘지 않도록 */
}
</style>
