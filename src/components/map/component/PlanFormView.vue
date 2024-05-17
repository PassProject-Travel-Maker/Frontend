<script setup>
import { ref } from "vue";
const title = ref("");
const description = ref("");
</script>

<template>
  <div id="input_box">
    <div>
      <label for="title">여행 제목</label>
      <input type="text" id="title" v-model="title" />
    </div>
    <div>
      <label for="title">내용 </label>
      <input type="text" id="title" v-model="description" />
    </div>
  </div>
</template>

<style scoped>
#input_box {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 50px;
  border: 1px solid black;
}
</style>
