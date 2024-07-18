import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const contactSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less"),
    number: Yup.string()
      .required("Required")
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={s.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="name" component="div" className={s.error} />

          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={s.field}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage name="number" component="div" className={s.error} />

          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;