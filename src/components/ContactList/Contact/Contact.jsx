import { IoCallSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import s from "./Contact.module.css";

const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={s.contact_container}>
      <div className={s.contact_name}>
        <IoPerson className={s.person_icon} size={16} />
        <span>{name}</span>
      </div>

      <div className={s.contact_number}>
        <IoCallSharp className={s.phone_icon} size={16} />
        <span>{number}</span>
      </div>

      <button className={s.contact_button_delete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;