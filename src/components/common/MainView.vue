<script setup>
import { ref, onMounted } from "vue";
import MainHeaderView from "@/components/common/MainHeaderView.vue";
import Section1View from "@/components/common/item/Section1View.vue";
import Section2View from "@/components/common/item/Section2View.vue";
import Section3View from "@/components/common/item/Section3View.vue";
import Section4View from "@/components/common/item/Section4View.vue";
const page = ref(1);
const lastPage = ref(4);

const scrollTo = (element, to, duration) => {
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    } else {
      element.classList.remove("animated");
    }
  };

  animateScroll();
};

const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

onMounted(() => {
  const $html = document.querySelector("html");
  const windowHeight = window.innerHeight;

  $html.scrollTop = 0;

  window.addEventListener("wheel", (e) => {
    if ($html.classList.contains("animated")) return;

    if (e.deltaY > 0) {
      console.log(e.deltaY);
      if (page.value === lastPage.value) return;
      page.value++;
    } else if (e.deltaY < 0) {
      if (page.value === 1) return;
      page.value--;
    }

    const posTop = (page.value - 1) * windowHeight;
    $html.classList.add("animated");
    scrollTo($html, posTop, 600); // Adjust the animation duration as needed
  });
});
</script>

<template>
  <Section1View />
  <Section2View />
  <Section3View />
  <Section4View />
</template>

<style scoped></style>
