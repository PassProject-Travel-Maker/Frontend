<script setup>
import { ref, watch } from "vue";
import PlanView from "@/components/member/component/PlanView.vue";
import PlanKakaoMap from "@/components/member/component/PlanKakaoMap.vue";
const emit = defineEmits(["close"]);

function close() {
  emit("close", true);
}
</script>

<template>
  <div class="modal fade" aria-labelledby="myModalLabel">
    <div class="modal-bg" @click="close()"></div>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <button class="close-btn" @click="close()">×</button>
        <div class="left">
          <PlanView />
        </div>
        <div class="right">
          <PlanKakaoMap />
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
  max-width: 800px;
  width: 90%;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  height: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  padding: 20px;
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

.right {
  width: 70%;
  height: 100%;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
  overflow: auto;
  margin-top: 50px;
}
.left {
  width: 30%;
  height: 100%;
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  padding: 20px;
  margin-right: 10px;
  overflow: auto;
  margin-top: 50px;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 35px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;
}

</style>
