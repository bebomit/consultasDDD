
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from './screens/First/main';
import Second from './screens/Second/main';
import Final from './screens/Final/main';


const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false
}
  
function App() {
  return (
    <View style={styles.root}>
        <Stack.Navigator initialRouteName='First'>
            <Stack.Screen name="First" component={First} options={screenOptions} />                      
            <Stack.Screen name="Second" component={Second} options={screenOptions} />                      
            <Stack.Screen name="Final" component={Final} options={screenOptions} />                     
                                                          
        </Stack.Navigator>       
    </View>
  );
}

export default () => {
    return (
        <NavigationContainer>
          <App />
        </NavigationContainer>
    );
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#5257FF',
  },
});
