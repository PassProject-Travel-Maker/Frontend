<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import KakaoMapView from "@/components/map/component/KakaoMapView.vue";
import KakaoMapSearhView from "@/components/map/component/KakaoMapSearhView.vue";
import ChatGptView from "@/components/map/views/ChatGPTView.vue";
import PlanForm from "@/components/map/component/PlanFormView.vue";
import { useGPTStore } from "@/stores/gpt";
import { storeToRefs } from "pinia";
const gptStore = useGPTStore();
const { selectedTab } = storeToRefs(gptStore);

const selectCategory = (index) => {
  selectedTab.value = index;
};
function changeTab(index) {
  selectedTab.value = index;
}
const categories = ref({
  "카테고리 별 검색": [
    {
      id: 1,
      type: "category",
    },
  ],
  "일반 검색": [
    {
      id: 1,
      type: "search",
    },
  ],
  "GPT에게 물어보기": [
    {
      id: 1,
      type: "gpt",
    },
  ],
});
</script>

<template>
  <PlanForm />
  <div class="w-full px-2 mt-10 sm:px-0" style="width: 100%">
    <TabGroup @change="changeTab" :selectedIndex="selectedTab">
      <TabList class="inline-flex rounded-xl">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }">
          <button
            @click="selectCategory(e)"
            :class="[
              'inline-block rounded-t-xl py-2.5 px-4 text-sm font-medium font-bold leading-5',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              'border-t border-l border-r border-gray-300',
              selected
                ? 'bg-blue-400 text-white shadow'
                : 'text-blue-500 hover:bg-white/[0.12] hover:text-black',
            ]">
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="">
        <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx" class="">
          <div v-if="categories[Object.keys(categories)[idx]][0].type === 'category'">
            <KakaoMapView />
          </div>
          <div v-else-if="categories[Object.keys(categories)[idx]][0].type === 'search'">
            <KakaoMapSearhView />
          </div>
          <div v-else-if="categories[Object.keys(categories)[idx]][0].type === 'gpt'">
            <ChatGptView />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<style scoped>
</style>
