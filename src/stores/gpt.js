import { ref } from "vue";
import { defineStore } from "pinia";

export const useGPTStore = defineStore("gpt", () => {
  const gptText = ref([
    {
      num: 1,
      title: ": 제주 서부 탐방",
      recommend:
        "- **오전**\n  - 도착 및 렌터카 인수\n  - [제주공항]에서 차로 약 30분 걸리는 [한림공원] 방문 (휠체어 이용 가능한 경로 확인)\n    - 입장료: 성인 12,000원, 영유아 무료\n\n- **점심**\n  - [제주마당]에서 제주 향토음식 체험\n    - 예산: 약 15,000원 / 인\n\n- **오후**\n  - [협재해수욕장]에서 산책 및 휴식 (휠체어 접근 가능한 해변)\n  \n- **저녁**\n  - [애월해안도로] 인근의 [봄날 카페]에서 저녁 식사 및 일몰 감상\n    - 예산: 약 20,000원 / 인\n\n- **숙소**\n  - 휠체어 접근 가능한 제주 서부 지역의 숙소 예약\n  - 예산: 약 80,000원 / 박\n\n---\n\n### 2",
    },
    {
      num: 2,
      title: ": 제주 동부 투어",
      recommend:
        "- **오전**\n  - [섭지코지] 방문 - 휠체어 이용에 적합한 산책로 이용\n    - 입장료: 무료\n\n- **점심**\n  - [성산일출봉 인근 식당]에서 점심\n    - 예산: 약 15,000원 / 인\n\n- **오후**\n  - [에코랜드] 탐방 - 전동 열차 탑승으로 편안한 관광 가능\n    - 입장료: 성인 12,000원, 영유아 무료\n\n- **저녁**\n  - [중문 관광단지] 내 식당에서 저녁 식사\n    - 예산: 약 20,000원 / 인\n\n- **숙소**\n  - 동부 지역 숙소로 이동 및 체크인\n  - 예산: 약 80,000원 / 박\n\n---\n\n### 3",
    },
    {
      num: 3,
      title: ": 제주 중심 문화 탐방",
      recommend:
        "- **오전**\n  - [국립제주박물관] 방문 - 휠체어 이용 가능, 다양한 전시 관람\n    - 입장료: 무료\n\n- **점심**\n  - [제주시내 전통시장]에서 현지 음식 체험\n    - 예산: 약 10,000원 / 인\n\n- **오후**\n  - [삼양 검은모래해변] 둘러보기\n    - 접근성 고려\n\n- **공항 이동**\n  - 제주공항으로 이동하여 귀가 준비\n\n---\n\n**총 예산 (대략적 계산)**\n- 숙박: 160,000원 * 2박 = 320,000원\n- 식사 및 간식: 25,000원 * 3인 * 3일 = 225,000원\n- 입장료 및 기타: 70,000원 (성인 2인 기준)\n- 렌터카 대여 및 기름값: 150,000원\n- 기타 여유금: 약 65,000원\n\n**Total: 830,000원** (총 예산은 여유롭게 남기 위한 대략적인 계산이므로, 추가적인 개인 소비를 고려하여 조정하세요.)\n\n이 여행 일정은 제주도의 서부와 동부를 포함하여 다양한 경관과 문화를 경험할 수 있도록 구성하였으며, 휠체어 사용자도 편리하게 여행할 수 있는 접근성 좋은 장소들을 중심으로 선정하였습니다.",
    },
  ]);

  const postDataToGPT = async (data) => {
    console.log(data);
    const response = await postDataToGPTApi(data);

    console.log(response.data);

    //데이터 가공 함수
  };

  const formattedData = (datas) => {
    let text = "";

    datas.forEach((data) => {
      let formattedString = data.recommend.replace(/\n/g, "<br/>");
      formattedString = formattedString.replace(/\[(.*?)\]/g, '<button class="">$1</button>');
      text += formattedString + "<br/>";
    });

    console.log(text);
    return text;
  };

  return { postDataToGPT, formattedData, gptText };
});
