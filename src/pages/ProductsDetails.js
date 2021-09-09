import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { useParams, Link } from 'react-router-dom';
import AppLayout from '../layout/productComponents/AppLayout';
import paths from './paths';

export default function Details({ products }) {
  const params = useParams();
  return (
    <AppLayout>
      <Breadcrumb
        mt={5}
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <Link to={paths.home}>Home</Link>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink>Product {`${params.id}`}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box>Details page {`${params.id}`}</Box>
    </AppLayout>
  );
}
