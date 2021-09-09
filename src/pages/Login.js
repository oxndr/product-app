/* eslint-disable import/no-cycle */
import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Stack, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import firebase from 'firebase';
import { Context } from '../index';
import AppLayout from '../layout/productComponents/AppLayout';

export default function Login() {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <AppLayout>
      <Center p={8}>
        <Stack spacing={2} align="center" maxW="md" w="full">
          {/* Google */}
          <Button
            onClick={login}
            w="full"
            variant="outline"
            leftIcon={<FcGoogle />}
          >
            <Center>
              <Text>Sign in with Google</Text>
            </Center>
          </Button>
        </Stack>
      </Center>
    </AppLayout>
  );
}
