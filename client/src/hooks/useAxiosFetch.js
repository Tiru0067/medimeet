import { useState, useEffect } from "react";
import api from "../api/doctors";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    let isMounted = true;
    // Creates a cancel token source to cancel requests on cleanup
    const source = api.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true); // Turn on loading state
      try {
        const response = await api.get(dataUrl, {
          CancelToken: source.token,
        });

        if (isMounted) {
          setData(response.data); // Update data state on success
          setFetchError(null); // Clear previous errors if there are any
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err);
          setData([]); // clear data on failure
        }
      } finally {
        if (isMounted) setIsLoading(false); // Turn off loading state
      }
    };
    fetchData();
    return () => {
      isMounted = false;
      source.cancel(); // cleanup: cancel request
    };
  }, [dataUrl]);

  return [data, fetchError, isLoading];
};

export default useAxiosFetch;
