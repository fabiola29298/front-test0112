import { useEffect, useState } from 'react';
import axios from 'axios';

const useInitialState = (API) => {
  const [Info, setInfo] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setInfo(response.data);
  }, []);

  return Info;
};

export default useInitialState;
