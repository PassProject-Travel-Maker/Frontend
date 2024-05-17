<script setup></script>

<template>
  <div class="content">
    <div id="title">
      여행의 모든 순간을 <br />
      소중히.
      <br />
      <span>당신만의 맞춤 여행 경로로 더 특별한 추억을 만드세요.</span>
      <br />
      <RouterLink :to="{ name: 'map' }">
        <button>Get Started <img src="@/assets/img/arrow.svg" /></button>
      </RouterLink>
    </div>
    <img id="card1" src="@/assets/img/Card 1.svg" />
    <img id="card2" src="@/assets/img/Card 2.svg" />
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  /* background-color: blueviolet; */
  position: relative;
}

#card1 {
  position: absolute;
  top: 15%;
  right: 17%;
  z-index: 5;
}
#card2 {
  position: absolute;
  top: 40%;
  right: 10%;
}
#title {
  font-size: 58px;
  position: absolute;
  top: 40%;
  left: 15%;
  font-weight: 900;
}
span {
  font-size: 16px;
  line-height: 26px;
  font-weight: normal;
  color: #52525b;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  width: 155px;
  height: 48px;
  background-color: #f7ce46;
  color: #0f172a;
  font-weight: 700;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  border: none;
}
</style>
