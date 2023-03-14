import { View, Text, Button } from 'react-native';
import useToken from '../../Functions/getTokenFromStorage';
import useTokenValidation from '../../Functions/verifyJwtToken';

export function ScreenA() {

  const isValid = useTokenValidation();

  if (!isValid) {
    return (
      <View>
        <Text>Acesso negado. Por favor, faça login.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Olá, usuário autenticado.</Text>
    </View>
  );
}
