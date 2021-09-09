/* eslint-disable no-self-compare */
// import { Link } from 'react-router-dom';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button,
} from '@chakra-ui/react';
import { IoMdResize } from 'react-icons/io';
import { GiWeight } from 'react-icons/gi';
import { AiFillExclamationCircle } from 'react-icons/ai';
import { ImListNumbered } from 'react-icons/im';
import ModalWindow from './ModalWindow';

export default function ProductCard({ product, remove }) {
  return (
    <Center py={4}>
      <Box
        maxW="445px"
        w="full"
        boxShadow="2xl"
        rounded="md"
        p={6}
        overflow="hidden"
        border="1px"
        borderColor="gray.200"
        boxSizing="border-box"
      >
        <Box bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
          <Image src={product.imageUrl} layout="fill" w="500px" h="300px" />
        </Box>
        <Stack>
          <Flex align="center" justify="space-between">
            <Heading as="h3" fontSize="xl" fontFamily="body">
              {product.name}
            </Heading>
            <Stack>
              <Button variant="outline" colorScheme="green" size="xs">
                Details
              </Button>
              <ModalWindow
                variant="outline"
                colorScheme="red"
                size="xs"
                btnLabel="Delete"
                header="Delete product"
                footerBtn
                onClickSubmit={() => remove(product)}
              >
                Are you sure you want to remove the product from the list?
              </ModalWindow>
            </Stack>
          </Flex>
          <Flex
            align="center"
            color="black"
            textTransform="uppercase"
            fontWeight={800}
            fontSize="sm"
            letterSpacing={1.1}
          >
            {product.count < 3 ? (
              <Flex
                align="center"
                color="black"
                textTransform="uppercase"
                fontWeight={800}
                fontSize="sm"
                letterSpacing={1.1}
              >
                <AiFillExclamationCircle />
                <Text ml={5}>{`Count: ${product.count}`}</Text>
              </Flex>
            ) : (
              <Flex
                align="center"
                color="black"
                textTransform="uppercase"
                fontWeight={800}
                fontSize="sm"
                letterSpacing={1.1}
              >
                <ImListNumbered />
                <Text ml={5}>{`Count: ${product.count}`}</Text>
              </Flex>
            )}
          </Flex>
          <Flex
            align="center"
            color="black"
            textTransform="uppercase"
            fontWeight={800}
            fontSize="sm"
            letterSpacing={1.1}
          >
            <IoMdResize />
            <Text ml={5}>{`W: ${product.sizeW} H: ${product.sizeH}`}</Text>
          </Flex>
          <Flex
            align="center"
            color="black"
            textTransform="uppercase"
            fontWeight={800}
            fontSize="sm"
            letterSpacing={1.1}
          >
            <GiWeight />
            <Text ml={5}>{`Weight: ${product.weight}`}</Text>
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
}