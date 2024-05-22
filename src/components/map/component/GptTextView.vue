<script setup>
import { storeToRefs } from "pinia";
import { useGPTStore } from "@/stores/gpt";
import { ref, watch, nextTick } from "vue";
// import 'bootstrap/dist/css/bootstrap.min.css';

const gptStore = useGPTStore();
const { gptResponse, lottieContainer, anim } = storeToRefs(gptStore);
const { handleButtonClick } = gptStore;

watch(gptResponse, async () => {
  if (anim.value) {
    anim.value.destroy();
  }
  await nextTick();
  const buttons = document.querySelectorAll('.gpt-button');
  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
});
</script>

<template>
  <div class="gpt-container">
    <div class="animation-div" ref="lottieContainer"></div>
    <div class="text_box" v-html="gptResponse" v-if="gptResponse"></div>
  </div>
</template>

<style scoped>
.text_box {
  width: 100%;
  height: 100%;
  padding: 30px;
}

.gpt-container {
  width: 100%;
  height: 100%;
  border: 1px solid #e4e4e7;
  border-radius: 5px;
  overflow: auto;
  margin-bottom: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.animation-div {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%) scale(1.5);
  z-index: 10; /* text_box보다 높은 z-index 설정 */
}

::v-deep .gpt-button {
  /* background-color: #A0DEFF; */
  background-color: #5AB2FF;
  color: white;
  padding: 3px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

::v-deep .text_box li {
  margin-bottom: 1em; /* 문단 간의 간격을 조정 */
}

/* ::v-deep .gpt-button {
  background-color: #369636;
} */

::v-deep .gpt-button:hover {
  background-color: #F6F5F2;
}

::v-deep h1, h2, h3, h4, h5, h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-weight: bold;
}

::v-deep h1 {
  font-size: 2em;
}

::v-deep h2 {
  font-size: 1.75em;
}

::v-deep h3 {
  font-size: 1.5em;
}

::v-deep h4 {
  font-size: 1.25em;
}

::v-deep h5 {
  font-size: 1em;
}

::v-deep h6 {
  font-size: 0.875em;
}
</style>
