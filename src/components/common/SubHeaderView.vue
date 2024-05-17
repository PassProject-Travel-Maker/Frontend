<script setup></script>

<template>
  <div id="header">
    <RouterLink to="/">
      <img src="@/assets/img/icon.svg" />
    </RouterLink>
    <RouterLink to="/">
      <img src="@/assets/img/title.svg" />
    </RouterLink>
    <div id="header_right">
      <RouterLink to="/signin">Sign in</RouterLink>
      <RouterLink to="/signup">Create free account</RouterLink>
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
