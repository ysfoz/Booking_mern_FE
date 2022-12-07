import { useEffect, useState } from "react";
import axios from "axios";

export const axiosinstance = axios.create({
  // baseURL:"http://localhost:5000/api"
  baseURL:"https://booking-api-l8x3.onrender.com/api"
})

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axiosinstance.get(url);
        setData(res?.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axiosinstance.get(url);
      setData(res?.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, reFetch };
};

export default useFetch;
