import axios from "axios"
import rateLimit from "axios-rate-limit"

const pageSize = 10

const vaApi = axios.create({
    baseURL: "https://api.vam.ac.uk/v2/objects"
})

const metApi = rateLimit(axios.create({
    baseURL: "https://collectionapi.metmuseum.org/public/collection/v1"
}), {maxRequests:80,perMilliseconds:100})

export function getMetObject(ObjectId){
    return metApi.get(`objects/${ObjectId}`)
    .then((response)=>{
        if(response.message){
            throw new Error('invalid objectId')
        }
        return response
    })
    .catch((err)=>{
        return err
    })
}

export function getVaObjects(type,page){
    return vaApi.get(`search?q_object_title=${type}&page_size=${pageSize}&page=${page}`)
    .then((response)=>{
        if(response.data.records.length < 1){
            throw new Error('results could not be found')
        }
        return [response.data.records,response.data.info.record_count]
    })
}

export function getMetObjects(type,page){
    return metApi.get(`search?q=${type}`)
    .then((response)=>{
        if(response.data.total < 1){
            throw new Error("no results")
        }
        const responseIDs = response.data.objectIDs
        const pagedResponse = responseIDs.slice((page-1)*pageSize,page*pageSize)
        const recordCount = responseIDs.length
        const promiseArr = pagedResponse.map((objectID)=>{
            return getMetObject(objectID)
            .then((response)=>{
                return response.data
            })
        })
        promiseArr.push(recordCount)
        return Promise.all(promiseArr)
    })
    .then((response)=>{
        const fixedArr = response.filter(Boolean)
        return fixedArr
    })
    .catch(err =>{
        return err.message
    })
}