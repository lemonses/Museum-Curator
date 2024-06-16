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
    function removeFromExhibit(){
        setUserExhibit(userExhibit =>{
            let userCopy = [...userExhibit]
            const arrayNum = userExhibit.indexOf(exhibit)
            userCopy.splice(arrayNum,1)
            return userCopy
        })
        onHide()
    }

    function addToExhibitButton(){
        const inExhibit = userExhibit.map((user)=>{
            if (user.id === exhibit.id){
                return true
            }
        })
        if(inExhibit.includes(true)){
            return <Button className="nav-button" onClick={removeFromExhibit}>Remove from personal exhibit</Button>
        }else return <Button className="nav-button" onClick={addToExhibit}>Add to personal exhibit</Button>
    }

    return(<div>
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{exhibit.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="custom-modal">
                    <img src={exhibit.image}></img>
                    <p>{exhibit.material} by {exhibit.artist} {exhibit.date}</p>
                    {exhibit.onDisplay? (
                        <p>{exhibit.displayTag}</p>
                    ):<p>This piece is currently not on display</p>}
                    {exhibit.link !== "link unknown"?(
                        <p>View more about this piece <a href={exhibit.link}>here</a></p>
                    ):<p>The link to this piece could not be found</p>}
                    
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="nav-button" onClick={onHide}>Close</Button>{addToExhibitButton()}
            </Modal.Footer>
        </Modal>
    </div>)
}

export default ExhibitModal