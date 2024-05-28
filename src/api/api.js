import axios from "axios"
const vaApi = axios.create({
    baseURL: "https://api.vam.ac.uk/v2/objects"
})

export function getObjects(type){
    return vaApi.get(`search?q_object_name=${type}`).then((response)=>{
        console.log(response)
        return response
    })
}