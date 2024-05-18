import {api} from '@/apis/core.js'

export const getSidoApi = async() =>{
    const response = await api.get('map/sido');
    return response;
}

export const getGugunApi = async(sidoCode) =>{
    const response = await api.get(`map/gugun/${sidoCode}`);
    return response;
}

export const getCategoryApi = async(sidoCode) =>{
    const response = await api.get(`map/gugun/${sidoCode}`);
    return response;
}


export const getAttractionApi = async(searchData) =>{
    const response = await api.post('map/attractioninfo',searchData);
    return response;
}



