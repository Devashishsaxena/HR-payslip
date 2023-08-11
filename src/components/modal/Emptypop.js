import React, { useState, useEffect } from 'react'
import { MdCancel } from "react-icons/md"
import { Modal } from 'react-bootstrap'

const ProfileInfo = ({ closeModal }) => {
    const initialValues = { fullName: '', employeeID: '', birthday: '', email: '', joiningDate: '', number: '' }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        var mobilecheck = /^[0-9]{10}$/;
        if (!values.fullName) {
            errors.fullName = "Name is required"
        }
        if (!values.employeeID) {
            errors.employeeID = "EmployeeID is required"
        }
        if (!values.birthday) {
            errors.birthday = "Birthday is required"
        }
        if (!values.email) {
            errors.email = "Email is required"
        }
        else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email."
        }
        if (!values.joiningDate) {
            errors.joiningDate = "Joining Date is required"
        }
        if (!values.number) {
            errors.number = "Number is required"
        } else if (!mobilecheck.test(values.number)) {
            errors.number = "This is not valid phone number."
        }
        return errors
    }
    return (
        <>
        <Modal show={true}>
            <Modal.Body>
                <h1>Aman Kushwah</h1>
                <button onClick={() => closeModal(false)}>Close</button>
            </Modal.Body>
        </Modal>
        </>
    )
}
export default ProfileInfo

