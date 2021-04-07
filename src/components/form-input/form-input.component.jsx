import "./form-input.styles.css";

const FormInput = ({ handleChange, ...otherProps }) => (
  <input onChange={handleChange} className="input" {...otherProps} />
);

export default FormInput;
