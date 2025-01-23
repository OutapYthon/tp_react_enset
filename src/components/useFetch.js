import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController(); // Pour annuler la requête
    const { signal } = abortController;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Réinitialiser l'erreur avant chaque requête

      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          // Gérer les erreurs HTTP plus précisément
          const errorData = await response.json().catch(() => null); // Tenter de récupérer le message d'erreur du serveur
          const errorMessage = errorData?.message || `Erreur HTTP : ${response.status} ${response.statusText}`;
          throw new Error(errorMessage); // Lancer une erreur avec le message plus précis
        }

        const json = await response.json();
        setData(json);

      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted'); // Message en console pour l'annulation
        } else {
          setError(error.message); // Conserver le message d'erreur
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort(); // Nettoyage : annuler la requête si le composant est démonté
  }, [url]); // Important : url en dépendance

  return { data, isLoading, error };
}

export default useFetch;