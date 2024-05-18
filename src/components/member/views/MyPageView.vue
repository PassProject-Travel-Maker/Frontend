<script setup>
import MyInfo from '@/components/member/component/MyInfo.vue';
import MyPlanList from '@/components/member/component/MyPlanList.vue';


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
            <br/><br/><br/><br/><br/>
            <!-- 나의 여행 계획 -->
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">나의 여행 계획</h2>
                <!-- <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> -->
            </div>
            <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border border-gray-200 p-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <MyPlanList/>
            </div>
        </div>
    </div>
</template>
  
