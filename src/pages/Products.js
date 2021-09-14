/* eslint-disable no-unused-expressions */
import { Flex, Center, Spinner } from '@chakra-ui/react';
import { useContext, useEffect, useMemo, useState } from 'react';
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('products').orderBy('createdAt').get();
      setProducts(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, [setProducts]);

  const { firestore } = useContext(Context);
  const [data, loading] = useCollectionData(
    firestore.collection('products').orderBy('createdAt')
  );

  const addProductToDb = (values) => {
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
  };

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

                  // To see added products on page immediately
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

                  addProductToDb(values);
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

      {!products.length && !loading ? (
        <Flex justify="center">
          Nothing a products, click on Create new product that create one ↖ 😉
        </Flex>
      ) : (
        <ProductListGrid>
          <ProductList remove={removeProduct} products={sortedProducts} />
        </ProductListGrid>
      )}
    </AppLayout>
  );
}

export default Products;
