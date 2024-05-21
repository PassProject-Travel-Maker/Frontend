import { ref } from "vue";
import { defineStore } from "pinia";
import { postDataToGPTApi } from "@/apis/gptApi.js";
export const useGPTStore = defineStore("gpt", () => {
  const gptText = ref('');
  const gptResponse = ref('<div class=md-body"> <md-block>');

  const postDataToGPT = async (data) => {
    console.log(data);
    let response = await postDataToGPTApi(data);

    //데이터 가공 함수
    
    gptText.value = response.data.replace(/\[\[/g, '<button>')
    .replace(/\]\]/g, '</button>');
    
    //
    gptResponse.value += gptText.value;
    gptResponse.value += '</md-block> </div>';
    
    console.log("gptText::::::");
    console.log(gptText.value);
    console.log("gptResponse::::::");
    console.log(gptResponse.value);

  };

  return { postDataToGPT, gptText, gptResponse };
});
