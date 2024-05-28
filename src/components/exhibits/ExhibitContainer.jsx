import { useEffect, useState } from "react"
import ExhibitTile from "./ExhibitTile"
import { getObjects } from "../../api/api"

function ExhibitContainer({searchTerm}){
    const [exhibits,setExhibits] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        getObjects(searchTerm)
        .then(objects =>{
            setExhibits(objects)
            setIsLoading(false)
        })
    },[searchTerm])
    if (isLoading) {
        return <p>Loading ...</p>
    }
    return <ul>
        {exhibits.data.records.map((exhibit,i)=>{
            return <li key={i}><ExhibitTile exhibit={exhibit}/></li>
        })}
    </ul>
}

export default ExhibitContainer