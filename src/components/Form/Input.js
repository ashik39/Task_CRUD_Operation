import React from 'react';

const TextField = ({
  type,
  value,
  label = '',
  name = '',
  placeholder = '',
  setvalue,
  register,
  defaultValue = '',
  errors = {},
  className = 'form-control',
}) => {
  const attributes = { type: type };
  if (register) {
    attributes.ref = register;
  }

  if (className) {
    attributes.className = className;
  }

  if (value) {
    attributes.value = value;
  } else {
    attributes.defaultValue = defaultValue;
  }

  const handleChange = (e) => {
    if (setvalue) {
      setvalue(e);
    }
    return null;
  };
  return (
    <div className="form-group">
      {label && (
        <label>
          <h3>{label}</h3>
        </label>
      )}
      <input
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        {...attributes}
      />
      {errors[name] && (
        <h6 className="text-danger">{errors?.[name]?.message}</h6>
      )}
    </div>
  );
};

export default TextField;
