import React, { useEffect, useRef } from "react";
import "./index.css";

/**
 * @function Field - An input component with ready to use styles.
 * @param {string} type="text" - The type of the input.
 * @param {string} name="name" - The name of the input.
 * @param {string} placeholder="Name" - The placeholder of the input.
 * @param {string} pattern="[a-zA-Z]+" - The regex pattern for input validation
 * @param {string} defaultValue="" - The default value of the input coming in from the config.
 * @param {string} ariaLabel="Name" - The aria label that can help a screen reader to identify the input.
 * @param {string} autofill="off" - The autofill attribute of the input.
 * @param {object} prefix={ display: false, children: "" } -  Whether to show a prefix element or not.
 * @param {object} suffix={ display: false, children: "" } - Whether to show a suffix element or not.
 * @param {boolean} disabled=false - Whether to disable the input or not.
 * @param {boolean} required=false -  Whether to make the input required or not.
 * @param {bookean} spellcheck=false - Whether to enable spellcheck or not.
 * @param {number} min=undefined - The minimum value of the input.
 * @param {number} max=undefined - The minimum value of the input.
 * @param {number} minLength=undefined - The minimum length of the input.
 * @param {number} maxLength=undefined - The minimum length of the input.
 * @param {object} errorCases={} - An object that contains the error messages for each error case.
 * @param {object} additionalProps-{} - An object that contains additional props for the input.
 * @return {React.Component}
 */
const Field = (props) => {
  const {
    type = "text",
    name = "Name",
    placeholder = "Name",
    defaultValue = "",
    pattern = "[a-zA-Z]+",
    ariaLabel = "Name",
    autofill = "off",
    required = false,
    disabled = false,
    min = undefined,
    max = undefined,
    minLength = undefined,
    maxLength = undefined,
    spellcheck = false,
    errorCases = {},
    prefix = { display: false, text: "" },
    suffix = { display: false, text: "" },
    additionalProps = {},
    layout = { width: "" },
  } = props;

  const pointer = useRef();

  const toggleMessages = (remove, add) => {
    pointer.current.classList.remove(remove);
    pointer.current.classList.add(add);
  };

  const validationHandler = (e) => {
    e.nativeEvent.target.validity.valid
      ? toggleMessages("is-invalid", "is-valid")
      : ((pointer.current.nextElementSibling.innerText = errorMessage(
          e.nativeEvent.target.validity
        )),
        toggleMessages("is-valid", "is-invalid"));
  };

  const errorMessage = (validityCases) => {
    const cases = {};
    for (let key in validityCases) {
      cases[key] = validityCases[key];
    }
    return errorCases[Object.keys(cases).find((key) => cases[key])];
  };

  return (
    <>
      <div
        className={`input-group-addon my-3 align-content-around align-self-start ${layout.width}`}
      >
        {prefix.display ? (
          <span className="input-group-text">{prefix.children}</span>
        ) : null}
        <input
          ref={pointer}
          className={`form-control ${layout.children.textDecoration}`}
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          pattern={pattern}
          aria-label={ariaLabel}
          autofill={autofill}
          required={required}
          disabled={disabled}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          spellCheck={spellcheck}
          onBlur={validationHandler}
        />
        {suffix.display ? (
          <span className="input-group-text">{suffix.children}</span>
        ) : null}
        <div className="invalid-feedback">{errorCases.defaultInvalid}</div>
        <div className="valid-feedback">{errorCases.defaultValid}</div>
      </div>
    </>
  );
};

export default Field;
