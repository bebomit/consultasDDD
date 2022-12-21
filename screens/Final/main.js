import React, { useState, useEffect } from 'react';
import { View, Alert, Image, ScrollView } from 'react-native';
import { Consult, ConsultText, Text, styles } from './estilos';


const Final = (prop) => {
  const DDD = prop.route.params.DDD
  const [cidades, setCidades] = useState(undefined);


  const PegarDados = () => {
    fetch(`https://brasilapi.com.br/api/ddd/v1/${DDD}`)
      .then((res) => res.json())
      .then((resultado) => {
        if (resultado.message == undefined) {
          setCidades(resultado)
        }

      })
      .catch((erro) => {
        Alert.alert('Algo deu errado!');
      });

  };

  useEffect(() => {
    PegarDados();
  }, [DDD]);



  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />
      {cidades != undefined && (

        <>
          <Text>DDD: {DDD}</Text>
          <Text>Estado: {cidades.state}</Text>


        </>)}
      <ScrollView style={styles.box} showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {cidades != undefined ? (
          <>
            {cidades.cities.map((cidade) => (
              <Text key={cidade + "rr"}>{cidade}</Text>
            ))}
          </>
        ) : (
          <Text>Nada foi encontrado!</Text>
        )}
      </ScrollView>
      <Consult
        onPress={() => {
          prop.navigation.navigate('Second')
        }}
      ><ConsultText>Voltar</ConsultText></Consult>


    </View >
  );
};

export default Final;


