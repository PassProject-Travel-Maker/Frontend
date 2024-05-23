<script setup>
import HeaderView from "@/components/common/HeaderView.vue";
</script>

<template>
  <div class="content">
    <div id="title_box">
      <div id="title">여행을 계획하는 <br />가장 쉬운 방법.</div>
      <div id="subtitle">몇 번의 클릭으로 완벽한 여행 경로를 설계하세요.</div>
    </div>
    <img id="section1"  data-aos="flip-right" data-aos-duration="1500" src="@/assets/img/section1.svg" />
    <img id="section2" data-aos="flip-left" data-aos-duration="1500" src="@/assets/img/section2.svg" />
    <img id="grid" src="@/assets/img/grid.svg" />
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/img/background.svg");
  position: relative;
}

#section1 {
  position: absolute;
  top: 50%;
  right: 15%;
  z-index: 5;
}
#section2 {
  position: absolute;
  top: 15%;
  right: 25%;
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
#grid {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
