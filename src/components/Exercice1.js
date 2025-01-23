import React, { useState, useEffect } from 'react';

function Exercice1() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <div>Chargement des produits...</div>;
  if (error) return <div style={{ color: 'red' }}>Erreur : {error}</div>;
  if (!products) return <div>Aucun produit trouvé.</div>;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.title} - {product.price}€
          <img src={product.thumbnail} alt={product.title} width={50}/>
        </li>
      ))}
    </ul>
  );
}

export default Exercice1;