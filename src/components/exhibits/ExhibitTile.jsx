import  Button  from "react-bootstrap/Button"
import { formatResponse } from "../../api/utilities"
import { useEffect, useState } from "react"

function ExhibitTile({exhibit,setShow,setModalExhibit}){
    const [currExhibit,setCurrExhibit] = useState(exhibit)
    const handleShow = () => {
        setModalExhibit(currExhibit)
        setShow(true)
    }

    useEffect(()=>{
      setCurrExhibit(formatResponse(exhibit))
    },[])
    function shortTitle(title){
        if(title){
            if (title.length>27){
            return title.substring(0,24) + "..."
        }
        else{return title}
        }
        
    }
    return(
        <>
            <p>{shortTitle(currExhibit.title)}</p>
            <Button style={{backgroundColor:'white'}} onClick={handleShow}>
                <img src={currExhibit.image} alt="" />
            </Button>
        </>
    )
}

export default ExhibitTile