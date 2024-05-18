<script setup>

import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import SelectOptionView from "@/components/map/component/SelectOptionView.vue";
import {useCategoryMapStore} from '@/stores/map.js';
import {storeToRefs} from 'pinia';
const store = useCategoryMapStore();
const {areas} = storeToRefs(store);

</script>

<template>
    <div class="map_box">

     <SelectOptionView/>

     <KakaoMap :lat="33.450705" :lng="126.570667" :draggable="true" 
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
