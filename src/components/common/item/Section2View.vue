<script setup>
import HeaderView from "@/components/common/HeaderView.vue";
</script>

<template>
  <div class="content">
    <div id="title_box">
      <div id="title">새로운 여행이 기다리고 있어요!</div>
      <div id="subtitle">전 세계 어디로든, 완벽한 여행 계획을 지금 바로 <br />시작해보세요.</div>
    </div>
    <img id="phone" src="@/assets/img/phone.svg" />
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  /* background-color: blueviolet; */
  position: relative;
}
#phone {
  position: absolute;
  top: 10%;
  right: 0;
}
#title_box {
  font-size: 60px;
  position: absolute;
  top: 40%;
  left: 15%;
  font-weight: 900;
}
#subtitle {
  font-size: 20px;
  line-height: 26px;
  font-weight: normal;
  color: #52525b;
}
#title {
  margin-bottom: 30px;
}
</style>
