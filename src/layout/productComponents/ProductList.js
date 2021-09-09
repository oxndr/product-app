/* eslint-disable react/destructuring-assignment */
import ProductCard from './ProductCard';

export default function ProductList({ products, remove }) {
  return (
    <>
      {products.map((product) => {
        return (
          <ProductCard remove={remove} product={product} key={product.id} />
        );
      })}
    </>
  );
}
