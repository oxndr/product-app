/* eslint-disable react/jsx-props-no-spreading */
import { FormLabel, Input, FormControl } from '@chakra-ui/react';
import { Field, ErrorMessage } from 'formik';
import FormikFieldError from './FormikFieldError';

export default function FormikField({ name, label, placeholder }) {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Input {...field} id={name} placeholder={placeholder} />
          <ErrorMessage name={name} component={FormikFieldError} />
        </FormControl>
      )}
    </Field>
  );
}
