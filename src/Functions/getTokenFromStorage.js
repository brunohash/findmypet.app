import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

async function getTokenFromStorage() {
  try {
    const value = await AsyncStorage.getItem('token');
    return value;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default function useToken() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      const value = await getTokenFromStorage();
      if (value) {
        setToken(value);
      }
    };
    getToken();
  }, []);

  return token;
}
