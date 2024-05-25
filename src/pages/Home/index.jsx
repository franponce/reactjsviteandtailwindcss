import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import apiUrl from '../../Api';
import ProductDetails from '../../components/ProductDetails';

export const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData();
  }, []);

  return (
    <Layout>
      Home
      <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => (
            <Card
              key={item.id}
              data={item}
            />
          ))
        }
      </section>
      <ProductDetails/>
    </Layout>
  );
}

export default Home;
