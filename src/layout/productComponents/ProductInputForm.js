/* eslint-disable react/jsx-props-no-spreading */
import { Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikField from '../../formik/FormikField';
import FormikNumberInput from '../../formik/FormikNumberInput';

export default function ProductInputForm({ onSubmit }) {
  const schema = yup.object().shape({
    imageUrl: yup.string().label('Image URL').url().required(),
    name: yup.string().label('Product Name').required().min(3).max(100),
    count: yup.number().label('Count').required().min(1).max(50),
    sizeH: yup.number().label('Height').required().min(10).max(1000),
    sizeW: yup.number().label('Width').required().min(10).max(1000),
    weight: yup.number().label('Weight').required().min(10).max(300),
  });
  return (
    <Formik
      initialValues={{
        id: Date.now(),
        imageUrl: '',
        name: '',
        count: '1',
        sizeH: 10,
        sizeW: 10,
        weight: 10,
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <FormikField
            name="imageUrl"
            label="Image URL"
            placeholder="Image URL"
          />
          <FormikField
            name="name"
            label="Product Name"
            placeholder="Product Name"
          />
          <FormikNumberInput
            name="count"
            label="Amount of product"
            min={1}
            max={50}
          />
          <FormikNumberInput
            name="sizeW"
            label="Size (Width, cm)"
            min={10}
            max={1000}
          />
          <FormikNumberInput
            name="sizeH"
            label="Size (Height, cm)"
            min={10}
            max={1000}
          />
          <FormikNumberInput name="weight" label="Weight" min={10} max={1000} />
          <Button
            mt={4}
            colorScheme="blue"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
