<script setup>
import { ref, watch } from "vue";
const props = defineProps({ area: Object });
console.log(props.area);
watch(
  () => props.area,
  () => {
    if (props.area) {
      console.log(props.area);
      bg.value = true;
       document.body.style.overflow = "hidden";
    }
  },
  {
    deep: true,
  }
);

const emit = defineEmits(["close"]);

const replaceImg = (e) =>{
e.target.src="https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-760x460.png";
}
const bg = ref(false);
function close() {
  bg.value = false;
  document.body.style.overflow = "auto";
  console.log(document.body.style.overflow);
  emit("close", true);
}
</script>

<template>
  <div class="modal fade" aria-labelledby="myModalLabel" v-if="bg">
    <div class="modal-bg"></div>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="myModalLabel">{{ area.title }}</h5>
          <button type="button" class="close" @click="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- 모달 내용 -->
          <div class="d-flex flex-column align-items-center" id="modalContent">
            <img style="max-width: 80%; height: auto" :src="area.img" @error="replaceImg"/><br />
            <div>주소: {{ area.addr }}</div>
            <div v-if="area.tel">연락처: {{ area.tel }}</div>
            <div v-if="area.overview">설명: {{ area.overview }}</div>
            <a v-if="area.homepage" :href="area.homepage">홈페이지 바로가기</a>
          </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="close">
            적용
          </button>
          <button type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" @click="close">
            닫기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.modal-dialog {
  position: relative;
  margin: auto;
  max-width: 600px;
  width: 90%;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  background-color: #f7f7f7;
}

.modal-title {
  margin: 0;
  font-size: 1.25rem;
}

.close {
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  cursor: pointer;
}

.modal-body {
  position: relative;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
  background-color: #f7f7f7;
}

.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: 999;
}
</style>