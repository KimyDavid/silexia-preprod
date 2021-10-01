import React from 'react';
import { Button, Modal } from 'react-bootstrap'

const CustomModal = ({title, body, closeButton, show, setShow, size = 'md'}) => {
    
    return (
        <>
            <Modal show={show} onHide={ () => setShow(false) } size={size}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShow(false)}>{closeButton}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CustomModal;