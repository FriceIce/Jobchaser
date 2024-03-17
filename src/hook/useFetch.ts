import { useEffect, useState } from "react";

function useFetch(url: string){
  const [data, setData] = useState<any[]>();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch(url); 
        if(!response.ok){
          const errorMessage = `Fel vid hämtning av jobannons: ${response.status} ${response.statusText}`;
          setError(errorMessage)
          throw Error(errorMessage)
        } 
        
        const data: React.SetStateAction<any> = await response.json(); 
        setData(data); 
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [])

  return {data, error}
}

export default useFetch; 