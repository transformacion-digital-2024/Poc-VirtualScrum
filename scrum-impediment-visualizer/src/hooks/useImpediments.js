import { useState, useEffect } from 'react';
import { getImpediments } from '../services/api';

function useImpediments(filters) {
  const [impediments, setImpediments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImpediments() {
      try {
        setLoading(true);
        const data = await getImpediments(filters);
        setImpediments(data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchImpediments();
  }, [filters]);

  return { impediments, loading, error };
}

export default useImpediments;
