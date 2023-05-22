import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function ContadorScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Opções</Text>
      <Button
        title="Contador"
        onPress={() => navigation.navigate('ContadorV2')}
      />
      <Button title="Volte para o menu" onPress={() => navigation.navigate('Menu')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}