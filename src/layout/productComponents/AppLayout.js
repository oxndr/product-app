// import { generatePath, Link } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Container,
  Wrap,
  WrapItem,
  Avatar,
  Heading,
  Text,
  Link as LinkC,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import paths from '../../pages/paths';

export default function AppLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const user = false;

  return (
    <>
      <Box
        borderBottom="1px"
        borderColor="gray.100"
        backgroundColor="gray.100"
        px={4}
      >
        <Container maxW="container.lg">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems="center">
              <Heading as="h2" size="md">
                <Link to={paths.home}>Product List 🍕</Link>
              </Heading>
              <HStack
                as="nav"
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {user ? (
                  <Button>Logout</Button>
                ) : (
                  <Link to={paths.login}>
                    <Button>Login</Button>
                  </Link>
                )}
              </HStack>
            </HStack>
            <Flex alignItems="center">
              <Text mr={3}>Some user</Text>
              <Wrap>
                <WrapItem>
                  <LinkC href="https://github.com/oxndr" isExternal>
                    <Avatar
                      size="md"
                      name="Some user"
                      src="https://img.freepik.com/free-photo/cheerful-surprised-young-asian-woman-looks-big-appetizing-ice-cream-smiles-pleasantly-enjoys-eating-something-tasty-break-diet-dressed-fashionable-clothes-isolated-pink-wall_273609-49906.jpg?size=626&ext=jpg"
                    />
                  </LinkC>
                </WrapItem>
              </Wrap>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as="nav" spacing={4}>
                {user ? (
                  <Button>Logout</Button>
                ) : (
                  <Link to={paths.login}>
                    <Button>Login</Button>
                  </Link>
                )}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>

      <Container maxW="container.lg" pb={100}>
        {children}
      </Container>
    </>
  );
}
