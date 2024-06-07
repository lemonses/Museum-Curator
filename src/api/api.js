import axios from "axios"
import rateLimit from "axios-rate-limit"

const vaApi = axios.create({
    baseURL: "https://api.vam.ac.uk/v2/objects"
})

const metApi = rateLimit(axios.create({
    baseURL: "https://collectionapi.metmuseum.org/public/collection/v1"
}), {maxRequests:80,perMilliseconds:100})

export function getObjects(type,page){
    return Promise.all([vaApi.get(`search?q_object_title=${type}&page_size=40&page=${page}`),metApi.get(`search?q=${type}`)])
    .then((response)=>{
        const vaResponse = response[0].data.records
        const metResponse = response[1].data.objectIDs.slice(0,40)
        return vaResponse.concat(metResponse)
    })
}

export function getObject(ObjectId){
    return metApi.get(`objects/${ObjectId}`)
    .then((response)=>{
        return response
    })
}