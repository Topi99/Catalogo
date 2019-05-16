import React, { useState, useEffect } from 'react';

const useQuery = ref => {
  const [ docState, setDocState ] = useState({
    isLoading: true,
    data: null
  });

  useEffect(() => {
    return ref.onSnapshot(docs => {
      setDocState({
        isLoading: false,
        data: docs    
      });
    });
  }, []);

  return docState;
}

export default useQuery;