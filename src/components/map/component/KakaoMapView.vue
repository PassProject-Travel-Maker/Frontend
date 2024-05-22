<script setup>
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import SelectOptionView from "@/components/map/component/SelectOptionView.vue";
import AreaListItem from "@/components/map/component/AreaListItem.vue";
import MapModal from "@/components/map/component/MapModal.vue";
import { useCategoryMapStore } from "@/stores/map.js";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { usePlanStore } from "@/stores/plan.js";

const planstore = usePlanStore();
const { setPlan } = planstore;

const mapstore = useCategoryMapStore();
const { areas, location } = storeToRefs(mapstore);
const {getLatLng} = mapstore;

const map = ref();
const isShow = ref(false);
const area = ref({});
const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef;
};

const onClickMapMarker = (eventarea, index) => {
  area.value = areas.value[index];
  isShow.value = true;
};

const close = () => {
  isShow.value = false;
};
</script>

<template>
  <div class="map_box">
    <SelectOptionView />

    <KakaoMap
      :lat="location.latitude"
      :lng="location.longitude"
      @onLoadKakaoMap="onLoadKakaoMap"
      :draggable="true"
      level="7"
      width="95%"
      height="80%"
      style="margin: 0 auto">
      <KakaoMapMarker
        v-for="(area, index) in areas"
        :key="area.attractionId === undefined ? index : area.attractionId"
        :lat="area.latitude"
        :lng="area.longitude"
        :clickable="true"
        @onClickKakaoMapMarker="onClickMapMarker(area, index)">
      </KakaoMapMarker>
      <ul role="list" class="divide-y divide-gray-100">
    <AreaListItem
      v-for="area in areas"
      :key="area.attractionId"
      :area="area"
      @showarea="getLatLng(area)"
      @addplan="setPlan(area)" />
  </ul>
    </KakaoMap>
    <MapModal :area="area" v-show="isShow" @close="close" :class="{ show: isShow }"></MapModal>
  </div>
  
</template>

<style scoped>
.map_box {
  width: 100%;
  /* height: 800px; */
  height: 660px;
  border-radius: 5px;
  border: 1px solid #e4e4e7;
  position: relative;
}

ul{
  width: 30%;
  position : absolute;
  top: 0;
  left:0;
  opacity: 0.8;
  background-color: #e4e4e7;
  overflow: auto;
  height: 100%;
  z-index: 5;
}
</style>
