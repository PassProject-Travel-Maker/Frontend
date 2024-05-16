<script setup></script>

<template>
  <div id="header">
    <img src="@/assets/img/icon.svg" />
    <img src="@/assets/img/title.svg" />

    <div id="header_right">
      <RouterLink to="/">Sign in</RouterLink>
      <RouterLink to="/">Create free account</RouterLink>
    </div>
  </div>
</template>

<style scoped>
#header {
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
}
#header_right {
  margin-left: auto;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
