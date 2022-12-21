import React, { useState } from 'react';
import { View, Alert, Image, TextInput } from 'react-native';
import { Consult, ConsultText, styles } from './estilos';


const Second = (prop) => {
  const [DDD, setDDD] = useState('');

  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />
      <TextInput
        placeholder="DDD" placeholderTextColor="#fff"
        value={DDD}
        onChangeText={setDDD}
        style={styles.input}
      />
      <Consult
        onPress={() => {
          if (DDD.length > 0) {
            prop.navigation.navigate('Final', { DDD })
          } else {
            Alert.alert('Você precisa digitar um DDD!')
          }
        }}
      ><ConsultText>Consultar DDD</ConsultText></Consult>


    </View>
  );
};

export default Second;


