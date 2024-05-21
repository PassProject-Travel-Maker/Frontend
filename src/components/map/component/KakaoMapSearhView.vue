<script setup>
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
import { ref, onMounted } from "vue";
import AreaListItem from "@/components/map/component/AreaListItem.vue";
const keywords = ref("");
const areas = ref([]);
import { usePlanStore } from "@/stores/plan.js";

const planstore = usePlanStore();
const { setPlan } = planstore;

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
      <button @click="SearchPlace">검색</button>
    </div>
    <KakaoMap
      :lat="33.450705"
      :lng="126.570667"
      :draggable="true"
      level="7"
      width="95%"
      height="80%"
      style="margin: 0 auto">
    </KakaoMap>
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
