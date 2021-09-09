import Login from './Login';
import paths from './paths';
import Products from './Products';
import ProductsDetails from './ProductsDetails';

export const publicRoutes = [
  {
    path: paths.login,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: paths.home,
    Component: Products,
  },
  {
    path: paths.details,
    Component: ProductsDetails,
  },
];
