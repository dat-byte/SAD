import React, { useEffect, useState } from "react";

const useGetRequest = (apiEndpoint, setData) => {

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(apiEndpoint)
      const data = await response.json()
      setData(response.ok ? data : [])
    }
    fetchApi()
  }, [])
};

export default useGetRequest;
