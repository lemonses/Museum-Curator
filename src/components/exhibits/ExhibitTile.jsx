import  Button  from "react-bootstrap/Button"
import noImage from "../../NoImage.png"
import ExhibitModal from "./ExhibitModal"
import { useState } from "react"

function ExhibitTile({exhibit}){
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const imageidentifier = exhibit._primaryImageId
    if (imageidentifier){
        exhibit.image = `https://framemark.vam.ac.uk/collections/${imageidentifier}/full/600,400/0/default.jpg`
    }
    else{
        exhibit.image = noImage
    }
    
    return(
        <>
            <p>{exhibit._primaryTitle}</p>
            <Button variant="primary" onClick={handleShow}>
                <img src={exhibit.image} alt="" />
            </Button>
            <ExhibitModal exhibit={exhibit} show={show} onHide={handleClose}/>
        </>
    )
}

export default ExhibitTile