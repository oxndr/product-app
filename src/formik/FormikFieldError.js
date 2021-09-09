import { Box } from '@chakra-ui/react';

export default function FormikFieldError({ children }) {
  return <Box color="red.500">{children}</Box>;
}
