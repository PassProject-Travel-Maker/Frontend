import { ref, } from 'vue'
import { defineStore } from 'pinia'
import { getGugunApi, getSidoApi,getAttractionApi } from '@/apis/map';
export const useCategoryMapStore = defineStore('category', () => {
 


const sidos = ref([]);
const guguns = ref([]);
const areas = ref([]);
const location =ref({
  latitude : 0,
  longitude : 0
});


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


  //이동할 좌표의 중심값
  let lat=0;
  let lng=0;
  areas.value.forEach( (area)=>{
    lat +=area.latitude;
    lng +=area.longitude;
  })
  lat = lat/areas.value.length;
  lng = lng/areas.value.length;
  console.log(lat + " " + lng);
  location.value.latitude=lat;
  location.value.longitude=lng;

}


  return { sidos,guguns, getSido,getGugun,areas,getAttraction,location }
})