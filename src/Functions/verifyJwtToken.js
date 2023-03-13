import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

function isTokenExpired(token) {
  const decoded = jwtDecode(token);
  if (!decoded.exp) {
    return false;
  }
  return decoded.exp < Date.now() / 1000;
}

export default function useTokenValidation() {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    async function validateToken() {
      const token = await AsyncStorage.getItem('token');
      setIsValid(token !== null && !isTokenExpired(token));
    }

    validateToken();
  }, []);

  return isValid;
}
