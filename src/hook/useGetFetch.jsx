import { useState, useCallback } from "react";

const useGetFetch = () => {
  const [getFetchData, setGetFetchData] = useState(null);
  const [error, setError] = useState(null);

  const fetchRequest = useCallback(async ({ url, data = {} }) => {
    let token = document.cookie.split("token=")[1]?.split(";")[0];
    let newUrl = url;
    if (token == undefined) token = null;

    if (Object.keys(data).length !== 0) {
      const formData = Object.keys(data)
        .map(
          (keyName) =>
            `${encodeURIComponent(keyName)}=${encodeURIComponent(
              data[keyName]
            )}`
        )
        .join("&");

      newUrl = `${url}?${formData}`;
    }

    const sendData = async () => {
      const response = await fetch(newUrl, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const string = await response.text();
      const result = string === "" ? {} : JSON.parse(string);
      setGetFetchData(result);
    };

    sendData().catch((err) => {
      setError(err.message);
    });
  }, []);

  return [getFetchData, fetchRequest, error];
};

export default useGetFetch;
