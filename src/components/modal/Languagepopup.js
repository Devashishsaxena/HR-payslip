import React, { useState, useEffect } from 'react';
import { MdCancel } from "react-icons/md";
import { Modal } from 'react-bootstrap';

const Languagepopup = ({ closeModal }) => {
    return (
        <>
        <Modal show={true}>
            <Modal.Body>
               <h1>Languagepopup popup</h1>
               <button onClick={() => closeModal(false)} className='btn btn-danger'>Close</button>
            </Modal.Body>
        </Modal>
        </>

    )
}
export default Languagepopup



