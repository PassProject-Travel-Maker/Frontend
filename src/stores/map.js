import { ref, } from 'vue'
import { defineStore } from 'pinia'
import { getGugunApi, getSidoApi,getAttractionApi } from '@/apis/map';

export const useCategoryMapStore = defineStore('category', () => {
  
const sidos = ref([]);
const guguns = ref([]);
const areas = ref([]);

const getSido = async() =>{
    const response = await getSidoApi();
    console.log(response);
    sidos.value= response.data;
}
const getGugun = async(sidoCode) =>{
    const response = await getGugunApi(sidoCode);
    console.log(response);
    guguns.value= response.data;
}

const getAttraction = async(searchData) =>{
  console.log(searchData)
  const response = await getAttractionApi(searchData);
  console.log(response)
  areas.value = response.data;
}



  return { sidos,guguns, getSido,getGugun,areas,getAttraction }
})