import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menuzinho</Text>
      <Button
        title="Vai para o Contador"
        onPress={() => navigation.navigate('Contador')}
      />
       <Button
        title="Vai para o Aleatorio kk"
        onPress={() => navigation.navigate('menuAleatorio')}
      />
    </View>
  );
}