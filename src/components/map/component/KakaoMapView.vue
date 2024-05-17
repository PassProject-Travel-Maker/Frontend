<script setup>
import { onMounted, ref, watch, toRaw } from "vue";
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
const coordinate = {
  lat: 37.566826,
  lng: 126.9786567,
};
</script>

<template>
  <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true">
    <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker>
  </KakaoMap>
</template>

<style scoped></style>
