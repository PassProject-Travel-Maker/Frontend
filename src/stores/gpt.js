import { ref } from "vue";
import { defineStore } from "pinia";
import { postDataToGPTApi } from "@/apis/gptApi.js";
import Lottie from "lottie-web";
import animationData from "@/assets/anim1.json";
import { marked } from "marked";

export const useGPTStore = defineStore("gpt", () => {
  const gptText = ref("");
  const gptResponse = ref("");

  const keywords = ref("");
  const lottieContainer = ref(null);
  const anim = ref(null);
  const selectedTab = ref(0);
  const isLoading = ref(false);

  const postDataToGPT = async (data) => {
    console.log(data);

    if (anim.value) {
      anim.value.destroy();
      anim.value = null;
    }

    anim.value = Lottie.loadAnimation({
      container: lottieContainer.value,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    let response = await postDataToGPTApi(data);

    if (anim.value) {
      anim.value.destroy();
      anim.value = null;
    }

    gptText.value="";
    gptResponse.value="";
    // 데이터 가공 함수
    gptText.value = response.data
      .replace(/\[\[/g, '<button class="gpt-button">')
      .replace(/\]\]/g, "</button>");

    // 마크다운을 HTML로 변환
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      // headerIds: false,
      // tables: true,
      breaks: true,
      // pedantic: false,
      sanitize: false,
      // smartLists: true,
      // smartypants: false
    });
    gptResponse.value = marked(gptText.value);

    console.log("gptText::::::");
    console.log(gptText.value);
    console.log("gptResponse::::::");
    console.log(gptResponse.value);
  };

  const handleButtonClick = (event) => {
    selectedTab.value = 1;
    keywords.value = event.target.innerText;
    console.log(keywords.value);
  };

  return {
    postDataToGPT,
    gptText,
    gptResponse,
    lottieContainer,
    anim,
    handleButtonClick,
    keywords,
    selectedTab,
    isLoading
  };
});
