import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function AleatorioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Aleatorio kk</Text>
      <Button
        title="Aleatorio kk"
        onPress={() => {navigation.navigate({ name: 'Aleatorio',
        params: { max: 60, min: 20},
        merge: true,
  })}
  }
      />
      <Button title="Volte para o menu" onPress={() => navigation.navigate('Menu')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}