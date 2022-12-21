import React from 'react';
import { View, Image } from 'react-native';
import { Consult, ConsultText, Texto, styles } from './estilos';


const First = (prop) => {

  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />
      <Texto>O Find-DDD é um aplicativo que irá lhe retornar as cidade que fazem parte do DDD que você informar!</Texto>
      <Consult onPress={() => { prop.navigation.navigate('Second') }}><ConsultText>Quero
        Consultar</ConsultText></Consult>


    </View>
  );
};

export default First;


