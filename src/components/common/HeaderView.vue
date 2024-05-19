<script setup>
import MainHeaderView from "@/components/common/MainHeaderView.vue";
import SubHeaderView from "@/components/common/SubHeaderView.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <MainHeaderView v-if="route.name === 'main'" />
  <SubHeaderView v-else />
  <RouterView />
</template>

<style scoped>

</style>
