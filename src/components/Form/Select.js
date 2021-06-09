import React from 'react';

const SelectField = ({
  name = '',
  options = [],
  setvalue,
  placeholder = '',
  label = '',
  value,
  register,
  defaultValue = '',
  errors = {},
  className = 'form-select',
}) => {
  const attributes = {};
  if (register) {
    attributes.ref = register;
  }

  if (className) {
    attributes.className = className;
  }

  if (value) {
    attributes.value = value;
  }
  if (defaultValue) {
    attributes.defaultValue = defaultValue;
  }

  const handleChange = (e) => {
    if (setvalue) {
      setvalue(e);
    }
    return null;
  };

  return (
    <div>
      {label && (
        <label>
          <h3>{label}</h3>
        </label>
      )}
      <select name={name} onChange={(e) => handleChange(e)} {...attributes}>
        <option value="">{placeholder}</option>
        {options &&
          options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {errors[name] && (
        <h6 className="text-danger">{errors?.[name]?.message}</h6>
      )}
    </div>
  );
};

export default SelectField;
