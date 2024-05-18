<script setup>

import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import SelectOptionView from "@/components/map/component/SelectOptionView.vue";
import {useCategoryMapStore} from '@/stores/map.js';
import {storeToRefs} from 'pinia';
import { onMounted, watch,ref } from "vue";
const { VITE_KAKAO_MAP_API_KEY } = import.meta.env;

const store = useCategoryMapStore();
const {areas,location} = storeToRefs(store);

const map = ref();

const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef;
};

watch(
  () => areas.value,
  () => {
    panTo();
  }
);


onMounted( ()=>{
  const script = document.createElement("script");
    script.src =
      `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${VITE_KAKAO_MAP_API_KEY}`;
    document.head.appendChild(script);
})

const panTo = () => {
  if (map.value) {
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.value.panTo(new kakao.maps.LatLng(location.value.latitude, location.value.longitude));
  }
};


</script>

<template>
    <div class="map_box">

     <SelectOptionView/>

     <KakaoMap :lat="33.450705" :lng="126.570667" 
     @onLoadKakaoMap="onLoadKakaoMap"
     :draggable="true"
     level=6
     width=95% height=80%  
     style="margin : 0 auto">
      <KakaoMapMarker
      v-for="(area, index) in areas"
      :key="area.id === undefined ? index : area.id"
      :lat="area.latitude"
      :lng="area.longitude"
    />
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
