import { useState } from "react";
import './AddPage.css';

export default function AddPage({addContact, handlePage, contacts}) {
    const [firstName, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSave = ()=> {
        const newContact = {
            id: contacts.length + 1,
            Name: firstName,
            LastName :lastName,
            phoneNumber: phone,
        }

        if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
            setError('PLease fill all fields');
            return;
        }

        if (!/^[\d+\-\s]+$/.test(phone)) {
            setError('Please enter the correct phone number, use only numbers or +/-');
            return;
        }
        setError('');

        addContact(newContact);
        setName('');
        setLastName('');
        setPhone('');


        handlePage('contacts');
    }

    return (
        <>
        <h2 className="add-title">Add new contact</h2>
        <form className="main-form">
            {error && <p className="errorBlock">{error}</p>}
            <input type="text" name="firstName" placeholder="Name"
            value={firstName} onChange={(e) => setName(e.target.value)}/>
            <input type="text" name="lastName" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <input type="tel" name="tel" id="" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <div className="add-buttons">
                <button className="save-btn" type="button" onClick={handleSave}>Save</button>
                <button className="cancel-btn" type="button" onClick={()=> handlePage('contacts')}>Cancel</button>
            </div>
        </form>
        </>
    )
}