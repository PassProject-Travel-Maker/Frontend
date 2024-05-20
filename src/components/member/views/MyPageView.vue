<script setup>
import MyInfo from '@/components/member/component/MyInfo.vue';
import MyTravelList from '@/components/member/component/MyTravelList.vue';
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useMemberStore } from '@/stores/member';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const memberStore = useMemberStore();
const authStore = useAuthStore();

const { getMyInfo, getMyTraveList } = memberStore;

// onMounted로 useMemberStore에 있는 myInfo, myTravelList 메소드 호출하기
onMounted(() => {
    console.log("user id: ", authStore.user.id);
    getMyInfo(authStore.user.id);
    getMyTraveList(authStore.user.id);
})

</script>

<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <!-- 내 정보 조회 -->
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h3 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">내 정보 조회</h3>
                <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> -->
            </div>
            <div class="mx-auto mt-10 lg:mx-0 border p-10 sm:mt-16 sm:pt-16">
                <MyInfo />
            </div>
            <!-- 나의 여행 계획 -->
            <div class="mx-auto max-w-2xl lg:mx-0 mt-32">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">나의 여행 계획</h2>
                <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> -->
            </div>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border border-gray-200 p-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <MyTravelList/>
            </div>
        </div>
    </div>
</template>
  
