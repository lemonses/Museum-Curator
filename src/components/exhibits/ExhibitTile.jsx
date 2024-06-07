import  Button  from "react-bootstrap/Button"
import { formatResponse } from "../../api/utilities"
import { useEffect, useState } from "react"
import { getObject } from "../../api/api"

function ExhibitTile({exhibit,setShow,setModalExhibit}){
    const [currExhibit,setCurrExhibit] = useState(exhibit)
    const handleShow = () => {
        setModalExhibit(currExhibit)
        setShow(true)
    }

    useEffect(()=>{
        if(typeof(exhibit) === "number"){
            getObject(exhibit)
            .then(response => {
                setCurrExhibit(formatResponse(response.data))
            })
        }else{
            setCurrExhibit(formatResponse(exhibit))
        }
    },[])
    
    return(
        <>
            <p>{currExhibit.title}</p>
            <Button variant="primary" onClick={handleShow}>
                <img src={currExhibit.image} alt="" />
            </Button>
        </>
    )
}

export default ExhibitTile