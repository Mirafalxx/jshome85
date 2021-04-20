import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@material-ui/core';

const FormElement = ({ required, name, label, value, onChange, error, type, autoComplete }) => {
  return (
    <Grid item xs>
      <TextField
        required={required}
        type={type}
        label={label}
        name={name}
        autoComplete={autoComplete}
        value={value}
        error={Boolean(error)}
        helperText={error}
        onChange={onChange}
      />
    </Grid>
  );
};

FormElement.propTypes = {
  required: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  error: PropTypes.string,
};
export default FormElement;
