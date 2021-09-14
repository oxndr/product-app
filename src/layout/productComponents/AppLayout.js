/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
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
  Link as LinkC,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import paths from '../../pages/paths';
import { Context } from '../../index';

export default function AppLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
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
                <Link to={paths.home}>Product App 🍕</Link>
              </Heading>
              <HStack
                as="nav"
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {user ? (
                  <Button
                    onClick={() => {
                      auth.signOut();
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <Link to={paths.login}>
                    <Button>Login</Button>
                  </Link>
                )}
              </HStack>
            </HStack>
            <Wrap>
              <WrapItem>
                {user ? (
                  <Avatar size="md" src={user.photoURL} />
                ) : (
                  <LinkC href="https://github.com/oxndr" isExternal>
                    <Avatar
                      size="md"
                      src="https://img.freepik.com/free-photo/cheerful-surprised-young-asian-woman-looks-big-appetizing-ice-cream-smiles-pleasantly-enjoys-eating-something-tasty-break-diet-dressed-fashionable-clothes-isolated-pink-wall_273609-49906.jpg?size=626&ext=jpg"
                    />
                  </LinkC>
                )}
              </WrapItem>
            </Wrap>
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
