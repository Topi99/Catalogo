import { useState, useEffect } from 'react';

const useAuth = auth => {
  const [authState, setState] = useState({
    isLoading: true,
    user: null
  });
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authState =>
      setState({ isLoading: false, user: authState })
    );
    return unsubscribe;
  }, [auth]);
  return authState;
}

export default useAuth;