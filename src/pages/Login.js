import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Stack, Text } from '@chakra-ui/react';
import AppLayout from '../layout/productComponents/AppLayout';

export default function Login() {
  return (
    <AppLayout>
      <Center p={8}>
        <Stack spacing={2} align="center" maxW="md" w="full">
          {/* Google */}
          <Button w="full" variant="outline" leftIcon={<FcGoogle />}>
            <Center>
              <Text>Sign in with Google</Text>
            </Center>
          </Button>
        </Stack>
      </Center>
    </AppLayout>
  );
}
