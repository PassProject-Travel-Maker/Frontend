<script setup>
import PlanForm from "@/components/map/component/PlanFormView.vue";
import CategoryView from "@/components/map/component/CategoryView.vue";
</script>

<template>
  <div id="container">
    <PlanForm />
    <CategoryView/>
  </div>
</template>

<style scoped>
#container{
  width: 80%;
  height: 1000px;
  margin : 0 auto;
}
</style>
