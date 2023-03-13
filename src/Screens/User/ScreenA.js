import { View, Text, Button } from 'react-native';
import useToken from '../../Functions/getTokenFromStorage';
import verifyJwt from '../../Functions/verifyJwtToken';

export function ScreenA() {

  const token = useToken();

  return (
    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
      <Text> Screen A </Text>

      <Text>{token}</Text>
    </View>
  );
}
