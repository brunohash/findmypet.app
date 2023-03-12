import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScreenA() {

  const navigation = useNavigation();

  function openScreen() {
   navigation.navigate('ScreenB');
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
        <Text> Screen A </Text>

        <Button 
        title="ir para a screen B"
        onPress={ openScreen }
        />
    </View>
  );
}