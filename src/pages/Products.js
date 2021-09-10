/* eslint-disable no-unused-expressions */
import { Flex, Center, Spinner } from '@chakra-ui/react';
import { useContext, useMemo, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import AppLayout from '../layout/productComponents/AppLayout';
import ModalWindow from '../layout/productComponents/ModalWindow';
import ProductInputForm from '../layout/productComponents/ProductInputForm';
import ProductList from '../layout/productComponents/ProductList';
import ProductListGrid from '../layout/productComponents/ProductListGrid';
import SelectItem from '../layout/productComponents/SelectItem';
import { Context } from '../index';

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      imageUrl:
        'https://i.insider.com/57c99b2ab996eb26008b5d51?width=1000&format=jpeg&auto=webp',
      name: 'Coca cola',
      count: 6,
      sizeW: '0.5',
      sizeH: '0.2',
      weight: '200',
    },
    {
      id: 2,
      imageUrl: 'https://i.ytimg.com/vi/Qy1Ih8yTBco/maxresdefault.jpg',
      name: 'Sprite',
      count: 1,
      sizeW: '0.1',
      sizeH: '0.4',
      weight: '300',
    },
    {
      id: 3,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPRk89-QFWNWxZy5-dgKv6QrujQWZMu0oBQ&usqp=CAU',
      name: 'Fanta',
      count: 10,
      sizeW: '0.5',
      sizeH: '0.5',
      weight: '100',
    },
  ]);

  const { firestore } = useContext(Context);
  const [data, loading] = useCollectionData(
    firestore.collection('products').orderBy('createdAt')
  );
  const [selectedSort, setSelectedSort] = useState('');

  const sortedProducts = useMemo(() => {
    if (selectedSort) {
      return [...products].sort((a, b) => {
        if (a[selectedSort] > b[selectedSort]) return 1;
        if (a[selectedSort] < b[selectedSort]) return -1;
        return 0;
      });
    }
    return products;
  }, [selectedSort, products]);

  const removeProduct = (product) => {
    setProducts(products.filter((p) => p.id !== product.id));
  };

  const sortProducts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <AppLayout>
      {loading ? (
        <Center>
          <Spinner h={25} w={25} mt="50vh" />
        </Center>
      ) : (
        <Flex justify="center" align="center">
          <ModalWindow
            btnLabel="Create a new product"
            header="Create a new product"
          >
            <ProductInputForm
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  actions.setSubmitting(false);
                  setProducts([
                    ...products,
                    {
                      id: new Date().getTime().toString(),
                      imageUrl: values.imageUrl,
                      name: values.name,
                      count: values.count,
                      sizeW: values.sizeW,
                      sizeH: values.sizeH,
                      weight: values.weight,
                    },
                  ]);
                  firestore.collection('products').add({
                    id: new Date().getTime().toString(),
                    imageUrl: values.imageUrl,
                    name: values.name,
                    count: values.count,
                    sizeW: values.sizeW,
                    sizeH: values.sizeH,
                    weight: values.weight,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                  });
                }, 1000);
              }}
            />
          </ModalWindow>

          <SelectItem
            w="20vh"
            mx={5}
            value={selectedSort}
            onChange={sortProducts}
            variant="filled"
            defValue="Sort by..."
            options={[
              { value: 'name', name: 'Name' },
              { value: 'count', name: 'Count' },
            ]}
          />
        </Flex>
      )}

      {products.length ? (
        <ProductListGrid>
          <ProductList remove={removeProduct} products={sortedProducts} />
          <ProductList remove={removeProduct} products={data || []} />
        </ProductListGrid>
      ) : (
        <Flex justify="center">
          Nothing a products, click on Create new product that create one ↖ 😉
        </Flex>
      )}
    </AppLayout>
  );
}

export default Products;
