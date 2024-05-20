<script setup>
import {storeToRefs} from 'pinia';
import {usePlanStore} from '@/stores/plan.js';

const planStore = usePlanStore();
const {title, description} = storeToRefs(planStore);

</script>

<template>
  <div id="input_box">
    <div id="title_box">
      <label for="title" >대표 이미지</label>
      <input type="text" id="title" name="title" 
      placeholder="아이콘 + 모달로 바꾸기"
      v-model="title" />
    </div>
    <div id="title_box">
      <label for="title" >여행 제목</label>
      <input type="text" id="title" name="title" 
      placeholder="여행제목을 입력해주세요"
      v-model="title" />
    </div>
    <div id="subject_box">
      <label for="subject" class="text-sm font-medium leading-6 text-gray-900">내용 </label>
      <input type="text" id="subject" name="subject" v-model="description" 
      placeholder="여행 설명을 입력해주세요" />
    </div>
  </div>
</template>

<style scoped>
#input_box {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: row;
  /* border: 1px solid black; */
  gap :30px;
}
input{
  width: 100%;
  color: #969696;
  border: 1px solid #E4E4E7;
  height: 34px;
  border-radius: 5px;
}
label{
  color: #18181B;
  font-weight: 700;
  display: block;
}
#title_box{
  width: 49%;
}
#subject_box{
  width: 49%;
}
</style>
