import { useEffect, useState } from "react"
import ExhibitTile from "./ExhibitTile"
import { getObjects } from "../../api/api"
import ExhibitModal from "./ExhibitModal"
import { formatResponse } from "../../api/utilities"
import { useNavigate } from "react-router-dom"

function ExhibitContainer({searchTerm,page}){
    const [exhibits,setExhibits] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [show,setShow] = useState(false)
    const [modalExhibit,setModalExhibit] = useState()
    const navigate = useNavigate()
    const handleClose = () => {setShow(false)}

    useEffect(()=>{
        setIsLoading(true)
        getObjects(searchTerm,page)
        .then(objects =>{
            setExhibits(objects)
            setModalExhibit(formatResponse(objects[0]))
            setIsLoading(false)
        })
    },[searchTerm,page])

    function changePage(e){
        if(e.target.innerText === '>'){
            page ++
            
        }else{
            if(page>1){
                page --
            }
        }
        navigate(`/search/${searchTerm}/${page}`)
    }

    if (isLoading) {
        return <p>Loading ...</p>
    }
    return <div>
        <button onClick={changePage}>{"<"}</button>
        <button onClick={changePage}>{">"}</button>
        <ul>
            {exhibits.map((exhibit,i)=>{
                return <li key={i}><ExhibitTile exhibit={exhibit} setShow={setShow} setModalExhibit={setModalExhibit}/></li>
            })}
        </ul>
        <ExhibitModal exhibit={modalExhibit} show={show} onHide={handleClose}/>
    </div>
}

export default ExhibitContainer