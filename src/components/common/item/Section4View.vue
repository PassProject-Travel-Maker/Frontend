<script setup>

</script>

<template>
  <div class="content">
    <img id="section1" src="@/assets/img/main/talk1.png" />
    <div id="title_box">
      <div id="title">자, 출발해볼까요?</div>
      <div id="subtitle">당신의 완벽한 여행이 기다리고 있습니다.</div>
      <RouterLink :to="{ name: 'map' }"
        ><button
          class="px-3 py-1.5 text-sm font-semibold shadow-sm bg-yellow-400 hover:bg-yellow-500">
          Get Started <img src="@/assets/img/arrow.svg" /></button
      ></RouterLink>
    </div>
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
  width: 90%;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
}
#title_box {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#subtitle {
  font-size: 20px;
  line-height: 26px;
  font-weight: normal;
  color: #52525b;
}
#title{
  margin-bottom: 30px;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 155px;
  height: 48px;
  /* background-color: #1D4ED8; */
  /* color: #ffffff; */
  font-weight: 700;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  border: none;
  margin-top: 20px;
}
</style>
