import React from 'react';
import { asField } from 'informed';

export const CustomInputErr = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  return (
    <>
      <input
        {...rest}
        ref={forwardedRef}
        value={!value && value !== 0 ? '' : value}
        onChange={e => {
          setValue(e.target.value);
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={e => {
          setTouched(true);
          if (onBlur) {
            onBlur(e);
          }
        }}
        style={fieldState.error ? { border: 'solid 2px var(--midnight)' } : null}
      />
      {fieldState.error ? (
        <small style={{ color: 'var(--aether)' }}>{fieldState.error}</small>
      ) : null}
    </>
  );
});

// const validate = value => {
//   return !value || value.length < 5
//     ? 'Field must be at least five characters'
//     : undefined;
// };

/* <Form>
  <label>
    First name:
    <ErrorText
      field="name"
      validate={validate}
      validateOnChange
      validateOnBlur
    />
  </label>
  <button type="submit">Submit</button>
</Form>; */