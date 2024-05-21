<script setup>
import { ref } from "vue";
const location = ref("");
const period = ref("");
const peopleNum = ref("");
const cost = ref("");
const etc = ref("");

const GptSubmit = () => {
  const data = {
    location: location.value,
    period: period.value,
    peopleNum: peopleNum.value,
    cost: cost.value,
    etc: etc.value,
  };
};
</script>

<template>
  <div>
    <div class="input_box">
      <div id="location_box">
        <label for="location">여행 지역</label>
        <input type="text" id="location" name="location" placeholder=" ex) 제주도" v-model="location" />
      </div>

      <div id="period_box">
        <label for="period">여행 기간</label>
        <input type="text" id="period" name="period" placeholder=" ex) 2박 3일" v-model="period" />
      </div>

      <div id="peopleNum_box">
        <label for="peopleNum">인원</label>
        <input
          type="text"
          id="peopleNum"
          name="peopleNum"
          placeholder=" ex) 성인 3명 영유아 1명"
          v-model="peopleNum" />
      </div>

      <div id="cost_box">
        <label for="cost">비용</label>
        <input type="text" id="cost" name="cost" placeholder=" ex) 130만원" v-model="cost" />
      </div>

      <div id="etc_box">
        <label for="etc">기타 참고 사항</label>
        <input
          type="text"
          id="etc"
          name="etc"
          placeholder=" ex) 휠체어를 타는 노인이 1명 있어"
          v-model="cost" />
      </div>

      <div class="button_box">
        <button>초기화</button>
        <button @click="GptSubmit">적용</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 40px;
  padding-left: 50px;
  padding-right: 50px;
  border: 1px solid #e4e4e7;
  border-radius: 5px;
}
input {
  width: 100%;
  color: #969696;
  border: 1px solid #e4e4e7;
  height: 34px;
  border-radius: 5px;
}
label {
  color: #18181b;
  font-weight: 700;
  display: block;
}
.button_box {
  display: flex;
  width: 100%;
}
button {
  flex: 1;
  height: 40px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
