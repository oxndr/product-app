import { SimpleGrid } from '@chakra-ui/layout';

export default function ProductListGrid({ children }) {
  return (
    <SimpleGrid columns={[1, 2, 2, 3]} spacing={[2, 8]}>
      {children}
    </SimpleGrid>
  );
}
