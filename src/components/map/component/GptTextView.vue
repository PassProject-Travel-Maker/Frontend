<script setup>
import { storeToRefs } from "pinia";
import { useGPTStore } from "@/stores/gpt";
import { ref } from "vue";

const gptStore = useGPTStore();
const { gptResponse } = storeToRefs(gptStore);

const mode=ref(false);
console.log(gptResponse);

const change = () =>{
  mode.value= !mode.value;
}
</script>

<template>
  <div>
    <div class="text_box" v-html="gptResponse" v-if="mode"></div>
    <div  @click="change" v-else>button</div>
    <!-- <div class="text_box">{{ gptResponse }}</div> -->
  </div>
</template>

<style scoped>
.text_box {
  width: 100%;
  height: 100%;
  padding: 30px;
  border: 1px solid #e4e4e7;
  border-radius: 5px;
  overflow: auto;
}
</style>
