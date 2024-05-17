<script setup>
import MainHeaderView from "@/components/common/MainHeaderView.vue";
import SubHeaderView from "@/components/common/SubHeaderView.vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";

const route = useRoute();
</script>

<template>
  <MainHeaderView v-if="route.name === 'main'" />
  <SubHeaderView v-else />
  <!-- <MainHeaderView v-if="user == null" />
  <SubHeaderView v-else /> -->
  <RouterView />
</template>

<style scoped></style>
