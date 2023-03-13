import AsyncStorage from '@react-native-async-storage/async-storage';

export function clearTokenFromStorage() {
  const clear = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.log(error);
    }
  };
  clear();
}