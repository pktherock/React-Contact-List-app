import { useEffect, useState } from "react";
import Axios from "axios";

function useAxios(endPoint) {
  console.log("Use fetch hook called");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setLoading(true);
        const response = await Axios.get(endPoint, {
          signal: controller.signal,
        });
        setData(response.data);
        console.log("Fetched data", response.data);
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log("Request cancelled", error.message);
          return;
        }
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    // clean-up
    return () => {
      controller.abort();
    };
  }, [endPoint]);

  return [loading, error, data];
}

export default useAxios;
