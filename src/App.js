/* eslint-disable prettier/prettier */
import { ChakraProvider, Center, Spinner } from '@chakra-ui/react';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from './index';
import AppRouter from './pages/AppRouter';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <Center>
        <Spinner
          h={25}
          w={25}
          mt="50vh"
        />
      </Center>
    );
  }
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
