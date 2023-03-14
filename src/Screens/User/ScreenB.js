import { View, Text } from 'react-native';
import useTokenValidation from '../../Functions/verifyJwtToken';

export function ScreenB() {
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
