<script setup>
import { storeToRefs } from "pinia";
import { useGPTStore } from "@/stores/gpt";
import { ref, watch } from "vue";

const gptStore = useGPTStore();
const { gptResponse, lottieContainer, anim } = storeToRefs(gptStore);

const mode=ref(false);
console.log(gptResponse);

const change = () =>{
  mode.value= !mode.value;
}

watch(gptResponse, () => {
  if (anim.value) {
    anim.value.destroy();
  }
});
</script>

<template>
  <!-- <div>
    <div ref="lottieContainer"></div>
    <div class="text_box" v-html="gptResponse" v-if="gptResponse">
    </div>
  </div> -->

  <div class="gpt-container">
    <div class="animation-div" ref="lottieContainer"></div>
    <div class="text_box" v-html="gptResponse" v-if="gptResponse">
    </div>
  </div>
</template>

<style scoped>
.text_box {
  width: 100%;
  height: 100%;
  padding: 30px;
  /* border: 1px solid #e4e4e7;
  border-radius: 5px;
  overflow: auto; */
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
  z-index: 10; /* text_box보다 높은 z-index 설정 */
}
</style>
