<script setup>
import GptFormView from "@/components/map/component/GptFormView.vue";
import GptTextView from "@/components/map/component/GptTextView.vue";
</script>

<template>
  <div class="gpt_container">
    <div class="text">
      <p>
        GPT가 일정에 맞게 여행지를 <strong>추천</strong>해드립니다! <br/>
        <button class="gpt-button">버튼</button>을 클릭하면 여행지 정보도 조회가 가능해요😄<br/>
        최고의 여행을 경험해보세요!
      </p>
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
  /* height: 900px; */
  height: 660px;
  border-radius: 5px;
  border: 1px solid #e4e4e7;
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
  /* border: 1px solid #e4e4e7; */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}

.text {
  /* border: 1px solid black; */
  height: 100px;
  flex-shrink: 0; /* 높이가 축소되지 않도록 설정 */
  padding-left: 20px;
  padding-top: 12px;
}

::v-deep .gpt-button {
  background-color: #F1F1F1;
  color: #5AB2FF;
  padding: 3px;
  border: 1px solid #5AB2FF;
  border-radius: 5px;
  cursor: pointer;
}

::v-deep .gpt-button:hover {
  background-color: #CDE8E5;
}



</style>
