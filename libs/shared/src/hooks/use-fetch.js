import { useState, useEffect } from "react";
import { BASE_PATH } from "config";
import { joinPaths } from "utils";

export const useFetch = (path) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        const url = joinPaths([BASE_PATH, path]);
        const response = await fetch(url, { signal });

        let data;
        switch (response.status) {
          case 200:
            data = await response.text();
            setError(null);
            setData(data);
            break;

          default:
            throw new Error(`use-fetch: Unsuccessful status code ${response.status}`);
        }
      } catch (error) {
        // if request was aborted by AbortController.abort()
        // do NOT modify state anymore as it was unmounted!
        if (!signal.aborted) {
          setError(error);
          setData(null);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [path]);

  return { loading, error, data };
};
