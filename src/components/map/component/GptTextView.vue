<script setup>
import { storeToRefs } from "pinia";
import { useGPTStore } from "@/stores/gpt";

const gptStore = useGPTStore();
const { gptText } = storeToRefs(gptStore);

</script>

<template>
  <div>
    <div class="text_box" v-html="gptText"></div>
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
