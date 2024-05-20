<script setup>
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import { ref } from "vue";
const location = ref({
  latitude: 33.450705,
  longitude: 126.570667,
});
</script>

<template>
  <div>지도나올예정</div>
</template>

<style scoped></style>
