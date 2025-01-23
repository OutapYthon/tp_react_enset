import React, { useState } from 'react';
import useFetch from './useFetch';

function Exercice4() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, isLoading, error } = useFetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`);

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;
  if (!data) return null;

  const totalPages = Math.ceil(data.total / limit);

  return (
    <div>
      {data.products.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.thumbnail} alt={product.title} width={100} />
        </div>
      ))}

      <div>
        <button onClick={() => setPage(prev => Math.max(1, prev - 1))} disabled={page === 1}>Précédent</button>
        <span>Page {page} sur {totalPages}</span>
        <button onClick={() => setPage(prev => Math.min(totalPages, prev + 1))} disabled={page === totalPages}>Suivant</button>
      </div>
    </div>
  );
}

export default Exercice4; // Export ajouté !