/* eslint-disable react/jsx-props-no-spreading */
import {
  NumberInput,
  FormControl,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
} from '@chakra-ui/react';
import { ErrorMessage, Field } from 'formik';
import FormikFieldError from './FormikFieldError';

export default function FormikNumberInput({ name, label, ...rest }) {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl id={name}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <NumberInput
            allowMouseWheel
            id={name}
            {...field}
            {...rest}
            onChange={(val) => form.setFieldValue(field.name, val)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <ErrorMessage name={name} component={FormikFieldError} />
        </FormControl>
      )}
    </Field>
  );
}
