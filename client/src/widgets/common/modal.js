import React from 'react';
import { Button, Modal } from 'react-bootstrap'

const CustomModal = ({title, body, closeButton, show, setShow, size = 'md', submitButton = null, onSubmit = null}) => {

    const hide = () => {
        setShow(false)
    }

    const submit = () => {
        hide();
        onSubmit();
    }
    
    return (
        <>
            <Modal show={show} onHide={ () => setShow(false) } size={size}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hide}>{closeButton}</Button>
                    { submitButton ? <Button variant="primary" onClick={submit}>{submitButton}</Button> : '' }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CustomModal;