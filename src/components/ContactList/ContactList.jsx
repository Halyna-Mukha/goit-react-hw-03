import Contact from "./Contact/Contact";
import s from './ContactList.module.css'

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.container}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;