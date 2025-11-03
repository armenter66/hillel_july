import './ContactPage.css';

export default function ContactPage({contacts, deleteContact}) {

    console.log(contacts);
    

    const bodyTable = contacts.map(contact=> 
        <tr key={contact.id}>
            <td>{contact.Name}</td>
            <td>{contact.LastName}</td>
            <td>{contact.phoneNumber}</td>
            <td><button className='delete-btn' onClick={()=> {
                deleteContact(contact.id)
            }}>Delete</button></td>
        </tr>
    )
    
    return (
        <>
        <h2 className="contact-title">All contacts</h2>
        <table className="contacts-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {bodyTable}
            </tbody>
        </table>
        </>
    )
}