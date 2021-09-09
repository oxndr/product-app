/* eslint-disable prettier/prettier */
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './pages/Products';
import ProductsDetails from './pages/ProductsDetails';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Route path="/details">
          <ProductsDetails />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
