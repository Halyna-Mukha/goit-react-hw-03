import { Formik, Form, Field } from "formik";
import s from "./ContactForm.module.css";
import { useId } from "react";

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    username: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={s.field}
            type="text"
            name="username"
            id={nameFieldId}
          />

          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={s.field}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <div>
            <button className={s.btn} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
