<script setup>
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import { ref } from "vue";
import AreaListItem from "@/components/map/component/AreaListItem.vue";
import { usePlanStore } from "@/stores/plan.js";
import { useCategoryMapStore } from "@/stores/map.js";
import MapModal from "@/components/map/component/MapModal.vue";
import { storeToRefs } from "pinia";
const keywords = ref("");
const areas = ref([]);

const planstore = usePlanStore();
const mapstore = useCategoryMapStore();

const { setPlan } = planstore;
const { location } = storeToRefs(mapstore);
const isShow = ref(false);
const area = ref({});
console.log(location.value);
const onClickMapMarker = (eventarea, index) => {
  area.value = areas.value[index];
  isShow.value = true;
};
const close = () => {
  isShow.value = false;
};
const SearchPlace = () => {
  if (keywords.value === "") {
    alert("검색어를 입력해주세요");
  } else {
    let places = new kakao.maps.services.Places();

    let callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result);

        //데이터 가공
        let data = [];
        console.log(result);

        result.forEach((item) => {
          data.push({
            attractionId: Number(item.id) + 1000000,
            attrType: "KAKAO",
            latitude: item.y,
            longitude: item.x,
            img: "",
            hit: 0,
            recommend: 0,
            addr: item.address_name,
            title: item.place_name,
          });
        });

        areas.value = data;

        let lat = 0;
        let lng = 0;
        areas.value.forEach((item) => {
          lat += Number(item.latitude);
          lng += Number(item.longitude);
        });
        lat = lat / areas.value.length;
        lng = lng / areas.value.length;
        console.log(lat + " " + lng);
        location.value.latitude = lat;
        location.value.longitude = lng;

        console.log(areas.value);
      }
    };
    places.keywordSearch(keywords.value, callback);
  }
};
</script>

<template>
  <div class="map_box">
    <div class="grid grid-cols-10 gap-2 my-5 mx-5">
      <input
        @keyup.enter="SearchPlace"
        class="form-select me-2 col-span-3 border rounded-md"
        placeholder="매장 검색"
        v-model="keywords" />
      <button
        @click="SearchPlace"
        class="btn btn-outline-success col-span-1 bg-slate-300 text-black rounded-md hover:bg-amber-300 py-2">
        검색
      </button>
    </div>
    <KakaoMap
      :lat="location.latitude"
      :lng="location.longitude"
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
    </KakaoMap>
    <MapModal :area="area" v-show="isShow" @close="close" :class="{ show: isShow }"></MapModal>
  </div>

  <ul role="list" class="divide-y divide-gray-100">
    <AreaListItem v-for="area in areas" :key="area.id" :area="area" @click="setPlan(area)" />
  </ul>
</template>

<style scoped>
.map_box {
  width: 100%;
  height: 800px;
  border-radius: 5px;
  border: 1px solid #e4e4e7;
}
.input_box {
  width: 100%;
  height: 100px;
  border: 1px solid black;
}
</style>
