import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button'
import { useContext } from "react"
import { UserExhibitContext } from "../contexts/UserExhibit"

function ExhibitModal({exhibit,show,onHide}) {
    const {userExhibit,setUserExhibit} = useContext(UserExhibitContext)
    function addToExhibit(){
        setUserExhibit(userExhibit => [...userExhibit,exhibit])
        onHide()
    }
    return(<>
        <Modal show={show} centered>
            <Modal.Header>
                <Modal.Title>{exhibit.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <img src={exhibit.image}></img>
                    <p>Created by {exhibit.artist}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button><Button onClick={addToExhibit}>Add to personal exhibit</Button>
            </Modal.Footer>
        </Modal>
    </>)
}

export default ExhibitModal