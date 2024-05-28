import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button'

function ExhibitModal({exhibit,show,onHide}) {
    return(<>
        <Modal show={show} centered>
            <Modal.Header>
                <Modal.Title>{exhibit._primaryTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <img src={exhibit.image}></img>
                    <p></p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>)
}

export default ExhibitModal