<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useGPTStore } from "@/stores/gpt";

const gptStore = useGPTStore();
const test = ref("");
const { gptText } = storeToRefs(gptStore);
const { formattedData } = gptStore;

onMounted(() => {
  console.log(gptText.value);
  test.value = formattedData(gptText.value);
});
</script>

<template>
  <div>
    <div class="text_box" v-html="test"></div>
  </div>
</template>

<style scoped>
.text_box {
  width: 90%;
  height: 90%;
  padding: 50px;
  border: 1px solid #e4e4e7;
  border-radius: 5px;
  overflow: auto;
}
</style>
