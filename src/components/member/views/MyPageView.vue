<script setup>
import MyInfo from "@/components/member/component/MyInfo.vue";
import MyTravelItem from "@/components/member/component/MyTravelItem.vue";
import MyPlanModal from "@/components/member/component/MyPlanModal.vue";
import { ref, onMounted, watch } from "vue";
import { useMemberStore } from "@/stores/member";
import { storeToRefs } from "pinia";
import { jwtDecode } from "jwt-decode";
import { getLocalStorageToken } from "@/utils/localstorage";
const emit = defineEmits(["close"]);
const memberStore = useMemberStore();

const { getMyInfo, getMyTravelList, getPlanDetail } = memberStore;
const { myInfo, myTravelList, myPlan } = storeToRefs(memberStore);
// onMounted로 useMemberStore에 있는 myInfo, myTravelList 메소드 호출하기

const isShow = ref(false);
 
onMounted(() => {
  console.log("마운트")
  const info = jwtDecode(getLocalStorageToken());
  getMyInfo(info.id);
  getMyTravelList(info.id);
  console.log(myTravelList);
});

const getPlanDetails = async (planId) => {
  await getPlanDetail(planId);
  console.log("Planid 선택 : " + planId);
  isShow.value = true;
};

const close = () => {
  isShow.value = false;
};

watch(isShow, () => {
  if (isShow.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
});
</script>

<template>
  <div id="background"></div>
  <div class="bg-white py-24 sm:py-32 relative z-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- 내 정보 조회 -->
        <div class="mx-auto max-w-2xl lg:mx-0 flex items-center">
          <h3 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">내 정보 조회</h3>
          <img src="@/assets/images/icon/icon-43.png" class="ml-4 w-10 h-10"/>
          <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> -->
        </div>
      <div class="mx-auto mt-10 lg:mx-0 border p-10 sm:mt-16 sm:pt-16">
        <MyInfo :myinfo="myInfo" />
      </div>
      <!-- 나의 여행 계획 -->
      <div class="mx-auto max-w-2xl lg:mx-0 mt-32 flex items-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">나의 여행 계획</h2>
        <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> -->
        <img src="@/assets/images/icon/icon-31.png" class="ml-4 w-10 h-10"/>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border border-gray-200 p-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <MyTravelItem
          v-for="plan in myTravelList"
          :key="plan.id"
          :plan="plan"
          @click="getPlanDetails(plan.id)" />
      </div>
    </div>
  </div>
  <MyPlanModal v-if="isShow" @close="close" />
</template>

<style scoped>
#background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#background::before,
#background::after {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background-image: 
    url('@/assets/images/others/bubble-1.png'), 
    url('@/assets/images/others/bubble-2.png'), 
    url('@/assets/images/others/bubble-3.png'),
    url('@/assets/images/others/bubble-4.png'),
    url('@/assets/images/others/bubble-5.png'),
    url('@/assets/images/others/bubble-6.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  animation: float 20s infinite;
}

#background::before {
  top: 0;
  left: 0;
  animation-direction: alternate;
}

#background::after {
  bottom: 0;
  right: 0;
  animation-direction: alternate-reverse;
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(20px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

.bg-white {
  position: relative;
  z-index: 1;
}
</style>