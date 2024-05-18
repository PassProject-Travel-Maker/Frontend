<script setup>
import { ref, onMounted, watch } from "vue";
import {useCategoryMapStore} from '@/stores/map.js';
import {storeToRefs} from 'pinia';
const store = useCategoryMapStore();
const {sidos , guguns} = storeToRefs(store);
const { getSido,getGugun,getAttraction } = store;

const searchData = ref({
  sidoCode: "0",
  gugunCode: "0",
  attarctionId: "0",
  keyword: "",
});

onMounted(() => {
  getSido()
});

const init = () => {
  searchData.value.gugunCode = 0;
};

watch(
  () => searchData.value.sidoCode,
  () => {
    init();
    console.log(searchData.value.sidoCode)
    getGugun(searchData.value.sidoCode);
  }
);

const search = () => {
    getAttraction(searchData.value)
};
</script>

<template>
    <form class="d-flex my-5 mx-5" onsubmit="return false;" role="search">
      <select
        id="search-area"
        class="form-select me-2"
        name="sidoCode"
        v-model="searchData.sidoCode"
      >
        <option value="0">검색 할 지역 선택</option>
        <option v-for="sido in sidos" :key="sido.sidoCode" :value="sido.sidoCode">
          {{ sido.sidoName }}
        </option>
      </select>
      <select
        id="search-gugun"
        class="form-select me-2"
        name="gugunCode"
        v-model="searchData.gugunCode"
      >
        <option value="0">구군 선택</option>
        <option v-for="gugun in guguns" :key="gugun.gugunCode" :value="gugun.gugunCode">
          {{ gugun.gugunName }}
        </option>
      </select>

      <select id="search-content-id" class="form-select me-2" v-model="searchData.attarctionId">
        <option value="0" selected>관광지 유형</option>
        <option value="12">관광지</option>
        <option value="14">문화시설</option>
        <option value="15">축제공연행사</option>
        <option value="25">여행코스</option>
        <option value="28">레포츠</option>
        <option value="32">숙박</option>
        <option value="38">쇼핑</option>
        <option value="39">음식점</option>
      </select>
      <input
        id="search-keyword"
        class="form-control me-2"
        type="search"
        placeholder="검색어"
        aria-label="검색어"
        v-model="searchData.keyword"
      />
      <button id="btn-search" class="btn btn-outline-success" type="button" @click="search">
        검색
      </button>
    </form>
</template>

<style scoped>
#btn-search {
  color: var(--secondary-color);
  border-color: var(--secondary-color);
  white-space: nowrap;
}

#btn-search:hover {
  color: white;
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}
</style>