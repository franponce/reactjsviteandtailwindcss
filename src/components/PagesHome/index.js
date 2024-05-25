import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import apiUrl from '../../API';

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Error inesperado: ${error}`);
      }
    }
    fetchData()
  }, [])