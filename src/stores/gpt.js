import { ref } from "vue";
import { defineStore } from "pinia";
import { postDataToGPTApi } from "@/apis/gptApi.js";
export const useGPTStore = defineStore("gpt", () => {
  const gptText = ref([]);

  const postDataToGPT = async (data) => {
    console.log(data);
    const response = await postDataToGPTApi(data);

    console.log(response.data);

    //데이터 가공 함수
    gptText.value=formattedData(response.data);
    console.log(gptText.value);
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
