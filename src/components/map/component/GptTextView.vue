<script setup>
import { storeToRefs } from "pinia";
import { useGPTStore } from "@/stores/gpt";
import { watch, nextTick, onMounted} from "vue";
// import 'bootstrap/dist/css/bootstrap.min.css';

const gptStore = useGPTStore();
const { gptResponse, lottieContainer, anim,isLoading } = storeToRefs(gptStore);
const { handleButtonClick } = gptStore;

const addEventListenersToButtons = () => {
  const buttons = document.querySelectorAll('.gpt-button');
  buttons.forEach(button => {
    button.removeEventListener('click', handleButtonClick); // 중복 방지
    button.addEventListener('click', handleButtonClick);
  });
};

watch(gptResponse, async () => {
  if (anim.value) {
    anim.value.destroy();
  }
  await nextTick();
  addEventListenersToButtons();
});

watch(isLoading, async() => {
  await nextTick();
  addEventListenersToButtons();
});

onMounted( ()=>{
  addEventListenersToButtons();
})
</script>

<template>
  <div class="gpt-container">
    <div class="animation-div" ref="lottieContainer"></div>
    <div class="text_box" v-html="gptResponse" v-if="!isLoading">
     
    </div>
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

 .text_box li {
  margin-bottom: 1em; /* 문단 간의 간격을 조정 */
}

 h1, h2, h3, h4, h5, h6 {
  margin: 20px 0 10px;
  padding: 0;
  font-weight: bold;
}

 h1 {
  font-size: 2em;
}

 h2 {
  font-size: 1.75em;
}
 h3 {
  font-size: 1.5em;
}

 h4 {
  font-size: 1.25em;
}

 h5 {
  font-size: 1em;
}

 h6 {
  font-size: 0.875em;
}
</style>
