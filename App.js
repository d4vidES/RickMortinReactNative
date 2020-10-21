import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import InfoCharacter from './src/pages/InfoCharacter';
import { Provider } from 'react-redux';
import store from './src/store/store';
import InfoEpisode from './src/pages/InfoEpisode';

const Stack = createStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name="home"
            options={{
              headerTitle: 'Ricky & Morty',
              cardStyle: { backgroundColor: 'white' }
            }}
            component={Home} />
          <Stack.Screen
            name="infoCharacter"
            options={{
              headerShown: false,
              cardStyle: { backgroundColor: 'rgb(60, 62, 68)' }
            }}
            component={InfoCharacter} />
            <Stack.Screen
            name="infoEpisode"
            options={{
              headerShown: false,
              cardStyle: { backgroundColor: 'rgb(60, 62, 68)' }
            }}
            component={InfoEpisode} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}






export default App;