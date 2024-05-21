<script setup>
import GptFormView from "@/components/map/component/GptFormView.vue";
import GptTextView from "@/components/map/component/GptTextView.vue";
</script>

<template>
  <div class="gpt_container">
    <div class="text">
      <h1>여행에 필요한 정보를 입력해주세요</h1>

      <h3>
        여행 날짜, 지역, 인원, 경비 등을 입력해보세요! <br />
        GPT가 일정에 맞게 여행지를 <strong>추천</strong>해드립니다! 최고의 여행을 경험해보세요
      </h3>
    </div>
    <div class="gpt_box">
      <GptFormView class="box input" />

      <GptTextView class="box" />
    </div>
  </div>
</template>

<style scoped>
.gpt_container {
  width: 100%;
  height: 900px;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.gpt_box {
  display: flex;
  height: calc(100% - 100px);
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  box-sizing: border-box;
  flex-grow: 1; /* flex-grow를 추가하여 gpt_box가 남은 공간을 차지하게 함 */
}

.box {
  width: calc((100% - 60px) / 2);
  height: 100%;
  border: 1px solid #e4e4e7;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  border: 1px solid black;
  height: 100px;
  flex-shrink: 0; /* 높이가 축소되지 않도록 설정 */
}
</style>
