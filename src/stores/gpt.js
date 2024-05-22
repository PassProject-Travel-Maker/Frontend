import { ref } from "vue";
import { defineStore } from "pinia";
import { postDataToGPTApi } from "@/apis/gptApi.js";
import Lottie from "lottie-web";
import animationData from "@/assets/anim1.json";

export const useGPTStore = defineStore("gpt", () => {
  const gptText = ref("");
  const gptResponse = ref('<div class="md-body"> <md-block>');

  const lottieContainer = ref(null);
  const anim = ref(null);

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

    //데이터 가공 함수

    gptText.value = response.data.replace(/\[\[/g, "<button>").replace(/\]\]/g, "</button>");

    //
    gptResponse.value = '<div class="md-body"> <md-block>';
    gptResponse.value += gptText.value;
    gptResponse.value += "</md-block> </div>";

    console.log("gptText::::::");
    console.log(gptText.value);
    console.log("gptResponse::::::");
    console.log(gptResponse.value);
  };

  return { postDataToGPT, gptText, gptResponse, lottieContainer, anim };
});
