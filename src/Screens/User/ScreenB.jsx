import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import useTokenValidation from '../../Functions/verifyJwtToken';

export function ScreenB() {
  const isValid = useTokenValidation();

  useEffect(() => {
    if (!isValid) {
      navigation.navigate("SignIn");
    }
  }, []);

  return (
    <View>
      <Text>Olá, usuário autenticado.</Text>
    </View>
  );
}
