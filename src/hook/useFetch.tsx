import { useEffect, useState } from "react";

function useFetch(url: string){
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
    .then(res => {
      if(!res.ok) throw Error(`Fel vid hämtning av jobannons: ${res.status} ${res.statusText}`)
      return res.json();
      })
    .then(data => setData(data))
    .catch(err => {
        console.error(err);
        setError(err);
      })
  }, [url])

  return {data, error}
}

export default useFetch; 