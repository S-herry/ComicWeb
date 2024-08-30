import { useState, useCallback } from "react";

const usePostFetch = () => {
  const [postFetchData, setPostFetchData] = useState(null);

  const fetchRequest = useCallback(async ({ url, data = {} }) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setPostFetchData(result);
    } catch (err) {
      console.error("postFetch error:", err);
    }
  }, []);

  return [postFetchData, fetchRequest];
};

export default usePostFetch;
