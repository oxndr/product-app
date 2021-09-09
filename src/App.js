/* eslint-disable prettier/prettier */
import { ChakraProvider } from '@chakra-ui/react';
import AppRouter from './pages/AppRouter';

function App() {
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
