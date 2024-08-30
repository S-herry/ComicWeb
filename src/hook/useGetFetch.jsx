import { useState, useCallback } from "react";

const useGetFetch = () => {
  const [getFetchData, setGetFetchData] = useState(null);
  const [error, setError] = useState(null);

  const fetchRequest = useCallback(async ({ url, data = {} }) => {
    let newUrl = url;
    const token = localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : "";

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

    try {
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
      const result = (await string) === "" ? {} : JSON.parse(string);
      setGetFetchData(result);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message); // 可以通过 error 状态处理错误信息
    }
  }, []);

  return [getFetchData, fetchRequest, error];
};

export default useGetFetch;
