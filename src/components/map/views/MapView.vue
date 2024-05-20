<script setup>
import PlanForm from "@/components/map/component/PlanFormView.vue";
import CategoryView from "@/components/map/component/CategoryView.vue";
import PlanView from "@/components/plan/views/PlanView.vue";
</script>

<template>
  <div class="container">
  <div class="left">
    <!-- <PlanForm /> -->
    <CategoryView/>
  </div>
  <div class="right">
  <PlanView/>
  </div>
  </div>
</template>

<style scoped>
.container{
  width: 80%;
  height: 1000px;
  margin : 0 auto;
  display: flex;
  position: relative;
}
.left{
  width: 70%;
}
.right{
  width: 30%;
  height: 90%;
  position: fixed;
  right: 3%;
  border: 1px solid #E4E4E7;
  border-radius: 5px;
  padding: 20px;
  overflow: auto;
}
</style>
