
const ContactsList = ({contacts,deleteContact}) =>{
return (
    <ul>
     {contacts.map(({name,number,id}) =>
        <li key={id}>
            {name[0].toUpperCase()+name.substring(1)}: {number}
            <button onClick={()=>deleteContact(id)}>Delete</button> 
        </li>)}   
        
    </ul>
)
}

export default ContactsList;