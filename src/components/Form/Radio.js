import React from 'react';
import { useState } from 'react/cjs/react.development';

const RadioButtonField = ({
  options = [],
  label = '',
  name = '',
  defaultChecked = '',
  setvalue,
  register,
  errors = {},
  className = 'form-check-input',
}) => {
  const attributes = {};
  const [value, setValue] = useState(false);
  var check = true;
  if (register) {
    attributes.ref = register;
  }

  if (className) {
    attributes.className = className;
  }

  if (defaultChecked) {
    check = false;
  }

  const defaultValue = defaultChecked;

  const handleChange = (e) => {
    if (setvalue) {
      setvalue(e);
    }
    setValue(true);
    return null;
  };

  return (
    <div className="form-group">
      {label && (
        <label>
          <h3>{label}</h3>
        </label>
      )}
      <br />
      {options.map((option) => (
        <div>
          {check ? (
            <div>
              <input
                type="radio"
                id={option}
                name={name}
                value={option}
                onChange={(e) => handleChange(e)}
                {...attributes}
              />
              &nbsp;&nbsp;
              {option && (
                <label for={option}>
                  <h5>{option}</h5>
                </label>
              )}
            </div>
          ) : value ? (
            <div>
              <input
                class="form-check-input"
                type="radio"
                id={option}
                name={name}
                value={option}
                onChange={(e) => handleChange(e)}
                {...attributes}
              />
              &nbsp;&nbsp;
              {name && (
                <label for={option}>
                  <h5>{option}</h5>
                </label>
              )}
            </div>
          ) : (
            <div>
              <input
                class="form-check-input"
                type="radio"
                id={option}
                defaultChecked={defaultValue === option}
                onChange={(e) => handleChange(e)}
                {...attributes}
              />
              &nbsp;&nbsp;
              {name && (
                <label for={option}>
                  <h5>{option}</h5>
                </label>
              )}
            </div>
          )}
        </div>
      ))}

      {errors[name] && (
        <h6 className="text-danger">{errors?.[name]?.message}</h6>
      )}
      <br />
    </div>
  );
};

export default RadioButtonField;
