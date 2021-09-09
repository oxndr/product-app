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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export default function AppLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   const links = [
  //     {
  //       id: new Date(),
  //       path: paths.newSong,
  //       title: 'New song',
  //     },
  //   ];

  //   const menuLinks = [
  //     user
  //       ? {
  //           id: new Date(),
  //           icon: <FiUser />,
  //           path: generatePath(paths.profile, { id: user._id }),
  //           title: 'Profile',
  //         }
  //       : null,
  //   ].filter(Boolean);

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
              {/* <Link
                // to={paths.home}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                             </Link> */}
              <Heading as="h2" size="md">
                Product List 🍕
              </Heading>
              <HStack
                as="nav"
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {/* {links.map((link) => {
                  return (
                    <Link
                      key={link.title}
                      to={link.path}
                      style={{ color: 'inherit', textDecoration: 'inherit' }}
                    >
                      <Button variant="link" color="black">
                        {link.title}
                      </Button>
                    </Link>
                  );
                })} */}
              </HStack>
            </HStack>
            <Flex alignItems="center">
              <Text mr={3}>Some user</Text>
              <Wrap>
                <WrapItem>
                  <Avatar
                    size="md"
                    name="Some user"
                    src="https://img.freepik.com/free-photo/cheerful-surprised-young-asian-woman-looks-big-appetizing-ice-cream-smiles-pleasantly-enjoys-eating-something-tasty-break-diet-dressed-fashionable-clothes-isolated-pink-wall_273609-49906.jpg?size=626&ext=jpg"
                  />
                </WrapItem>
              </Wrap>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as="nav" spacing={4}>
                {/* {links.map((link) => {
                  return (
                    <Link
                      key={link.id}
                      to={link.path}
                      style={{ color: 'inherit', textDecoration: 'inherit' }}
                    >
                      <Button variant="link" color="black">
                        {link.title}
                      </Button>
                    </Link>
                  );
                })} */}
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
