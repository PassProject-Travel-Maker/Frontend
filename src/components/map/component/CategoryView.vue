<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import KakaoMapView from "@/components/map/component/KakaoMapView.vue";
import KakaoMapSearhView from "@/components/map/component/KakaoMapSearhView.vue";
import ChatGptView from "@/components/map/component/ChatGptView.vue";
const categories = ref({
  "카테고리 별 검색": [
    {
      id: 1,
      type: 'category'
    }
  ],
  "일반 검색": [
    {
      id: 1,
      type: 'search'
    }
  ],
  "GPT에게 물어보기": [
    {
      id: 1,
      type: 'gpt'
    }
  ],
})
</script>

<template>
  <div class="w-full  px-2 mt-10 sm:px-0" style="width : 100%">
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-slate-800 /20 p-1">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-blue-700 shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          class="mt-10"
        >
        <div v-if="categories[Object.keys(categories)[idx]][0].type === 'category'">
            <KakaoMapView/>
          </div>
          <div v-else-if="categories[Object.keys(categories)[idx]][0].type === 'search'">
            <KakaoMapSearhView/>
          </div>
          <div v-else-if="categories[Object.keys(categories)[idx]][0].type === 'gpt'">
            <ChatGptView/>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<style scoped>

</style>