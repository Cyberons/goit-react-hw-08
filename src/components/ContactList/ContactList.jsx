import { useSelector } from 'react-redux'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { selectFilteredContacts } from '../../redux/contacts/selectors';


export default function ContactList() {

const contacts = useSelector(selectFilteredContacts)
   
    

    return (
        <ul className={css.contactList}>
            {contacts.map(contact => (
                <li className={css.contactListItem} key={contact.id}>
                    <Contact name={contact.name}
                        number={contact.number}
                        id = {contact.id}
                    />
                </li>
            ))}
        </ul>
)
}