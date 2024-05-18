<script setup>

import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import SelectOptionView from "@/components/map/component/SelectOptionView.vue";

const coordinate = {
  lat: 37.566826,
  lng: 126.9786567,
};
</script>

<template>
    <div class="map_box">


     <SelectOptionView/>
     <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true" 
     width=95% height=80%  
     style="margin : 0 auto">
      <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker>
    </KakaoMap>
    </div>
</template>

<style scoped>
.map_box{
  width: 100%;
  height: 800px;
  border-radius: 5px;
  border: 1px solid #E4E4E7;
}
</style>
