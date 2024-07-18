import s from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ value, onFilter }) => {
  const finedId = useId();
  const handleChange = (event) => {
    onFilter(event.target.value);
  };
  return (
    <div className={s.form}>
      <label htmlFor={finedId} className={s.title}>
        Find contacts by name
      </label>

      <input
        className={s.input}
        type="text"
        value={value}
        onChange={handleChange}
        id={finedId}
      />
    </div>
  );
};

export default SearchBox;